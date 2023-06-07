from django.shortcuts import render


def mainPageView(request):
    template = 'main.html'
    return render(request, template)
