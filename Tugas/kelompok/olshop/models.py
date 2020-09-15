from django.db import models

class penjualan1m(models.Model):
    tanggal = models.DateField(auto_now_add=True)
    barang = models.CharField(max_length=200)
    kuantitas = models.IntegerField(default="")
    jumlah = models.DecimalField(max_digits=10, decimal_places=2)
    catatan = models.TextField(default="")