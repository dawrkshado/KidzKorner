from rest_framework import serializers
from .models import *


class UserChildSerializer(serializers.ModelSerializer):
    birth_date = serializers.DateField(format="%d %B, %Y")
    parent_full_name = serializers.SerializerMethodField()
    class Meta:
        model = UserChild
        fields = ['first_name', 'last_name', 'birth_date', 'parent_full_name']
    def get_parent_full_name(self, obj):
        parent = obj.parent
        return f"{parent.first_name} {parent.last_name}"
    


class CustomUserSerializer(serializers.ModelSerializer):
    children = UserChildSerializer(many=True, read_only=True)
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email', 'children']


class Game(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['game','difficulty','level']

class gameSerializer(serializers.ModelSerializer):
    child = UserChildSerializer(read_only=True)
    game_level = Game(read_only=True)

    difficulty = serializers.CharField(source='game.difficulty', read_only=True)
    game_type = serializers.CharField(source='game_level.game', read_only=True)

    class Meta:
        model = TimeCompletion
        fields = ['child','game_type', 'difficulty','game_level','time', 'star']
