from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'email', 'first_name', 'last_name', 'get_role', 'is_staff', 'is_active']
    list_filter = ['role', 'is_staff', 'is_active']

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('role',)}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('role',)}),
    )

    def get_role(self, obj):
        return obj.role.role if obj.role else '-'
    get_role.short_description = 'Role'



class UserChildAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'birth_date', 'parent','get_parent_first_name', 'get_parent_last_name']
    list_filter = ['parent']
    search_fields = ['first_name', 'last_name', 'parent','parent__first_name', 'parent__last_name']

    def get_parent_first_name(self, obj):
        return obj.parent.first_name if obj.parent else '-'
    get_parent_first_name.short_description = "Parent First Name"

    def get_parent_last_name(self, obj):
        return obj.parent.last_name if obj.parent else '-'
    get_parent_last_name.short_description = "Parent Last Name"


class GameAdmin(admin.ModelAdmin):
    list_display = ['child','game', 'time', 'star']
    search_fields = ['game__game']

admin.site.register(Game)
admin.site.register(TimeCompletion, GameAdmin)
admin.site.register(Roles)
admin.site.register(UserChild, UserChildAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
