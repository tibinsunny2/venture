# Generated by Django 4.1.13 on 2024-01-29 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_operations', '0004_review'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='email',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
