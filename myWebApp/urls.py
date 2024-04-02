from django.urls import path
from .views import *

urlpatterns = [
    path('', login, name='login'),
    path('login', login, name='login'),
    path('formulario-registro', formRegistro, name='formRegistro'),
    path('main', main, name='main'),
]
