from django.shortcuts import render
from django.http import JsonResponse

def home(request):
    return render(request, 'home.html')

def apps_view(request):
    print("\n\nREACHED\n\n")
    return JsonResponse({'message': 'hello world'})
