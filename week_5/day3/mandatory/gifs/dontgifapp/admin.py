from django.contrib import admin

from .models import Category, Gif

admin.site.register(Gif)
admin.site.register(Category)
