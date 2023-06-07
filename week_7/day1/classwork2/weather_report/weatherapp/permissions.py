from rest_framework import permissions

class IsBadGuy(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.user.username == 'asd':
            return False
        return True

    # def has_object_permission(self, request, view, obj):
