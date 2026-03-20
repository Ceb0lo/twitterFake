from rest_framework import serializers
from .models import User
from social.models import Follow


class UserProfileSerializer(serializers.ModelSerializer):
    followers = serializers.SerializerMethodField()
    following = serializers.SerializerMethodField()
    is_following = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "foto",
            "bio",
            "followers",
            "following",
            'is_following'
        ]

    def get_followers(self, obj):
        return obj.followers.count()

    def get_following(self, obj):
        return obj.following.count()

    def get_is_following(self, obj):
        request = self.context.get('request')

        if not request or not request.user.is_authenticated:
            return False

        return Follow.objects.filter(
            follower=request.user,
            following=obj
        ).exists()

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance