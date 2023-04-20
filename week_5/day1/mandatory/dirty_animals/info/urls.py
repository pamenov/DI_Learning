from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('family/<int:pk>/', views.ViewFamily),
    path('animal/<int:pk>/', views.ViewAnimal),
]
