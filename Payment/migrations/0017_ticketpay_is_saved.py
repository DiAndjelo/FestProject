# Generated by Django 3.0.6 on 2020-06-17 03:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Payment', '0016_ticketpay_is_payed'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticketpay',
            name='is_saved',
            field=models.BooleanField(default=False, verbose_name='Сохранено?'),
        ),
    ]
