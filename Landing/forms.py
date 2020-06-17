from django import forms

from .models import Participation


class ParticipationForm(forms.ModelForm):

    class Meta:
        model = Participation
        fields = ('name', 'consist', 'phone', 'email', 'text')

