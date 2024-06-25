from rest_framework import serializers
from .models import Survivor, InfectionReport
from django.forms import ValidationError

class SurvivorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Survivor
        fields = (
            'id',
            'name',
            'age',
            'gender',
            'latitude',
            'longitude',
            'water',
            'food',
            'medication',
            'ammunition',
            )

class InfectionReportSerializer(serializers.ModelSerializer):
    def validate(self, data):
        if data['reported'] == data['reporter']:
            raise ValidationError("The reporter cannot be the same as the reported")
        elif  InfectionReport.objects.filter(reported=data['reported'], reporter=data['reporter']).exists():
            raise ValidationError("The reporter has already reported the surviver")
        return data

    class Meta:
        model = InfectionReport
        fields = (
            'id',
            'reported',
            'reporter',
        )

