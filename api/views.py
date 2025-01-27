from django.shortcuts import render
from django.http import JsonResponse
from decouple import config
from rest_framework.views import APIView

PLUGIN_KEY = config("PLUGIN_KEY")

class ValidateKey(APIView):
    def post(self, request):
        access_key = request.data.get("access_key")

        if access_key == PLUGIN_KEY:
            return JsonResponse({"message": "Chave válida"}, status=200)
        else:
            return JsonResponse({"message": "Chave inválida"}, status=400)
