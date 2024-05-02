from re import S
from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers

from .models import Application

def home(request):
    return render(request, 'home.html')

def apps_view(request):
    # retrieve user information
    submitted_applications = serializers.serialize("json", Application.objects.all())
    return JsonResponse({'applications': submitted_applications, 'message': 'hello world'})
