from django.urls import path
from . import views
from .views import toggle_follow

urlpatterns = [
    path("follow/toggle/", toggle_follow),
    path("follow/", views.follow_user),
    path("unfollow/", views.unfollow_user),
]