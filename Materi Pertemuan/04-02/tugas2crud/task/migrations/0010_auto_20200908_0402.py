# Generated by Django 3.1 on 2020-09-08 04:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0009_auto_20200908_0402'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='item_name',
            field=models.CharField(max_length=100),
        ),
    ]