from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_201_CREATED
from .models import Student
from .serializers import StudentSerializer


class StudentList(APIView):

    permission_classes = (IsAdminUser,)

    def get(self, request, *args, **kwargs):
        if "date_joined" in request.query_params:
            date = request.query_params["date_joined"]
            queryset = Student.objects.filter(date_added=date)
        else:
            queryset = Student.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        else:
            return Response({"detail": "bad data"}, HTTP_400_BAD_REQUEST)


class StudentDetails(APIView):

    permission_classes = (IsAdminUser,)

    def get(self, request, pk, *args, **kwargs):
        student = get_object_or_404(Student, id=pk)
        serializer = StudentSerializer(student)
        return Response(serializer.data, status=HTTP_200_OK)

    def delete(self, request, pk, *args, **kwargs):
        student = get_object_or_404(Student, id=pk)
        student.delete()
        return Response({"detail": "Deleted"}, status=HTTP_200_OK)

    def put(self, request, pk, *args, **kwargs):
        student = get_object_or_404(Student, id=pk)
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        print("not valid")
        return Response({"detail": "somethings wrong"}, status=HTTP_400_BAD_REQUEST)
