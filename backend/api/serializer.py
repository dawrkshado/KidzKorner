from rest_framework import serializers
from .models import *


class UserChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserChild
        fields = ['first_name', 'last_name', 'birth_date']

class CustomUserSerializer(serializers.ModelSerializer):
    children = UserChildSerializer(many=True, read_only=True)
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email', 'children']
