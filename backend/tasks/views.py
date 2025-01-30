from rest_framework import viewsets
from .models import TaskModel
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer
