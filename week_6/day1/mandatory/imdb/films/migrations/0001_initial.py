# Generated by Django 4.2 on 2023-05-01 12:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Director',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=20)),
                ('last_name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Film',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('release_date', models.DateField(auto_now_add=True)),
                ('availiable_in_countries', models.ManyToManyField(blank=True, related_name='avaliable_films', to='films.country')),
                ('category', models.ManyToManyField(related_name='films', to='films.category')),
                ('created_in_country', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='created_films', to='films.country')),
                ('director', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='films', to='films.director')),
            ],
        ),
    ]
