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
from django.http import HttpResponse
from django.urls import path, include

from django.conf import settings
from Landing import views
from Landing.sitemaps import StaticSitemap
from Payment.views import YandexPayment, YandexNotifications
from django.contrib.sitemaps.views import sitemap

sitemaps = {
    'static': StaticSitemap
}


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.LandingView.as_view(), name='landing'),
    path('adding_participation/', views.ParticipationView.as_view(), name='adding_participation'),
    path('adding_reservation/', views.ReservationView.as_view(), name='adding_reservation'),
    path('adding_questions/', views.QuestionsView.as_view(), name='adding_questions'),
    path('contacts/', views.ContactView.as_view(), name='contacts'),
    path('members/', views.MembersView.as_view(), name='members'),
    path('accommodation/', views.AccommodationView.as_view(), name='accommodation'),
    path('tickets/', include('Payment.urls')),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    path('export/', views.ExportView.as_view(), name='export'),
    path('success_participation/', views.SuccessParticipation.as_view(), name='success_participation'),
    path('success_questions_reservations/', views.SuccessQuestionsReservation.as_view(),
         name='success_questions_reservations'),
    path('api/payment/<int:value>/<int:id>/', YandexPayment.as_view(), name='payment_view'),
    path('api/payment/notifications/', YandexNotifications.as_view(), name='payment_notification_view'),
    path('robots.txt/', lambda x: HttpResponse("User-agent: \n"
                                               "Disallow: /admin\n"
                                               "Disallow: /adding_participation\n"
                                               "Disallow: /adding_reservation\n"
                                               "Disallow: /adding_questions\n"
                                               "Disallow: /export\n"
                                               "Disallow: /update_ticket\n"
                                               "Disallow: /adding_payment\n"
                                               "Disallow: /api\n"
                                               "Sitemap: https://chestnokfest.live/sitemap.xml",
                                               content_type="text/plain"), name="robots_file"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = 'Landing.views.error_404_view'

