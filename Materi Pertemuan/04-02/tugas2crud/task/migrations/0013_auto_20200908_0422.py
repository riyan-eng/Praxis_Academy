# Generated by Django 3.1 on 2020-09-08 04:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0012_auto_20200908_0414'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='itemp_rice',
            new_name='item_price',
        ),
    ]