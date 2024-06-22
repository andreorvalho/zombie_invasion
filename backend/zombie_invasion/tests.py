from django.test import TestCase
from .models import Survivor

class AnimalTestCase(TestCase):
    def setUp(self):
        Survivor.objects.create(name="Ana", age=24, gender='female', latitute='123123', longitude='65464564')
        Survivor.objects.create(name="Andre", age=24, gender='male', latitute='23434', longitude='98988')

    def test_animals_can_speak(self):
        """Animals that can speak are correctly identified"""
        ana = Survivor.objects.get(name='Ana')
        andre = Survivor.objects.get(name='Andre')
        self.assertEqual(ana._str_(), 'Ana')
        self.assertEqual(andre._str_(), 'Andre')
