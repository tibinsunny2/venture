# Generated by Django 5.0.1 on 2024-07-21 11:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('salespackage', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trip',
            name='about',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='activity',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='attraction',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='destinations',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='hotel',
        ),
    ]
