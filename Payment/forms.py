from django import forms

from .models import TicketPay


class PaymentForm(forms.ModelForm):

    class Meta:
        model = TicketPay
        fields = ('order', 'name', 'surname', 'phone', 'email')

