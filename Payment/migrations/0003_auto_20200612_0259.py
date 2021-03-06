# Generated by Django 3.0.6 on 2020-06-11 21:59

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Payment', '0002_auto_20200611_1931'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='ticketpay',
            options={'verbose_name': 'Билет в заказе', 'verbose_name_plural': 'Билеты в заказе'},
        ),
        migrations.RemoveField(
            model_name='ticketpay',
            name='total_amount',
        ),
        migrations.AddField(
            model_name='ticketpay',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='Создано'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='ticketpay',
            name='nmb',
            field=models.IntegerField(default=1, verbose_name='Количество'),
        ),
        migrations.AddField(
            model_name='ticketpay',
            name='price_per_item',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10, verbose_name='Стоимость'),
        ),
        migrations.AddField(
            model_name='ticketpay',
            name='ticket',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Payment.Ticket', verbose_name='Билет'),
        ),
        migrations.AddField(
            model_name='ticketpay',
            name='total_price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10, verbose_name='Сумма'),
        ),
        migrations.AddField(
            model_name='ticketpay',
            name='updated',
            field=models.DateTimeField(auto_now=True, verbose_name='Обновлено'),
        ),
        migrations.DeleteModel(
            name='PaymentModel',
        ),
    ]
