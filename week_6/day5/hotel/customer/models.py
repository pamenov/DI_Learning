from django.db import models
from django.contrib.auth.models import User


class RoomType(models.Model):
    name = models.CharField(max_length=50)
    capacity = models.IntegerField()
    price = models.IntegerField()

    def __str__(self):
        return self.name


class Room(models.Model):
    number = models.IntegerField()
    title = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    price_fix = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.title} number {self.number}"


class Rent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="rents")
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    start_date = models.DateField()
    finish_date = models.DateField()
    payed = models.BooleanField()

    def __str__(self):
        return f"{self.room} {self.start_date} - {self.finish_date}"


class UserType(models.Model):
    is_staff = models.BooleanField()
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="usertype")


class Review(models.Model):
    text = models.TextField()
    rent = models.OneToOneField(Rent, on_delete=models.CASCADE, related_name="review")

