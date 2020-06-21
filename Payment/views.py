from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect
from django.core.mail import send_mail
# Create your views here.
from django.views.generic.base import View
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from yandex_checkout import Payment, Configuration
from django.template.loader import get_template
from Payment.models import Ticket, PaymentModel, TicketPay
import string

class PaymentView(View):
    def get(self, request):
        product_id = 1
        ticket = Ticket.objects.get(id=product_id)
        nmb = 1
        return render(request, 'Payment/payment.html', locals())


class AddingTicket(View):
    def post(self, request):
        return_dict = dict()
        data = request.POST
        nmb = data.get("nmb")
        request.session["nmb"] = nmb
        request.session["checker"] = 'edited'
        return JsonResponse(return_dict)


class AddPayment(View):
    def post(self, request):
        data = request.POST
        email = data.get("email")
        pk = 1
        ticket = Ticket.objects.get(id=pk)

        print(data)
        try:
            if request.session["checker"] == 'edited':
                nmb = request.session["nmb"]
                request.session.flush()
            else:
                nmb = 1
        except:
            nmb = 1
        letters = []
        for i in string.ascii_letters:
            letters.append(i)
        order = PaymentModel(email=email, ticket=ticket)
        order.save(int(nmb), True)
        a = ord('а')
        for i in range(int(nmb)):
            name = data.getlist("name")[i]
            surname = data.getlist("surname")[i]
            phone = data.getlist("phone")[i]
            count_of_errors = 0
            if name == None or name == '':
                count_of_errors += 1
            for i in string.ascii_letters:
                if i in name:
                    count_of_errors += 1
            if surname == None or surname == '':
                count_of_errors += 1
            for i in string.ascii_letters:
                if i in surname:
                    count_of_errors += 1
            if phone == None or phone == '':
                count_of_errors += 1
            for i in string.ascii_letters:
                if i in phone:
                    count_of_errors += 1
            if email == None or email == '':
                count_of_errors += 1
            for i in ''.join([chr(i) for i in range(a,a+6)] + [chr(a+33)] + [chr(i) for i in range(a+6,a+32)]):
                if i in email:
                    count_of_errors += 1
            if count_of_errors > 0:
                return redirect('tickets')
            ticket_pay = TicketPay.objects.create(order=order, name=name, surname=surname, phone=phone, email=email)
        print(order.id)
        print('----------')
        return redirect('payment_view', int(order.total_price), order.id)


class SuccessView(View):
    def get(self, request):
        return render(request, 'success_redirects/payment_redirect.html')


class YandexPayment(View):
    def get(self, request, value=3000, id=None):
        Configuration.account_id = '718911'
        Configuration.secret_key = 'test_LvcNnzMH8UOAI0Rc6Dw7MvP8O6WAZoQwsF0kW7e5tY4'

        print(id)
        nmb = int(value/3000)

        currency = "RUB"

        return_url = "https://chestnokfest.live/tickets/payment_redirect/"

        description = str("Покупка " + str(nmb) + " билета(ов) за " + str(value))

        payment = Payment.create({
            "amount": {
                "value": value,
                "currency": currency
            },
            "confirmation": {
                "type": "redirect",
                "return_url": return_url
            },
            "description": description,
            "metadata": {'id': id,}
        })

        return HttpResponseRedirect(payment.confirmation.confirmation_url)


class YandexNotifications(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        Configuration.account_id = '718911'
        Configuration.secret_key = 'test_LvcNnzMH8UOAI0Rc6Dw7MvP8O6WAZoQwsF0kW7e5tY4'

        payment_id = request.data['object']['id']

        Payment.capture(payment_id)
        order_id = request.data['object']['metadata']['id']
        order = PaymentModel.objects.get(id=order_id)
        tickets = TicketPay.objects.all()
        send_email = False
        gen_codes = []

        render_tickets = []
        for ticket in tickets:
            if ticket.order == order:
                if not ticket.is_saved:
                    print(ticket.is_payed)
                    ticket.is_payed = True
                    ticket.is_saved = True
                    ticket.save()
                    send_email = True
                    email = ticket.email
                    gen_codes.append(ticket.generated_code)
                    render_tickets.append(ticket)
                    print(ticket.is_payed)
        if send_email:
            gen_codes = ' '.join(gen_codes)
            print(gen_codes)
            print(email)

            context = {
                'tickets': render_tickets,
            }
            # print(context['tickets'][0])
            send_mail('Ваш заказ с билетом(ами)', gen_codes, 'info@chestnokfest.live', [email], html_message=get_template('Payment/letter.html').render(context))
            # send_mail('Ваш заказ с билетом(ами)', gen_codes, 'info@chestnokfest.live', [email])




        # нужно забрать айдишники, за которые заплачено и привязать тут полю is_payed значение True
        # после отправить на мыло ключ с инфой
        # otpravka email s klyu4om

        return Response(status=200)
