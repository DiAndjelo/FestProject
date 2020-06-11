# Generated by Django 3.0.6 on 2020-06-11 22:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Payment', '0003_auto_20200612_0259'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ticketpay',
            name='nmb',
        ),
        migrations.RemoveField(
            model_name='ticketpay',
            name='price_per_item',
        ),
        migrations.RemoveField(
            model_name='ticketpay',
            name='ticket',
        ),
        migrations.RemoveField(
            model_name='ticketpay',
            name='total_price',
        ),
        migrations.AddField(
            model_name='ticket',
            name='name',
            field=models.CharField(default=2, max_length=64, verbose_name='Название'),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='PaymentModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nmb', models.IntegerField(default=1, verbose_name='Количество')),
                ('price_per_item', models.DecimalField(decimal_places=2, default=0, max_digits=10, verbose_name='Стоимость')),
                ('total_price', models.DecimalField(decimal_places=2, default=0, max_digits=10, verbose_name='Сумма')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Создано')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('order', models.ManyToManyField(blank=True, default=None, null=True, to='Payment.TicketPay', verbose_name='Заказ')),
                ('ticket', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Payment.Ticket', verbose_name='Билет')),
            ],
            options={
                'verbose_name': 'Билет в заказе',
                'verbose_name_plural': 'Билеты в заказе',
            },
        ),
    ]
