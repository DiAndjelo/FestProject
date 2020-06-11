from django.contrib import admin

# Register your models here.
from Payment.models import Ticket, TicketPay, PaymentModel

admin.site.register(Ticket)
admin.site.register(TicketPay)
admin.site.register(PaymentModel)