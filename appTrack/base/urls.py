from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('message', views.apps_view, name="message"),
]