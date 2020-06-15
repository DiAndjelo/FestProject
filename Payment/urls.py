from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from Payment import views

urlpatterns = [
    path('', views.PaymentView.as_view(), name='tickets'),
    path('success/', views.SuccessView.as_view(), name='success_view'),
    path('adding_payment/', views.AddPayment.as_view(), name='add_payment')
]