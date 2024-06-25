from django.shortcuts import render

from rest_framework import viewsets
from .serializers import SurvivorSerializer, InfectionReportSerializer
from .models import Survivor, InfectionReport

class SurvivorView(viewsets.ModelViewSet):
    serializer_class = SurvivorSerializer
    queryset = Survivor.objects.all()

class InfectionReportView(viewsets.ModelViewSet):
    serializer_class = InfectionReportSerializer
    queryset = InfectionReport.objects.all()
