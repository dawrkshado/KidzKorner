from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class CustomUserAdmin(UserAdmin):
   
    model = CustomUser
    list_display = ['username', 'email', 'role', 'is_staff', 'is_active']



admin.site.register(Game)
admin.site.register(TimeCompletion)
admin.site.register(Roles)
admin.site.register(UserLevel)
admin.site.register(CustomUser, CustomUserAdmin)
