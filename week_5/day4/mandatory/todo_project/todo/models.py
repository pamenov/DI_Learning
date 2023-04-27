from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=30, unique=True)
    image = models.URLField()

    def __str__(self):
        return self.name

class ToDo(models.Model):
    title = models.CharField(max_length=50)
    details = models.TextField()
    has_been_done = models.BooleanField(default=False)
    date_creation = models.DateField(auto_now_add=True)
    date_completion = models.DateField(blank=True, null=True)
    deadline = models.DateField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
