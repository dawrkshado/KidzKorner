from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator


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
    schedule_choices = [
        ('morning', '8:00 AM to 11:00 AM'),
        ('noon', '11:00 AM to 1:00 PM')
    ]
    
    parent = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='children')
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    birth_date = models.DateField(null=True, blank=True)
    section = models.CharField(null=True, blank=True)
    class_sched = models.CharField(choices=schedule_choices, max_length=30, blank=True, null=True)


    def __str__(self):
        return f"{self.first_name} {self.last_name} "
    
class Game(models.Model):
    game_Choices = [
        ('Shape', 'Shape'),
        ('Number', 'Number'),
        ('Alphabet', 'Alphabet'),
        ('Color', 'Color'),
    ]

    difficulty_Choices = [
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard'),
    ]


    game_name = models.CharField( choices=game_Choices, max_length=20)
    difficulty = models.CharField(max_length=10, choices=difficulty_Choices, default='Easy')
    level = models.IntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(10)])
    

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
        return f"{self.game_name} - {self.difficulty} - Level {self.level}"



class TimeCompletion(models.Model):
    STAR_CHOICES = [
        (0, 'No Stars'),
        (1, '1 Star'),
        (2, '2 Stars'),
        (3, '3 Stars'),
    ]

    child = models.ForeignKey(UserChild, on_delete=models.CASCADE, related_name='child_name', default=1)
    game_level = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='time_completions')
    time = models.IntegerField(default=0)
    star = models.IntegerField(default=0, choices=STAR_CHOICES, validators=[MinValueValidator(0), MaxValueValidator(3)])

    def calculate_stars(self):
        """Calculate stars based on the time and game_level thresholds."""
        if not self.game_level:
            return 0  # safety check if game_level is missing

        if self.time <= self.game_level.three_star_time:
            return 3
        elif self.time <=  self.game_level.two_star_time and self.time > self.game_level.three_star_time:
            return 2
        elif self.time > self.game_level.one_star_time:
            return 1
        else:
            return 0

    def save(self, *args, **kwargs):
        # Auto-calculate stars before saving
        self.star = self.calculate_stars()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.game_level.game_name} - {self.game_level.difficulty} - Level {self.game_level.level}: {self.time}s, {self.star} star(s)'
        

class UploadedFile(models.Model):
    uploader = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='uploaded_files'
    )
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} (by {self.uploader.username})"