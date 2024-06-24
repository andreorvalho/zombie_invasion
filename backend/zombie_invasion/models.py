from django.db import models
from django.forms import ValidationError

# Create your models here.

# A survivor must have a name, age, gender and last location (latitude, longitude).
# change location to:
# https://stackoverflow.com/questions/30706799/which-model-field-to-use-in-django-to-store-longitude-and-latitude-values
# https://docs.djangoproject.com/en/5.0/ref/contrib/gis/db-api/
class Survivor(models.Model):
    name = models.CharField(max_length=120)
    age = models.IntegerField()
    gender = models.CharField(max_length=40)
    latitude = models.CharField(max_length=120)
    longitude = models.CharField(max_length=120)
    # simplest solution:
    # correct modeling would be 1 to many with inventory
    # inventory would be: id, name, category, quantity
    # this would offer more flexibility to the future
    water = models.IntegerField(default=0)
    food = models.IntegerField(default=0)
    medication = models.IntegerField(default=0)
    ammunition = models.IntegerField(default=0)

    def _str_(self):
        return self.name

class InfectionReport(models.Model):
    reported = models.ForeignKey(Survivor, on_delete=models.CASCADE, related_name='reported')
    reporter = models.ForeignKey(Survivor, on_delete=models.CASCADE, related_name='reporter')

    def __str__(self):
        return self.reported.name + self.reporter.name

    def _validate_reported_reporter(self):
        if self.reported.id == self.reporter.id:
            raise ValidationError("The reporter cannot be the same as the reported")
        elif  InfectionReport.objects.filter(reported=self.reported, reporter=self.reporter).exists():
            raise ValidationError("The reporter already has reported the surviver")

    def save(self, *args, **kwargs):
        self._validate_reported_reporter()
        return super().save(*args, **kwargs)
