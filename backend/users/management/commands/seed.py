from django.core.management.base import BaseCommand
from faker import Faker
import random

from users.models import User
from posts.models import Post
from social.models import Comment, Like, Follow


class Command(BaseCommand):
    help = "Populate database with fake data"

    def handle(self, *args, **kwargs):

        fake = Faker()

        users = []

        # criar usuários
        for _ in range(10):
            user = User.objects.create_user(
                username=fake.user_name(),
                email=fake.email(),
                password="123456"
            )
            users.append(user)

        posts = []

        # criar posts
        for _ in range(10):
            post = Post.objects.create(
                user=random.choice(users),
                text=fake.sentence()
            )
            posts.append(post)

        # criar comentários
        for _ in range(15):
            Comment.objects.create(
                user=random.choice(users),
                post=random.choice(posts),
                text=fake.sentence()
            )

        # criar likes
        for _ in range(20):
            Like.objects.get_or_create(
                user=random.choice(users),
                post=random.choice(posts)
            )

        # criar follows
        for _ in range(20):
            follower = random.choice(users)
            following = random.choice(users)

            if follower != following:
                Follow.objects.get_or_create(
                    follower=follower,
                    following=following
                )

        self.stdout.write(self.style.SUCCESS("Database seeded successfully!"))