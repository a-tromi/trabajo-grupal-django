from django.urls import path
from .views import *

urlpatterns = [
    path('', login, name='login'),
    path('login', login, name='login'),
    path('main', main, name='main'),
]
