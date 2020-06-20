from django.core.mail import send_mail
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from django.template.loader import get_template
from django.views.generic.base import View
import csv
from Landing.forms import ParticipationForm, ReservationForm
from Payment.models import TicketPay


class LandingView(View):
    def get(self, request):
        return render(request, 'Landing/landing.html', {'range1': range(3)})


class ParticipationView(View):
    def post(self, request):
        form = ParticipationForm(request.POST)
        if form.is_valid():
            participation = form.save()
            email = form.cleaned_data['email']
            context = [str(participation.id), form.cleaned_data['name'], form.cleaned_data['consist'], form.cleaned_data['phone'],
                       form.cleaned_data['email'], form.cleaned_data['text']]
            context = ' '.join(context)
            render_context = {
                'id': str(participation.id),
                'name': form.cleaned_data['name'],
                'consist': form.cleaned_data['consist'],
                'phone': form.cleaned_data['phone'],
                'email': form.cleaned_data['email'],
                'text': form.cleaned_data['text']
            }
            send_mail('Хотите участвовать в фестивале ЧесТнок? Добро пожаловать!', context, 'info@chestnokfest.live', [email],
                      html_message=get_template('Payment/lettermainpage.html').render(render_context))

            participation.save()

        return redirect('landing')


class ReservationView(View):
    def post(self, request):
        form = ReservationForm(request.POST)
        if form.is_valid():
            reservation = form.save()
            send_mail('Бронирование', form.cleaned_data['phone'], 'info@chestnokfest.live', ['info@chestnokfest.live'])
            # html_message=get_template('Payment/letter.html').render())
            reservation.save()
        return redirect('accommodation')


class ExportView(View):
    def get(self, request):
        print(request.user.is_staff)
        if request.user.is_staff:
            response = HttpResponse(content_type='text/csv')

            writer = csv.writer(response)
            writer.writerow(['ID', 'Surname', 'Name', 'Email', 'Code', 'Is Payed?'])

            for ticket in TicketPay.objects.all().values_list('id', 'surname', 'name', 'email', 'generated_code',
                                                              'is_payed'):
                writer.writerow(ticket)

            response['Content-Disposition'] = 'attachment; filename="tickets.csv"'

            return response
        else:
            return redirect('landing')


class ContactView(View):
    def get(self, request):
        return render(request, 'Landing/contacts.html')


class MembersView(View):
    def get(self, request):
        return render(request, 'Landing/members.html')


class AccommodationView(View):
    def get(self, request):
        return render(request, 'Landing/accommodation.html')


class AddingTicket(View):
    def post(self, request):
        return_dict = dict()
        data = request.POST
        nmb = data.get("nmb")
        request.session["nmb"] = nmb
        request.session["checker"] = 'edited'
        return JsonResponse(return_dict)
