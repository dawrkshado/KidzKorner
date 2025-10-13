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


admin.site.register(Game)
admin.site.register(TimeCompletion)
admin.site.register(Roles)
admin.site.register(UserChild)
admin.site.register(CustomUser, CustomUserAdmin)
