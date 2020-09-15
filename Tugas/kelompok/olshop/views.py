from django.shortcuts import render, redirect
from . import forms
from . import models

def halamandepan(req):
    return render(req, 'hal1/index1.html')

def penjualan(req):
    return render(req, 'uangmasuk/index2.html')

def penjualan_tunai(req):
    penjualan1 = models.penjualan1m.objects.all()
    return render(req, 'penjualan/index3.html', {
        'data': penjualan1,
    })

def penjualan_kredit(req):
    return render(req, 'penjualan/index4.html')

def penjualan_lain2(req):
    return render(req, 'penjualan/index5.html')

#crud
def penjualan1v(req):
    form_input = forms.penjualan1f()
    if req.POST:
        form_input = forms.penjualan1f(req.POST)
        if form_input.is_valid():
            form_input.save()
        return redirect('/penjualan_tunai')
    return render(req, 'crud/penjualan1.html', {
        'form': form_input,
    })
    