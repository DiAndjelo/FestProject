from django.shortcuts import render

# Create your views here.
from django.views.generic.base import View


class LandingView(View):
    def get(self, request):
        return render(request, 'Payment/payment.html')
