# Generated by Django 5.0.1 on 2024-07-21 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('salespackage', '0002_remove_trip_about_remove_trip_activity_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='amount',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='trip',
            name='rating',
            field=models.IntegerField(),
        ),
    ]
