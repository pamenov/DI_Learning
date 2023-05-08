from django.db import models


class Country(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Director(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Film(models.Model):
    title = models.CharField(max_length=50)
    release_date = models.DateField(auto_now_add=True)
    created_in_country = models.ForeignKey(Country, on_delete=models.DO_NOTHING, related_name='created_films')
    availiable_in_countries = models.ManyToManyField(Country, related_name='avaliable_films', blank=True)
    category = models.ManyToManyField(Category, related_name='films')
    director = models.ForeignKey(Director, on_delete=models.CASCADE, related_name='films')

    def __str__(self):
        return self.title
