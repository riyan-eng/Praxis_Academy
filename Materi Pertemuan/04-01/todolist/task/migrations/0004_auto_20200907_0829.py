# Generated by Django 3.1 on 2020-09-07 08:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_auto_20200907_0355'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.TextField(default=''),
        ),
    ]
