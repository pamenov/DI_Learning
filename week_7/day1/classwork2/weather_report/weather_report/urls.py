from django.contrib import admin
from django.urls import path, include
from weatherapp import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/reports/', views.ReportListView.as_view(), name='all_reports'),
    path('api/reports/<int:pk>', views.ReportDetailView.as_view(), name='all_reports'),
    path('api/reports/<int:pk>/delete/', views.ReportDeleteView.as_view(), name='all_reports'),
]
