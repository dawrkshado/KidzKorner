from django.db import models
from django.contrib.auth.models import AbstractUser


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
    
    
class UserLevel(models.Model):
    user = models.ForeignKey("auth.User", on_delete= models.CASCADE)
    role = models.ForeignKey(Roles, related_name="userLevel", on_delete=models.CASCADE)

    def __str__(self):
        return f'User: {self.user} Role: {self.role.role}'
    



class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('Teacher', 'Teacher'),
        ('Parent', 'Parent'),
        ('Student', 'Student'),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='Student')

    def __str__(self):
        return self.username