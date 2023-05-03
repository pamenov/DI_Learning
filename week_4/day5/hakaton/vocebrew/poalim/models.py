from django.db import models


class Category(models.Model):
    name_rus = models.CharField(max_length=10)
    name_eng = models.CharField(max_length=10)

    def __str__(self):
        return self.name_rus


class Verb(models.Model):
    hebrew = models.CharField(max_length=20)
    root = models.CharField(max_length=10)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    ru_translate = models.CharField(max_length=100)
