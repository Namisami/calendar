from rest_framework import serializers
from .models import TaskModel


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TaskModel
        fields = ['url', 'id', 'title', 'day', 'time', 'user_id']
