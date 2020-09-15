from django.forms import ModelForm

from . import models

class penjualan1f(ModelForm):
    class Meta:
        model = models.penjualan1m
        exclude = []