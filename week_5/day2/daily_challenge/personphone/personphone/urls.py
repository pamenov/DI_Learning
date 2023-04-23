from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('person/', include('person.urls')),
    path('admin/', admin.site.urls),
]
