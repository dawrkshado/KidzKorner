from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate,  get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Game, TimeCompletion, UserChild, UploadedFile, CustomUser
from .serializer import CustomUserSerializer, UploadedFileSerializer, UserChildSerializer, gameSerializer


from rest_framework.permissions import AllowAny

# Create your views here.
@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)

    if user is not None:
        refresh = RefreshToken.for_user(user)
       
        role = user.role.role if user.role else 'Student'

        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user": {
                "id": user.id,
                "username": user.username,
                "role": role,  
            }
        })
    return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_api(request):
    try:
        refresh_token = request.data.get("refresh_token")

        if not refresh_token:
            return Response({"error": "No refresh token provided."}, status=status.HTTP_400_BAD_REQUEST)

        token = RefreshToken(refresh_token)
        token.blacklist() 

        return Response({"message": "Logged out successfully."}, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def child_register(request):
    user = request.user
    first_name = request.data.get('first_name')
    last_name =  request.data.get('last_name')
    birth_date = request.data.get('birth_date')
    section = request.data.get('section')
    class_sched = request.data.get('class_sched')

    if not all([first_name, last_name, birth_date]):
        return Response(
            {"error": "All fields are required."},
            status=status.HTTP_400_BAD_REQUEST
            )

    child = UserChild.objects.create(
        parent=user,
        first_name=first_name,
        last_name=last_name,
        birth_date=birth_date,
        section=section,
        class_sched=class_sched
    )
    

    serializer = UserChildSerializer(child)

    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user
    role = user.role.role if user.role else 'Student'

    return Response({
        "id": user.id,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "username": user.username,
        "email": user.email,
        "role": role,
    })



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def time_completions(request):
    user = request.user

    if user.role.role == "Parent" :
        children = UserChild.objects.filter(parent=user)
        completions = TimeCompletion.objects.filter(child__in=children)
    elif user.role.role == "Teacher" :
        completions = TimeCompletion.objects.all()
    else:
        completions = TimeCompletion.objects.none()

    serializer = gameSerializer(completions, many=True)

  
    
    return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(["GET"])
@permission_classes([IsAuthenticated]) 
def parent_profile(request):
    user = request.user

    if not user.role or user.role.role.lower() not in ["parent","teacher","admin"]:
        return Response(
            {"error": "Access denied. Only parents can view this information."},
            status=status.HTTP_403_FORBIDDEN,
        )

    serializer = CustomUserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([IsAuthenticated]) 
def parent_profile_teacherview(request):
    user = request.user
    users = CustomUser.objects.filter(role__role="Parent") 
    serializer = CustomUserSerializer(users, many=True) 

    if not user.role or user.role.role.lower() not in ["teacher","admin",]:
        return Response(
            {"error": "Access denied. Only parents can view this information."},
            status=status.HTTP_403_FORBIDDEN,
        )
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
@permission_classes([IsAuthenticated]) 
def student_profile_teacherview(request):
    user = request.user
    users =  UserChild.objects.all()  
    serializer = UserChildSerializer(users,many=True) 

    if not user.role or user.role.role.lower() not in ["teacher","admin"]:
        return Response(
            {"error": "Access denied. Only parents can view this information."},
            status=status.HTTP_403_FORBIDDEN,
        )
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def delete_child(request):
    child_id = request.data.get("child_id")
    if not child_id:
        return Response({"error": "Child ID is required"}, status=400)

    try:
        child = UserChild.objects.get(id=child_id)
        child.delete()
        return Response({"message": "Child deleted successfully"}, status=200)
    except UserChild.DoesNotExist:
        return Response({"error": "Child not found"}, status=404)




@api_view(["POST"])
@permission_classes([IsAuthenticated])
def upload_file(request):
    user = request.user

    # Only allow teachers to upload
    if user.role.role != "Teacher":
        return Response({"error": "Only teachers can upload files."}, status=status.HTTP_403_FORBIDDEN)

    file = request.FILES.get("file")
    title = request.data.get("title", "Untitled")

    if not file:
        return Response({"error": "No file uploaded"}, status=status.HTTP_400_BAD_REQUEST)

    uploaded = UploadedFile.objects.create(uploader=user, title=title, file=file)
    serializer = UploadedFileSerializer(uploaded)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def list_files(request):
    # Everyone can view files (students, teachers, parents)
    files = UploadedFile.objects.all().order_by("-uploaded_at")
    serializer = UploadedFileSerializer(files, many=True)
    return Response(serializer.data)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_file(request, pk):
    try:
        file = UploadedFile.objects.get(pk=pk)
    except UploadedFile.DoesNotExist:
        return Response({"error": "File not found"}, status=status.HTTP_404_NOT_FOUND)

    # Only the uploader or an admin can delete
    if request.user != file.uploader and not request.user.is_staff:
        return Response({"error": "Not allowed to delete this file"}, status=status.HTTP_403_FORBIDDEN)

    file.delete()
    return Response({"message": "File deleted successfully"}, status=status.HTTP_204_NO_CONTENT)


    

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def save_progress(request):
    try:
        child_id = request.data.get('child_id')
        game_name = request.data.get('game')
        difficulty = request.data.get('difficulty')
        level = request.data.get('level')
        time = request.data.get('time')

        if not all([child_id, game_name, difficulty, level, time]):
            return Response({"error": "Missing fields"}, status=status.HTTP_400_BAD_REQUEST)


        try:
            game = Game.objects.get(game_name=game_name, difficulty=difficulty, level=level)
        except Game.DoesNotExist:
            return Response({"error": "Game level not found"}, status=status.HTTP_404_NOT_FOUND)

        try:
            print("DEBUG — Game type is:", Game)
            child = UserChild.objects.get(id=child_id)
        except UserChild.DoesNotExist:
            return Response({"error": "Child not found"}, status=status.HTTP_404_NOT_FOUND)

        completion = TimeCompletion.objects.create(
            child=child,
            game_level=game,
            time=time
        )

        serializer = gameSerializer(completion)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    except Exception as e:
        import traceback
        print("SAVE PROGRESS ERROR:", e)
        traceback.print_exc()  
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
