from django import forms

from Landing.models import Participation, Reservation


class ParticipationForm(forms.ModelForm):

    class Meta:
        model = Participation
        fields = ('name', 'consist', 'phone', 'email', 'text')


class ReservationForm(forms.ModelForm):

    class Meta:
        model = Reservation
        fields = ('phone',)