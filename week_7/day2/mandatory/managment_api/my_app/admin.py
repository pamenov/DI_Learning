from django.contrib import admin
from .models import Department, Task, Employee, Project

admin.site.register(Department)
admin.site.register(Project)
admin.site.register(Employee)
admin.site.register(Task)