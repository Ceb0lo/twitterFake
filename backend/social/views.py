from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets, permissions
from rest_framework.decorators import action

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

    def get_queryset(self):
        queryset = super().get_queryset()
        post_id = self.request.query_params.get("post_id")

        if post_id:
            queryset = queryset.filter(post_id=post_id)

        return queryset


class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=["post"])
    def toggle(self, request):
        user = request.user
        post_id = request.data.get("post_id")

        like = Like.objects.filter(user=user, post_id=post_id).first()

        if like:
            like.delete()
            return Response({"liked": False}, status=status.HTTP_200_OK)

        Like.objects.create(user=user, post_id=post_id)
        return Response({"liked": True}, status=status.HTTP_201_CREATED)


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
            status=status.HTTP_400_BAD_REQUEST,
        )

    follow, created = Follow.objects.get_or_create(
        follower=follower, following=following
    )

    if not created:
        return Response(
            {"message": "Você já segue este usuário"}, status=status.HTTP_200_OK
        )

    return Response({"message": "Agora você está seguindo este usuário"})


@api_view(["DELETE"])
def unfollow_user(request):
    follower = request.user
    username = request.data.get("username")

    following = get_object_or_404(User, username=username)

    follow = Follow.objects.filter(follower=follower, following=following)

    if not follow.exists():
        return Response(
            {"error": "Você não segue este usuário"}, status=status.HTTP_400_BAD_REQUEST
        )

    follow.delete()

    return Response({"message": "Você deixou de seguir este usuário"})


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def toggle_follow(request):
    user_id = request.data.get("user_id")

    try:
        user_to_follow = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response({"error": "Usuário não encontrado"}, status=404)

    if request.user == user_to_follow:
        return Response(
            {"error": "Você não pode seguir a si mesmo"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    follow, created = Follow.objects.get_or_create(
        follower=request.user, following=user_to_follow
    )

    if not created:
        follow.delete()
        return Response({"following": False})

    return Response({"following": True})
