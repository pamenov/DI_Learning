from django.urls import path

from . import views

urlpatterns = [
    path('phonenumber/<slug:phone>/', views.viewPhonenumber, name="phonenumber_info"),
    path('name/<slug:name>/', views.viewName, name="person_info"),
]
