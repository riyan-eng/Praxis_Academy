from django.shortcuts import render, redirect

from . import models
from . import forms

def index(req):
    return render(req, 'hal1/index.html')

def buying(req):
    return render(req, 'hal2/buying.html')

def selling(req):
    return render(req, 'hal2/selling.html')

def customer(req):

    form_input = forms.customerform()

    if req.POST:
        models.customer.objects.create(customer_name=req.POST['customer_name'], customer_address=req.POST['customer_address'], customer_contact=req.POST['customer_contact']),


        if form_input.is_valid():
            form_input.save()

    customers = models.customer.objects.all()
    return render(req, 'hal3customer/customer.html', {
        'data': customers,
        'form': form_input,
    })

def customerdetail(req, id):
    customers = models.customer.objects.filter(pk=id).first()
    return render(req, 'hal3customer/customerdetail.html', {
        'data': customers,
    })

def customeredit(req, id):
    if req.POST:
        models.customer.objects.filter(pk=id).update(customer_name=req.POST['customer_name'], customer_address=req.POST['customer_address'], customer_contact=req.POST['customer_contact'])
        return redirect('/customer')  

    customers = models.customer.objects.filter(pk=id).first()
    return render(req, 'hal3customer/customeredit.html', {
        'data': customers,
    })

def customerdelete(req, id):
    customer = models.customer.objects.filter(pk=id).delete()
    return redirect('/customer')

def supplier(req):

    form_input = forms.supplierform()

    if req.POST:
        models.supplier.objects.create(supplier_name=req.POST['supplier_name'], supplier_address=req.POST['supplier_address'], supplier_contact=req.POST['supplier_contact'])

        if form_input.is_valid():
            form_input.save()

    suppliers = models.supplier.objects.all()
    return render(req, 'hal3supplier/supplier.html', {
        'data': suppliers,
        'form': form_input,
    })

def supplierdetail(req, id):
    suppliers = models.supplier.objects.filter(pk=id).first()
    return render(req, 'hal3supplier/supplierdetail.html', {
        'data': suppliers,
    })

def supplieredit(req, id):
    if req.POST:
        models.supplier.objects.filter(pk=id).update(supplier_name=req.POST['supplier_name'], supplier_address=req.POST['supplier_address'], supplier_contact=req.POST['supplier_contact'])
        return redirect('/supplier')  

    suppliers = models.supplier.objects.filter(pk=id).first()
    return render(req, 'hal3supplier/supplieredit.html', {
        'data': suppliers,
    })

def supplierdelete(req, id):
    supplier = models.supplier.objects.filter(pk=id).delete()
    return redirect('/supplier')

def item(req):

    form_input = forms.itemform()

    if req.POST:
        # models.item.objects.create(item_name=req.POST['item_name'], item_price=req.POST['item_price'], item_selling_price=req.POST['item_selling_price'], item_supplier=req.POST['item_supplier']),
        form_input = forms.itemform(req.POST)
        if form_input.is_valid():
            form_input.save()
            return redirect('/item')

    items = models.item.objects.all()
    return render(req, 'hal3item/item.html', {
        'data': items,
        'form': form_input,
    })    

def itemdetail(req, id):
    items = models.item.objects.filter(pk=id).first()
    return render(req, 'hal3item/itemdetail.html', {
        'data': items,
    })

def itemedit(req, id):
    if req.POST:
        models.item.objects.filter(pk=id).update(item_name=req.POST['item_name'], item_price=req.POST['item_price'], item_selling_price=req.POST['item_selling_price'], item_supplier=req.POST['item_supplier'])
        return redirect('/item')  

    items = models.item.objects.filter(pk=id).first()
    return render(req, 'hal3item/itemedit.html', {
        'data': items,
    })     

def itemdelete(req, id):
    items = models.item.objects.filter(pk=id).delete()
    return redirect('/item')

 