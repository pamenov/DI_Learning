# Generated by Django 4.2.1 on 2023-05-07 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weatherapp', '0002_report_weather_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='weather_type',
            field=models.CharField(choices=[('sunny1', 'Sunny1'), ('sunny2', 'Sunny2'), ('sunny3', 'Sunny3')], max_length=10),
        ),
    ]
