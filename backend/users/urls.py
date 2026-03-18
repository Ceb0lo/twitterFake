from django.urls import path
from . import views
from .views import UserDetailView

urlpatterns = [
    path("<str:username>/", UserDetailView.as_view()),
    path("register/", views.register),
    path("<str:username>/posts/", views.user_posts),
    path("<str:username>/followers/", views.user_followers),
    path("<str:username>/following/", views.user_following),
]