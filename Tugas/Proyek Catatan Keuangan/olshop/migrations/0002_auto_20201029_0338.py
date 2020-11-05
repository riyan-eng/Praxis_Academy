# Generated by Django 3.1.2 on 2020-10-29 03:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('olshop', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pem_kreditm',
            name='barang',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='olshop.barangm'),
        ),
        migrations.AlterField(
            model_name='penjualan1m',
            name='terima',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=10),
        ),
    ]