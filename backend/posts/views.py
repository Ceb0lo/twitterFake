from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Post
from .serializers import PostSerializer
from social.models import Follow


class PostViewSet(viewsets.ModelViewSet):

    queryset = Post.objects.all().order_by("-created_at")
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=["get"], permission_classes=[IsAuthenticated])
    def feed(self, request):

        user = request.user

        following_ids = Follow.objects.filter(follower=user).values_list(
            "following_id", flat=True
        )

        posts = Post.objects.filter(
            user__id__in=list(following_ids) + [user.id]
        ).order_by("-created_at")

        serializer = self.get_serializer(posts, many=True)

        return Response(serializer.data)
