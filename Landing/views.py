from django.shortcuts import render

# Create your views here.
from django.views.generic.base import View


class LandingView(View):
    def get(self, request):
        return render(request, 'Landing/landing.html', {'range1': range(3)})


class ContactView(View):
    def get(self, request):
        return render(request, 'Landing/contacts.html')
