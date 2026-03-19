from rest_framework import serializers
from .models import Post


from rest_framework import serializers


class PostSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source="user.username")
    foto = serializers.SerializerMethodField()
    comments_count = serializers.SerializerMethodField()
    likes_count = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            "id",
            "user",
            "foto",
            "text",
            "created_at",
            "comments_count",
            "likes_count",
            "is_liked",
        ]

    def get_comments_count(self, obj):
        return obj.comments.count()

    def get_likes_count(self, obj):
        return obj.likes.count()

    def get_is_liked(self, obj):
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            return obj.likes.filter(user=request.user).exists()
        return False

    def get_foto(self, obj):
        request = self.context.get("request")
        if obj.user.foto:
            return request.build_absolute_uri(obj.user.foto.url)
        return None
