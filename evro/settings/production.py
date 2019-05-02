from .base import *
import os
import psycopg2
import dj_database_url
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY', 'SECRET_KEY')

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

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


try:
    from .local import *
except ImportError:
    pass
