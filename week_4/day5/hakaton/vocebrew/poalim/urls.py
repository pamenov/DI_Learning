from django.urls import path

from . import views

urlpatterns = [
    path('', views.HomeView, name='homepage'),
    path('generate_audio/<str:word>', views.GetAudio, name='generate_audio'),
    path('verb/<int:id>', views.VerbView, name='verb_view'),
]
