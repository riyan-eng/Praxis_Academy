# Generated by Django 3.1 on 2020-08-28 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sayuran', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sayuran',
            name='binomial',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='sayuran',
            name='famili',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='sayuran',
            name='genus',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='sayuran',
            name='kelas',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='sayuran',
            name='kerajaan',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='sayuran',
            name='ordo',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='sayuran',
            name='spesies',
            field=models.TextField(default=''),
        ),
    ]
