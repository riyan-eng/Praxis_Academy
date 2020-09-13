from django.db import models

class Task(models.Model):
    name = models.TextField()

class customer(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_contact = models.CharField(max_length=100)
    customer_address = models.TextField(default='')

class supplier(models.Model):
    supplier_name = models.CharField(max_length=100)
    supplier_contact = models.CharField(max_length=100)
    supplier_address = models.TextField(default='')

    def __str__(self):
        return self.supplier_name


class item(models.Model):
    item_name = models.CharField(max_length=100)
    item_price = models.DecimalField(max_digits=20, decimal_places=2)
    item_selling_price = models.DecimalField(max_digits=20, decimal_places=2)
    item_supplier = models.ForeignKey(supplier, on_delete = models.DO_NOTHING)