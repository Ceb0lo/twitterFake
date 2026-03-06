from rest_framework import serializers
from .models import Like
from .models import Comment
from .models import Follow
from users.models import User


class LikeSerializer(serializers.ModelSerializer):

    user = serializers.SlugRelatedField(read_only=True, slug_field="username")

    class Meta:
        model = Like
        fields = ["id", "user", "post"]


class CommentSerializer(serializers.ModelSerializer):

    user = serializers.SlugRelatedField(read_only=True, slug_field="username")

    class Meta:
        model = Comment
        fields = ["id", "user", "post", "text", "created_at"]


class FollowSerializer(serializers.ModelSerializer):

    follower = serializers.SlugRelatedField(read_only=True, slug_field="username")

    following = serializers.SlugRelatedField(
        queryset=User.objects.all(), slug_field="username"
    )

    class Meta:
        model = Follow
        fields = ["id", "follower", "following", "created_at"]
