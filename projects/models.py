from django.db import models
from modelcluster.fields import ParentalKey

from wagtail.core.models import Page
from django.db.models import TextField, URLField
from rest_framework import serializers
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel, MultiFieldPanel, InlinePanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.images.api.fields import ImageRenditionField

from wagtail.search import index
from wagtail.api import APIField


class ProjectsPage(Page):
    # db fields
    project_h_one = models.CharField(max_length=250, default="Project Name")
    project_h_two = models.CharField(
        max_length=250, default="Project Description")
    project_intro_p = models.TextField(blank=True)
    project_p = models.CharField(
        max_length=250, default="Project Launch Date")
    project_tech_stack_description = RichTextField(blank=True, features=["ul"])
    project_url = models.URLField(max_length=200, default="Project URL")
    project_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    # Search index configuration
    search_fields = Page.search_fields + [
        index.SearchField('project_h_one'),
        index.FilterField('project_h_two'),
        index.FilterField('project_intro_p'),
        index.FilterField('project_p'),
        index.FilterField('project_tech_stack_description'),
    ]

    # Editor panels configuration
    content_panels = Page.content_panels + [
        FieldPanel('project_h_one'),
        FieldPanel('project_h_two', classname="full"),
        FieldPanel('project_intro_p', classname="full"),
        FieldPanel('project_p', classname="full"),
        FieldPanel('project_tech_stack_description', classname="full"),
        FieldPanel('project_url', classname="full"),
        ImageChooserPanel('project_image'),
    ]
    promote_panels = [
        MultiFieldPanel(Page.promote_panels, "Common page configuration"),
    ]

    # API configuration
    api_fields = [
        APIField('project_h_one'),
        APIField('project_h_two'),
        APIField('project_intro_p'),
        APIField('project_p'),
        APIField('project_tech_stack_description'),
        APIField('project_url'),
        APIField('project_image'),
        APIField('project_image_url', serializer=ImageRenditionField(
            'fill-1500x1500', source='project_image')),

    ]
