from rest_framework import viewsets, response
from rest_framework.exceptions import ParseError
from rest_framework.decorators import action
from django.contrib.auth.models import User
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
    
    def create(self, request, *args, **kwargs):
        print(request)
        try:
            time = request.data['time']
            day = request.data['day']
            title = request.data['title']
            usernames = request.data['participiants']

            if (title == ""): return response.Response("Обязательное поле: 'Название'", status=400)
            if (len(usernames) == 0): return response.Response("Обязательное поле: 'Участники'", status=400)
            if (day is None): return response.Response("Обязательное поле: 'День недели'", status=400)
            if (time == ""): return response.Response("Обязательное поле: 'Время мероприятия'", status=400)

            try:
                users = []
                for username in usernames:
                    user = User.objects.get(username=username)
                    tasks = TaskModel.objects.filter(time=time, day=day, user_id=user)
                    if len(tasks) != 0:
                        return response.Response(data=f"У пользователя {username} уже занят этот слот", status=400)
                    users.append(user)
                task = TaskModel.objects.create(day=day, title=title, time=time)
                task.user_id.set(users)

                return response.Response(data="Успешно создан", status=201)
            except Exception as e:
                return response.Response(data=e, status=500)

        except Exception as e:
            return response.Response(data=f"Не хватает поля: {e}", status=400)

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
    