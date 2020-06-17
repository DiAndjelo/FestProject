from django.contrib import admin

# Register your models here.
from Landing.models import Participation


class ParticipationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'email', 'is_confirmed')

    class Meta:
        model = Participation


admin.site.register(Participation, ParticipationAdmin)