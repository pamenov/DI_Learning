from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('films.urls')),
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
]
