from django.urls import path
from . import views

urlpatterns = [
    path("<str:username>/", views.user_profile),
    path("<str:username>/posts/", views.user_posts),
    path("<str:username>/followers/", views.user_followers),
    path("<str:username>/following/", views.user_following),
]