from django.db import models

# Create your models here.
# Módelo para usuario 
class Usuario(models.Model):
    id_usuario = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=60, null=False, default='')
    email = models.CharField(max_length=50, null=False, default='')
    password = models.CharField(max_length=18, null=False, default='')
    fecha_nac = models.DateField()


    def __str__(self):
        return self.id_usuario +' '+ self.email
    