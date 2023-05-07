from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from django.shortcuts import get_object_or_404
from .models import Report
from .serializers import ReportSerializer
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_201_CREATED

class ReportView(APIView):

    permission_classes = (IsAdminUser,)

    def get(self, request, *args, **kwargs):
        pk = kwargs.get('pk')

        if pk is not None:
            try:
                report_obj = get_object_or_404(Report, id=pk)
                serializer = ReportSerializer(report_obj)
            except Report.DoesNotExist:
                return Response({"detail": "blabla", "qwe": "asd"}, status=HTTP_400_BAD_REQUEST)
        else:
            queryset = Report.objects.all()
            serializer = ReportSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request, *args, **kwargs):

        serializer = ReportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        else:
            return Response({"detail": "bad data"}, HTTP_400_BAD_REQUEST)


    def delete(self, request, pk, *args, **kwargs):
        post = get_object_or_404(Report, id=pk)
        post.delete()
        return Response({"detail": "Post deleted"}, status=HTTP_200_OK)

# Create your views here.
