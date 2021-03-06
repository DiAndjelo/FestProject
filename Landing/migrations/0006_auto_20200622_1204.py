# Generated by Django 3.0.6 on 2020-06-22 07:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Landing', '0005_questions'),
    ]

    operations = [
        migrations.AddField(
            model_name='participation',
            name='is_email',
            field=models.BooleanField(default=False, verbose_name='Отправлять сообщение о подтверждении?'),
        ),
        migrations.CreateModel(
            name='Members',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256, verbose_name='Имя Фамилия')),
                ('role', models.CharField(max_length=64, verbose_name='Роль в группе')),
                ('participation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Landing.Participation')),
            ],
        ),
    ]
