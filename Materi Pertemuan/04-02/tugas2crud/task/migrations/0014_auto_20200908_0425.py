# Generated by Django 3.1 on 2020-09-08 04:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0013_auto_20200908_0422'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='item_sale_price',
            new_name='item_saling_price',
        ),
    ]