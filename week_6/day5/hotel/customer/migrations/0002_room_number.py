# Generated by Django 4.2 on 2023-05-15 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='number',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
