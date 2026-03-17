from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import User
from .serializers import UserProfileSerializer

from posts.models import Post
from posts.serializers import PostSerializer

from social.models import Follow


@api_view(["GET"])
def user_profile(request, username):
    user = get_object_or_404(User, username=username)

    serializer = UserProfileSerializer(user)

    return Response(serializer.data)


@api_view(["GET"])
def user_posts(request, username):
    user = get_object_or_404(User, username=username)

    posts = Post.objects.filter(user=user).order_by("-created_at")

    serializer = PostSerializer(posts, many=True)

    return Response(serializer.data)


@api_view(["GET"])
def user_followers(request, username):
    user = get_object_or_404(User, username=username)

    followers = Follow.objects.filter(following=user)

    users = [f.follower for f in followers]

    serializer = UserProfileSerializer(users, many=True)

    return Response(serializer.data)


@api_view(["GET"])
def user_following(request, username):
    user = get_object_or_404(User, username=username)

    following = Follow.objects.filter(follower=user)

    users = [f.following for f in following]

    serializer = UserProfileSerializer(users, many=True)

    return Response(serializer.data)


@api_view(["POST"])
def login(request):
    email = request.data.get("email")
    password = request.data.get("password")

@api_view(["POST"])
def register(request):
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")

    user = User.objects.create_user(
        username=username,
        email=email,
        password=password
    )

    return Response({
        "message": "Usuário criado com sucesso"
    })
