from .base import *
import os
import psycopg2
import dj_database_url
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY', 'SECRET_KEY')

DB_PROD_NAME = os.environ.get('DB_PROD_NAME')
DB_PROD_USER = os.environ.get('DB_PROD_USER')
DB_PROD_PASS = os.environ.get('DB_PROD_PASS')


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases


DATABASES = {'default': dj_database_url.config(
    default=os.environ.get('DB_PROD_URL', 'DB_PROD_URL'))}

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = [
    "localhost",
    "0.0.0.0",
    "127.0.0.1",
    "evro.herokuapp.com",
    "evro-io-production.herokuapp.com",
    "www.evro.io",
    "evro.io",
]
MEDIA_URL = 'evro-io-production.herokuapp.com/media/'
# TEMPLATES
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#templates
TEMPLATES[0]['OPTIONS']['debug'] = DEBUG  # noqa F405

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


try:
    from .local import *
except ImportError:
    pass
