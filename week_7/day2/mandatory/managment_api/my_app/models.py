from django.db import models
from django.contrib.auth.models import User


class Department(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()

    def __str__(self):
        return self.name


class Employee(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    department = models.ForeignKey(Department, on_delete=models.DO_NOTHING, related_name="employees")

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    people = models.ManyToManyField(Employee, related_name='projects')

    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    due_date = models.DateField()
    completed = models.BooleanField(default=False)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="tasks")


class UserRoles(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="roles")
    is_admin = models.BooleanField(default=False)
    admin_in_departments = models.ManyToManyField(Department, null=True, related_name="admins")

    def __str__(self):
        return str(self.user)
