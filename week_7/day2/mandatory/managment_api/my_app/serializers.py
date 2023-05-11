from rest_framework import serializers
from .models import Employee, Department, Project, Task
from django.contrib.auth import get_user_model


User = get_user_model()


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = '__all__'


class DepartmentSerializer(serializers.ModelSerializer):

    department = serializers.HyperlinkedIdentityField(view_name="retrieve_department")

    class Meta:
        model = Department
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):

    project = serializers.HyperlinkedIdentityField(view_name="retrieve_project")

    class Meta:
        model = Task
        fields = '__all__'
