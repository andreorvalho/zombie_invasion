from django.contrib import admin
from .models import Survivor

class SurvivorAdmin(admin.ModelAdmin):
    list_display = ('name', 'age', 'gender', 'latitude', 'longitude')

# Register your models here.

admin.site.register(Survivor, SurvivorAdmin)
