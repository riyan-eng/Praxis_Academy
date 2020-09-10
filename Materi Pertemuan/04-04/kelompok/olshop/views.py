from django.shortcuts import render

def halamandepan(req):
    return render(req, 'hal1/index.html')