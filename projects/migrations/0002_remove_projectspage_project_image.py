# Generated by Django 2.1.7 on 2019-05-02 00:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projectspage',
            name='project_image',
        ),
    ]
