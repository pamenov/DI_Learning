from django.contrib import admin

from .models import Category, Country, Director, Film

admin.site.register(Country)
admin.site.register(Category)
admin.site.register(Director)
admin.site.register(Film)
