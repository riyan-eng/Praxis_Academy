from django.db import models

class Sayuran(models.Model):
    name = models.TextField()
    binomial = models.TextField(default='')
    kerajaan = models.TextField(default='')
    kelas = models.TextField(default='')
    ordo = models.TextField(default='')
    famili = models.TextField(default='')
    genus = models.TextField(default='')
    spesies = models.TextField(default='')