# Generated by Django 3.1 on 2020-09-21 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('olshop', '0021_auto_20200921_0655'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='penjualan1m',
            name='catatan',
        ),
        migrations.AlterField(
            model_name='penjualan3m',
            name='piutang',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=10),
        ),
        migrations.AlterField(
            model_name='penjualan3m',
            name='terima',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=10),
        ),
    ]