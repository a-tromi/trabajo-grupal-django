from django.shortcuts import render

def login(request):
    return render(request, 'myWebApp/login.html')


def formRegistro(request):
    return render(request, 'myWebApp/formulario-registro.html')


def main(request):
    return render(request, 'myWebApp/main.html')

