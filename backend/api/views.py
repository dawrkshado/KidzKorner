from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate,  get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from .models import * 
from .serializer import *
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

    if not all([first_name, last_name, birth_date]):
        return Response(
            {"error": "All fields are required."},
            status=status.HTTP_400_BAD_REQUEST
            )

    child = UserChild.objects.create(
        parent=user,
        first_name=first_name,
        last_name=last_name,
        birth_date=birth_date
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
    children = UserChild.objects.filter(parent=user)
    completions = TimeCompletion.objects.filter(child__in=children)
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

    if not user.role or user.role.role.lower() not in ["teacher","admin"]:
        return Response(
            {"error": "Access denied. Only parents can view this information."},
            status=status.HTTP_403_FORBIDDEN,
        )
    return Response(serializer.data, status=status.HTTP_200_OK)