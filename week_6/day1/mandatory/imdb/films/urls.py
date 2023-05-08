from django.urls import path

from . import views

urlpatterns = [
    path('director/add/', views.addDirector.as_view(), name='add_director'),
    path('film/add/', views.addFilm.as_view(), name='add_film'),
    path('', views.HomePage.as_view(), name='homepage'),
    # path('director/<int:pk>', views.lalalala)
]
