# Generated by Django 3.0.6 on 2020-06-12 20:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Payment', '0012_auto_20200613_0126'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='ticketpay',
            options={'verbose_name': 'Заказанный билет c ключом', 'verbose_name_plural': 'Заказанные билеты с ключом'},
        ),
        migrations.RenameField(
            model_name='ticketpay',
            old_name='customer_name',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='ticketpay',
            old_name='customer_phone',
            new_name='phone',
        ),
        migrations.RenameField(
            model_name='ticketpay',
            old_name='customer_surname',
            new_name='surname',
        ),
        migrations.RemoveField(
            model_name='paymentmodel',
            name='ticket_pay',
        ),
        migrations.RemoveField(
            model_name='ticketpay',
            name='customer_email',
        ),
        migrations.AddField(
            model_name='paymentmodel',
            name='email',
            field=models.EmailField(default=2, max_length=64, verbose_name='Email'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='ticketpay',
            name='order',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='Payment.PaymentModel'),
            preserve_default=False,
        ),
    ]