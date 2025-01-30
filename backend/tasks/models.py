from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator


class TaskModel(models.Model):
    day = models.IntegerField(verbose_name="День недели (0-7)", validators=[MinValueValidator(0), MaxValueValidator(7)])
    title = models.CharField(verbose_name="Мероприятие", max_length=255)
    time = models.TimeField(verbose_name="Время мероприятия")
    user_id = models.ManyToManyField(verbose_name="Участники", to=User)

    def __str__(self):
        return self.title
