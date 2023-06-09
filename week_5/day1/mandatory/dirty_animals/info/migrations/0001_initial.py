# Generated by Django 3.0.5 on 2023-04-23 11:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Family',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('legs', models.IntegerField()),
                ('weight', models.FloatField()),
                ('height', models.FloatField()),
                ('speed', models.FloatField()),
                ('family', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='info.Family')),
            ],
        ),
    ]
