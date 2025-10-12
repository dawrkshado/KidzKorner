from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class Game(models.Model):
    game = models.CharField()

    def __str__(self):
        return self.game

class TimeCompletion(models.Model):
    game = models.ForeignKey(Game, related_name="time_complete", on_delete= models.CASCADE)
    time = models.IntegerField(default = 0)
    star = models.IntegerField(default= 0)

    def __str__(self):
        return f'{self.game.game}: {self.time} seconds {self.star} star'
        

class Roles(models.Model):
    role = models.CharField()
    def __str__(self):
        return self.role


class CustomUser(AbstractUser):
    role = models.ForeignKey(
        Roles, 
        related_name='users', 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True
    )

    def __str__(self):
        return f"{self.username} ({self.role})"