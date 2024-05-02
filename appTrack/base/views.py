from re import S
from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers

from .models import Application

def home(request):
    return render(request, 'index.html')

def apps_view(request):
    # retrieve user information
    # we only want to re-render if we notice more applications 
    submitted_applications = serializers.serialize("json", Application.objects.all())
    return JsonResponse({'applications': submitted_applications, 'message': 'hello world'})
