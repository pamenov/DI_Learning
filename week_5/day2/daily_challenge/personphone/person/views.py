from django.shortcuts import get_object_or_404, render

from .models import Person


def viewPhonenumber(request, phone):
    person = get_object_or_404(Person, phone_number=phone)
    context = {
        "person": person
    }
    template = 'person.html'
    return render(request, template, context)



def viewName(request, name):
    person = get_object_or_404(Person, name=name)
    context = {
        "person": person
    }
    template = 'person.html'
    return render(request, template, context)
