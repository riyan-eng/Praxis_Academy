from django.shortcuts import render, redirect
from.import models

def index(req):
    if req.POST:
        models.Sayuran.objects.create(name=req.POST['name'],binomial=req.POST['binomial'],famili=req.POST['famili'],genus=req.POST['genus'],kelas=req.POST['kelas'],kerajaan=req.POST['kerajaan'],ordo=req.POST['ordo'],spesies=req.POST['spesies'])

    sayurans = models.Sayuran.objects.all()
    return render(req, 'sayuran/index.html', {
        'data': sayurans,
    })

def detail(req, id):
    sayurans = models.Sayuran.objects.filter(pk=id).first()
    return render(req, 'sayuran/detail.html', {
        'data': sayurans,
    })

def delete(req, id):
    sayurans = models.Sayuran.objects.filter(pk=id).()delete
    return redirect('/')

def edit(req, id):pp
    if req.POST:
        sayurans = models.Sayuran.objects.filter(pk=id).update(name=req.POST['name'],binomial=req.POST['binomial'],famili=req.POST['famili'],genus=req.POST['genus'],kelas=req.POST['kelas'],kerajaan=req.POST['kerajaan'],ordo=req.POST['ordo'],spesies=req.POST['spesies'])
        return redirect('/')  

    sayurans = models.Sayuran.objects.filter(pk=id).first()
    return render(req, 'sayuran/edit.html', {
        'data': sayurans,
    })
