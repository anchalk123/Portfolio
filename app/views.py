from django.http import HttpResponse
from django.shortcuts import render

from .models import Portfolio


def favicon(request):
    return HttpResponse(status=204)


def portfolio(request):
    if request.method == "POST":
        yname = request.POST.get('yourname')
        yem = request.POST.get('youremail')
        msg = request.POST.get('message')

        Portfolio.objects.create(name=yname, email=yem, message=msg)

    return render(request, 'portfolio.html')
