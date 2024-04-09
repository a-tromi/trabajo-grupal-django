# Generated by Django 5.0.4 on 2024-04-09 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id_usuario', models.IntegerField(primary_key=True, serialize=False)),
                ('username', models.CharField(default='', max_length=60)),
                ('email', models.CharField(default='', max_length=50)),
                ('password', models.CharField(default='', max_length=18)),
                ('fecha_nac', models.DateField()),
            ],
        ),
    ]