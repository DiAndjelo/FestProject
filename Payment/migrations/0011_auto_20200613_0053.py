# Generated by Django 3.0.6 on 2020-06-12 19:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Payment', '0010_auto_20200612_0418'),
    ]

    operations = [
        migrations.RenameField(
            model_name='paymentmodel',
            old_name='order',
            new_name='ticket_pay',
        ),
    ]
