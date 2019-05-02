# Generated by Django 2.1.7 on 2019-05-02 00:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0001_squashed_0021'),
        ('projects', '0002_remove_projectspage_project_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectspage',
            name='project_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
    ]
