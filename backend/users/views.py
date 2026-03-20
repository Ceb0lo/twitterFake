from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token


from .models import User
from .serializers import UserProfileSerializer

from posts.models import Post
from posts.serializers import PostSerializer

from social.models import Follow


from rest_framework.generics import RetrieveUpdateAPIView


class UserDetailView(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = "username"

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context


@api_view(["GET"])
def user_posts(request, username):
    try:
        user = User.objects.get(username=username)
        posts = Post.objects.filter(user=user).order_by("-created_at")

        serializer = PostSerializer(posts, many=True, context={"request": request})
        return Response(serializer.data)
    except User.DoesNotExist:
        return Response({"error": "Usuário não encontrado"}, status=404)


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
    username = request.data.get("username")  # ⚠️ usar username
    password = request.data.get("password")

    user = authenticate(username=username, password=password)

    if user is not None:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({"token": token.key, "username": user.username})

    return Response({"error": "Credenciais inválidas"}, status=401)


@api_view(["POST"])
def register(request):
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")

    user = User.objects.create_user(username=username, email=email, password=password)

    return Response({"message": "Usuário criado com sucesso"})
