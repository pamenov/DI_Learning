from django.db import models


class Family(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Animal(models.Model):
    name = models.CharField(max_length=50, unique=True)
    legs = models.IntegerField()
    weight = models.FloatField()
    height = models.FloatField()
    speed = models.FloatField()
    family = models.ForeignKey(Family, on_delete=models.SET_NULL, null=True)
