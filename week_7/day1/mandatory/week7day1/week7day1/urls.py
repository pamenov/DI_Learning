from django.contrib import admin
from django.urls import path, include
from student.views import StudentList, StudentDetails


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/students/', StudentList.as_view(), name='all_students'),
    path('api/students/<int:pk>', StudentDetails.as_view(), name='students_details'),
]
