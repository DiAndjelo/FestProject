from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect

# Create your views here.
from django.views.generic.base import View

from Landing.forms import ParticipationForm


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