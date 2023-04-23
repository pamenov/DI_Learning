from django.urls import path

from . import views

urlpatterns = [
    path('', views.People ),
    path('<int:person_id>/', views.Person),
]
