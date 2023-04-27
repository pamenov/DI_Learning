from django.urls import path

from . import views

urlpatterns = [
    path("addtask/", views.ToDoView, name="add_task"),
    path("", views.AllTasksView, name="all_tasks"),
    # path()
]
