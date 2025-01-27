from django.urls import path
from .views import ValidateKey

urlpatterns = [
    path('validate-key/', ValidateKey.as_view(), name='validate-key'),
]
