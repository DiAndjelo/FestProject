from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from Payment import views
# <str:name_error>/<str:surname_error>/<str:phone_error>/<str:email_error>
urlpatterns = [
    path('', views.PaymentView.as_view(),
         name='tickets'),
    path('success/', views.SuccessView.as_view(), name='success_view'),
    path('adding_payment/', views.AddPayment.as_view(), name='add_payment'),
    path('update_ticket/', views.AddingTicket.as_view(), name='update_ticket'),
]
