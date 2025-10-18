from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import user_profile
from .views import logout_api
from .views import parent_profile
from .views import child_register

urlpatterns = [
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("user-profile/", user_profile, name="user-profile"),
    path("roles", user_profile, name="roles"),
    path("logout", logout_api, name="logout"),
    path("parent/", parent_profile, name="parent-profile"),
    path("child_register/", child_register, name="register_child"),
]
