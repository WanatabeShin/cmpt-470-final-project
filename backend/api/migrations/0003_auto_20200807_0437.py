# Generated by Django 3.0.9 on 2020-08-07 04:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200807_0436'),
    ]

    operations = [
        migrations.RenameField(
            model_name='wishlist',
            old_name='product_id',
            new_name='product_id_list',
        ),
    ]
