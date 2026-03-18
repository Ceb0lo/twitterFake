from rest_framework import serializers
from .models import Post


from rest_framework import serializers


class PostSerializer(serializers.ModelSerializer):
    likes_count = serializers.SerializerMethodField()
    comments_count = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()
    user = serializers.CharField(source="user.username", read_only=True)


    class Meta:
        model = Post
        fields = "__all__"

    def get_likes_count(self, obj):
        return obj.likes.count()

    def get_comments_count(self, obj):
        return obj.comments.count()

    def get_is_liked(self, obj):
        user = self.context["request"].user

        if user.is_anonymous:
            return False

        return obj.likes.filter(user=user).exists()
