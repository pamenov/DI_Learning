from django.contrib import admin
from django.urls import path, include
from my_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/department/', views.DepartmentListAPIView.as_view(), name='all_department'),
    path('api/employee/', views.EmployeeListCreateAPIView.as_view(), name='all_employee'),
    path('api/project/<int:pk>', views.ProjectRetrieveAPIView.as_view(), name='retrieve_project'),
    path('api/project/<int:pk>/delete/', views.ProjectDestroyAPIView.as_view(), name='delete_project'),
    path('api/project/<int:pk>/update/', views.ProjectUpdateAPIView.as_view(), name='update_project'),
    path('api/task/<int:pk>', views.TaskRetrieveAPIView.as_view(), name='retrieve_task'),
    path('api/task/<int:pk>/delete/', views.TaskDestroyAPIView.as_view(), name='delete_task'),
    path('api/task/<int:pk>/update/', views.TaskUpdateAPIView.as_view(), name='update_task'),
]
