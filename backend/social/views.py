from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets, permissions

from django.shortcuts import get_object_or_404

from users.models import User
from .models import Comment, Like, Follow
from .serializers import CommentSerializer, LikeSerializer, FollowSerializer


class CommentViewSet(viewsets.ModelViewSet):

    queryset = Comment.objects.all().order_by("-created_at")
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class LikeViewSet(viewsets.ModelViewSet):

    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class FollowViewSet(viewsets.ModelViewSet):

    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(follower=self.request.user)


@api_view(["POST"])
def follow_user(request):
    follower = request.user
    username = request.data.get("username")

    following = get_object_or_404(User, username=username)

    if follower == following:
        return Response(
            {"error": "Você não pode seguir a si mesmo"},
            status=status.HTTP_400_BAD_REQUEST
        )

    follow, created = Follow.objects.get_or_create(
        follower=follower,
        following=following
    )

    if not created:
        return Response(
            {"message": "Você já segue este usuário"},
            status=status.HTTP_200_OK
        )

    return Response({"message": "Agora você está seguindo este usuário"})

@api_view(["DELETE"])
def unfollow_user(request):
    follower = request.user
    username = request.data.get("username")

    following = get_object_or_404(User, username=username)

    follow = Follow.objects.filter(
        follower=follower,
        following=following
    )

    if not follow.exists():
        return Response(
            {"error": "Você não segue este usuário"},
            status=status.HTTP_400_BAD_REQUEST
        )

    follow.delete()

    return Response({"message": "Você deixou de seguir este usuário"})
