from django.urls import path
from . import views
from .views import UserDetailView

urlpatterns = [
    path("register/", views.register),

    # 🔎 rotas mais específicas
    path("<str:username>/posts/", views.user_posts),
    path("<str:username>/followers/", views.user_followers),
    path("<str:username>/following/", views.user_following),

    path("<str:username>/", UserDetailView.as_view()),
]
