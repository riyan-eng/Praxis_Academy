from django.forms import ModelForm

from . import models

class customerform(ModelForm):
    class Meta:
        model = models.customer
        exclude = []

class supplierform(ModelForm):
    class Meta:
        model = models.supplier
        exclude = []

class itemform(ModelForm):
    class Meta:
        model = models.item
        exclude = []