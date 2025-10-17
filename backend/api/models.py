from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator

class Game(models.Model):
    game = models.CharField()

    three_star_time = models.IntegerField(
        default=20, 
        help_text="Maximum time in seconds to get 3 stars"
    )
    two_star_time = models.IntegerField(
        default=30, 
        help_text="Maximum time in seconds to get 2 stars"
    )
    one_star_time = models.IntegerField(
        default=45, 
        help_text="Maximum time in seconds to get 1 star"
    )

    def __str__(self):
        return self.game

class TimeCompletion(models.Model):

    STAR_CHOICES = [
    (0, ' No Stars'),
    (1, ' 1 Star'),
    (2, ' 2 Stars'),
    (3, ' 3 Stars'),
    ]
    game = models.ForeignKey(Game, related_name="time_complete", on_delete= models.CASCADE)
    time = models.IntegerField(default = 0)
    star = models.IntegerField(default= 0, choices=STAR_CHOICES, validators=[MinValueValidator(0), MaxValueValidator(3)])

    def calculate_stars(self):
        """Calculate stars based on time"""

        if self.time <=  self.game.three_star_time:
            return 3
        elif self.time <= self.game.two_star_time and self.time > self.game.three_star_time:
            return 2
        elif self.time > self.game.one_star_time:
            return 1
        else:
            return 0

    def save(self, *args, **kwargs):
        # Auto-calculate stars before saving
        self.star = self.calculate_stars()
        super().save(*args, **kwargs)

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
    

class UserChild(models.Model):
    parent = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='children')
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - Child of {self.parent.first_name} {self.parent.last_name}"
