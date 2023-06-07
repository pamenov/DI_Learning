from django.urls import path
from .views import signupView, loginView, logoutView, profileView

urlpatterns = [
    path('signup/', signupView, name='signup'),
    path('login/', loginView, name='login'),
    path('logout/', logoutView, name='logout'),
    path('profile/<int:id>', profileView, name='profile'),
]