from django.urls import path
from .views import mainPageView


urlpatterns = [
    path('', mainPageView, name='mainpage'),
]
