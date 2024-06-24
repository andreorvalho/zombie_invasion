from django.contrib import admin
from .models import Survivor, InfectionReport

class SurvivorAdmin(admin.ModelAdmin):
    list_display = ('name', 'age', 'gender', 'latitude', 'longitude', 'water', 'food', 'medication', 'ammunition')

class InfectionReportAdmin(admin.ModelAdmin):
    list_display = ('reported', 'reporter')

admin.site.register(Survivor, SurvivorAdmin)
admin.site.register(InfectionReport, InfectionReportAdmin)
