from django.db import models

# Create your models here.

# A survivor must have a name, age, gender and last location (latitude, longitude).
# change location to:
# https://stackoverflow.com/questions/30706799/which-model-field-to-use-in-django-to-store-longitude-and-latitude-values
# https://docs.djangoproject.com/en/5.0/ref/contrib/gis/db-api/
class Survivor(models.Model):
    name = models.CharField(max_length=120)
    age = models.IntegerField()
    gender = models.CharField(max_length=40)
    latitute = models.CharField(max_length=120)
    longitude = models.CharField(max_length=120)

    def _str_(self):
        return self.name