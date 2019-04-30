from .base import *
import os
import psycopg2
import dj_database_url
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY', 'SECRET_KEY')

DB_DEV_NAME = os.environ.get('DB_DEV_NAME')
DB_DEV_USER = os.environ.get('DB_DEV_USER')
DB_DEV_PASS = os.environ.get('DB_DEV_PASS')


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'HOST': 'localhost',
        'POST': '5432',
        'NAME': os.environ.get('DB_NAME', DB_DEV_NAME),
        'USER': os.environ.get('DB_USER', DB_DEV_USER),
        'PASSWORD': os.environ.get('DB_PASS', DB_DEV_PASS),
    }
}

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = [
    "localhost",
    "0.0.0.0",
    "127.0.0.1",
    "evro.herokuapp.com",
    "www.evro.io",
    "evro.io",
]
MEDIA_URL = 'https://evro.herokuapp.com/media/'
# TEMPLATES
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#templates
TEMPLATES[0]['OPTIONS']['debug'] = DEBUG  # noqa F405

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
