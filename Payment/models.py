from django.db import models
from random import randint


class Ticket(models.Model):
    """ Модель Билета
    """
    name = models.CharField('Название', max_length=64)
    price = models.DecimalField("Стоимость", default=0, max_digits=10, decimal_places=2)

    def __str__(self):
        return "%s %s RUB " % (self.name, int(self.price))

    class Meta:
        verbose_name = "Билет"
        verbose_name_plural = "Билеты"


class PaymentModel(models.Model):
    """ Модель оплаты заказа. Здесь считается количество заказанных билетов и их стоимость. Отсюда будем брать сумму
        и передавать в ЯКассы
    """
    # ticket_pay = models.ManyToManyField(TicketPay, verbose_name="Заказ", blank=True, default=None)
    email = models.EmailField('Email', max_length=64, blank=False, null=False)
    ticket = models.ForeignKey(Ticket, verbose_name="Билет", blank=True, default='Билет за 3000 RUB', null=True,
                               on_delete=models.SET_NULL)
    nmb = models.IntegerField("Количество", default=0)
    price_per_item = models.DecimalField("Стоимость", default=0, max_digits=10, decimal_places=2)
    total_price = models.DecimalField("Сумма", default=0, max_digits=10, decimal_places=2)  # price*nmb
    created = models.DateTimeField("Создано", auto_now_add=True, auto_now=False)
    updated = models.DateTimeField("Обновлено", auto_now_add=False, auto_now=True)

    def __str__(self):
        return "%s Билета(ов). В сумме %s RUB" % (self.nmb, int(self.total_price))

    class Meta:
        verbose_name = "Билет в заказе"
        verbose_name_plural = "Билеты в заказе"

    def save(self, nmb=0, is_view=False, *args, **kwargs):
        price_per_item = self.ticket.price
        self.price_per_item = price_per_item
        if not is_view:
            for i in TicketPay.objects.all():
                if PaymentModel.objects.get(id=i.order.id):
                    nmb += 1
        self.nmb = nmb
        self.total_price = int(self.nmb) * price_per_item

        super(PaymentModel, self).save(*args, **kwargs)


class TicketPay(models.Model):
    """ Модель принадлежности билета + генерация индивидуального кода
    """
    order = models.ForeignKey(PaymentModel, on_delete=models.CASCADE)
    name = models.CharField("Имя", max_length=64, blank=False, null=False, default=None)
    surname = models.CharField("Фамилия", max_length=64, blank=False, null=False, default=None)
    email = models.EmailField('Email', max_length=64, blank=False, null=False)
    # customer_email = models.EmailField("Email", max_length=128, blank=False, null=False, default=None)
    phone = models.CharField("Телефон", max_length=48, blank=True, null=True, default=None)
    generated_code = models.CharField("Персональный ключ", max_length=6, blank=True, null=False)
    created = models.DateTimeField("Создано", auto_now_add=True, auto_now=False)
    updated = models.DateTimeField("Обновлено", auto_now_add=False, auto_now=True)

    def save(self, *args, **kwargs):
        b = ''
        alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                    'U', 'V', 'W', 'X', 'Y', 'Z',
                    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                    'u', 'v', 'w', 'x', 'y', 'z',
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        checker = False
        count = ''
        for i in range(5):
            a = randint(0, len(alphabet)-1)
            b = str(b) + str(alphabet[a])
        for i in PaymentModel.objects.all():
            if i.id == self.order.id:
                checker = True
                try:
                    i.save(*args, **kwargs)
                except:
                    pass

        self.generated_code = b
        # try:
        #     if checker:
        #         count.save(*args, **kwargs)
        # except:
        #     pass
        super(TicketPay, self).save(*args, **kwargs)

    def __str__(self):
        return "Билет №%s" % self.id

    class Meta:
        verbose_name = "Заказанный билет c ключом"
        verbose_name_plural = "Заказанные билеты с ключом"