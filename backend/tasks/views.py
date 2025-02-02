from rest_framework import viewsets
from .models import TaskModel
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        queryset = TaskModel.objects.all()
        username = self.request.query_params.get('username')
        if username is not None:
            queryset = queryset.filter(user_id__username=username)
        return queryset
