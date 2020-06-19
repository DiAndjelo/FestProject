from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from django.views.generic.base import View
import csv
from Landing.forms import ParticipationForm
from Payment.models import TicketPay


class LandingView(View):
    def get(self, request):
        return render(request, 'Landing/landing.html', {'range1': range(3)})


class ParticipationView(View):
    def post(self, request):
        form = ParticipationForm(request.POST)
        if form.is_valid():
            participation = form.save()
            participation.save()
        return redirect('landing')


class ExportView(View):
    def get(self, request):
        print(request.user.is_staff)
        if request.user.is_staff:
            response = HttpResponse(content_type='text/csv')

            writer = csv.writer(response)
            writer.writerow(['ID', 'Surname', 'Name', 'Email', 'Code', 'Is Payed?'])

            for ticket in TicketPay.objects.all().values_list('id', 'surname', 'name', 'email', 'generated_code', 'is_payed'):
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