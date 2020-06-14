from django.http import HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
from django.views.generic.base import View
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from yandex_checkout import Payment, Configuration

from Payment.forms import PaymentForm
from Payment.models import Ticket, PaymentModel


class PaymentView(View):
    def get(self, request):
        product_id = 1
        ticket = Ticket.objects.get(id=product_id)
        return render(request, 'Payment/payment.html', locals())


class AddPayment(View):
    def post(self, request, pk):
        form = PaymentForm(request.POST)
        order = PaymentModel


class SuccessView(View):
    def get(self, request):
        return render(request, 'Payment/success.html')


class YandexPayment(View):
    def get(self, request):
        Configuration.account_id = '718911'
        Configuration.secret_key = 'test_LvcNnzMH8UOAI0Rc6Dw7MvP8O6WAZoQwsF0kW7e5tY4'

        value = 3000
        currency = "RUB"

        return_url = "https://chestnokfest.live/tickets/success/"

        description = "some description"

        payment = Payment.create({
            "amount": {
                "value": value,
                "currency": currency
            },
            "confirmation": {
                "type": "redirect",
                "return_url": return_url
            },
            "description": description
        })

        return HttpResponseRedirect(payment.confirmation.confirmation_url)


class YandexNotifications(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        payment_id = request.data['object']['id']

        Payment.capture(payment_id)

        # otpravka email s klyu4om

        return Response(status=200)
