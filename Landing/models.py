from django.core.mail import send_mail
from django.db import models

# Create your models here.
from django.shortcuts import reverse
from django.contrib.sitemaps import Sitemap
from django.template.loader import get_template


class Participation(models.Model):
    name = models.CharField('Название', max_length=128)
    consist = models.CharField('Музыкальный состав', max_length=128)
    phone = models.CharField('Номер телефона', max_length=20, null=True, blank=True)
    email = models.EmailField('E-mail', max_length=128, null=True, blank=True)
    text = models.TextField('Текст', max_length=1024, default='', blank=True, null=True)
    is_confirmed = models.BooleanField('Подтверждено?', default=False)
    is_email = models.BooleanField('Отправлять сообщение о подтверждении?', default=False)

    def save(self, *args, **kwargs):
        if self.is_email and self.is_confirmed:
            members = []
            for member in Members.objects.all():
                if member.participation.id == self.id:
                    members.append(member)
            render_context = {
                'id': str(self.id),
                'name': self.name,
                'members': members,
            }
            send_mail('Добро пожаловать на фестиваль ЧесТнок!', self.email, 'info@chestnokfest.live',
                      [self.email],
                      html_message=get_template('Payment/lettermainpage_request.html').render(render_context))

        super(Participation, self).save(*args, **kwargs)

    def __str__(self):
        return "Группа %s" % self.name

    class Meta:
        verbose_name = "Музыкальная группа"
        verbose_name_plural = "Музыкальные группы"


class Members(models.Model):
    participation = models.ForeignKey(Participation, on_delete=models.CASCADE)
    nmb = models.IntegerField('Порядковый номер участника', default=1)
    name = models.CharField('Имя Фамилия', max_length=256)
    role = models.CharField('Роль в группе', max_length=64)
    email = models.EmailField('Email', max_length=64)

    def __str__(self):
        return "Член команды %s - %s" % (self.participation.name, self.name)

    class Meta:
        verbose_name = "Участник группы"
        verbose_name_plural = "Участники групп"


class Reservation(models.Model):
    phone = models.CharField('Номер телефона', max_length=20, null=False, blank=False)

    def __str__(self):
        return "Номер телефона %s" % self.phone

    class Meta:
        verbose_name = "Номер для бронирования"
        verbose_name_plural = "Номера для бронирования"


class Questions(models.Model):
    phone = models.CharField('Номер телефона', max_length=20, null=False, blank=False)

    def __str__(self):
        return "Номер телефона %s" % self.phone

    class Meta:
        verbose_name = "Номер для вопросов"
        verbose_name_plural = "Номера для вопросов"



