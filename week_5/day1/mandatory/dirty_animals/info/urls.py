from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('family/<int:pk>/', views.ViewFamily, name='family'),
    path('animal/<int:pk>/', views.ViewAnimal, name='animal'),
    path('animals/', views.AllAnimals, name='all_animals')
]
