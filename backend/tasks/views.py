from rest_framework import viewsets, response
from rest_framework.decorators import action
from .models import TaskModel
from .serializers import TaskSerializer

DAYS = {
    0: "monday",
    1: "tuesday",
    2: "wednesday",
    3: "thursday",
    4: "friday"
}


class TaskViewSet(viewsets.ModelViewSet):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        username = self.request.query_params.get('username')
        if username:
            queryset = queryset.filter(user_id__username=username)
        return queryset.order_by('time')

    @action(methods=["get"], detail=False)
    def schedule(self, request, *args, **kwargs):
        grouped = {}
        for task in self.get_queryset():
            time_key = task.time.strftime("%H:%M")
            
            if time_key not in grouped:
                grouped[time_key] = {
                    'id': task.id,
                    'time': task.time.strftime("%H:%M"),
                    **{day: None for day in DAYS.values()}
                }
            
            if day_name := DAYS.get(task.day):
                grouped[time_key][day_name] = task.title

        result = sorted(grouped.values(), key=lambda x: x['time'])
        return response.Response(result)
    