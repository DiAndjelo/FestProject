from django.contrib import admin

# Register your models here.
from Landing.models import Participation, Reservation, Members


class ParticipationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'email', 'is_confirmed')

    class Meta:
        model = Participation


admin.site.register(Participation, ParticipationAdmin)


class MembersAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'role')

    class Meta:
        model = Members


admin.site.register(Members, MembersAdmin)


class ReservationAdmin(admin.ModelAdmin):
    list_display = ('id', 'phone')

    class Meta:
        model = Reservation


admin.site.register(Reservation, ReservationAdmin)