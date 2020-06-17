from django.contrib import admin

# Register your models here.
from Payment.models import Ticket, TicketPay, PaymentModel


class TicketAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price')

    class Meta:
        model = Ticket


admin.site.register(Ticket, TicketAdmin)


class TicketPayAdmin(admin.ModelAdmin):
    list_display = ('id', 'surname', 'name', 'email', 'is_payed')

    class Meta:
        model = TicketPay


admin.site.register(TicketPay, TicketPayAdmin)


class PaymentModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'total_price')

    class Meta:
        model = PaymentModel


admin.site.register(PaymentModel, PaymentModelAdmin)