# Generated by Django 3.1 on 2020-10-06 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('olshop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='penjualan1m',
            name='kas_masuk',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=10),
        ),
    ]
