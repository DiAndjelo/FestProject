# Generated by Django 3.0.6 on 2020-06-22 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Landing', '0006_auto_20200622_1204'),
    ]

    operations = [
        migrations.AddField(
            model_name='members',
            name='email',
            field=models.EmailField(default=1, max_length=64, verbose_name='Email'),
            preserve_default=False,
        ),
    ]
