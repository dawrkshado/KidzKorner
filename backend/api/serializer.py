from rest_framework import serializers
from .models import *


class UserChildSerializer(serializers.ModelSerializer):
    birth_date = serializers.DateField(format="%d %m, %Y")
    class Meta:
        model = UserChild
        fields = "__all__"

class CustomUserSerializer(serializers.ModelSerializer):
    children = UserChildSerializer(many=True, read_only=True)
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email', 'children']


class gameSerializer(serializers.ModelSerializer):
    child = UserChildSerializer(read_only=True)
    class Meta:
        model = TimeCompletion
        fields = ['child','game', 'difficulty','level','time', 'star']
