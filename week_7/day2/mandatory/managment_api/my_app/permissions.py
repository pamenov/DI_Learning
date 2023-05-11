from rest_framework import permissions


class IsDepartmentAdmin(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.roles.is_admin


class IsAdminInDepartment(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if not request.user.is_authenticated:
            return False
        print(type(obj))
        return obj in request.user.roles.admin_in_departments.all()