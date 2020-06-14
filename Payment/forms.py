from django import forms

from .models import TicketPay


class PaymentForm(forms.ModelForm):
    class Meta:
        model = TicketPay
        fields = ('name', 'surname', 'phone', 'order')

