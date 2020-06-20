from django.db import models

# Create your models here.


class Participation(models.Model):
    name = models.CharField('Название', max_length=128)
    consist = models.CharField('Музыкальный состав', max_length=128)
    phone = models.CharField('Номер телефона', max_length=20, null=True, blank=True)
    email = models.EmailField('E-mail', max_length=128, null=True, blank=True)
    text = models.TextField('Текст', max_length=1024, default='')
    is_confirmed = models.BooleanField('Подтверждено?', default=False)

    def __str__(self):
        return "Группа №%s" % self.name

    class Meta:
        verbose_name = "Музыкальная группа"
        verbose_name_plural = "Музыкальные группы"


class Reservation(models.Model):
    phone = models.CharField('Номер телефона', max_length=20, null=False, blank=False)

    def __str__(self):
        return "Номер телефона %s" % self.phone

    class Meta:
        verbose_name = "Номер для бронирования"
        verbose_name_plural = "Номера для бронирования"