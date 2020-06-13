"""FestProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from Landing import views
from Payment.views import YandexPayment, YandexNotifications

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.LandingView.as_view(), name='landing'),
    path('contacts/', views.ContactView.as_view(), name='contacts'),
    path('members/', views.MembersView.as_view(), name='members'),
    path('accommodation/', views.AccommodationView.as_view(), name='accommodation'),
    path('tickets/', include('Payment.urls')),
    path('api/payment/', YandexPayment.as_view(), name='payment_view'),
    path('api/payment/notifications/', YandexNotifications.as_view(), name='payment_notification_view'),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
