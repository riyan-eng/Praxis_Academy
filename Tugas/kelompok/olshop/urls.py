"""kelompok URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.shortcuts import render
from . import views

urlpatterns = [
    path('', views.halamandepan),
    path('penjualan/', views.penjualan),
    path('penjualan_tunai/', views.penjualan_tunai),
    path('penjualan_kredit/', views.penjualan_kredit),
    path('penjualan_lain2/', views.penjualan_lain2),
    path('admin/', admin.site.urls),
    #crud
    path('penjualan1/', views.penjualan1v),
]
