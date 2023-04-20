from django.http import HttpResponse
from django.shortcuts import render

from . import database


def ViewFamily(request, pk):
    family_members = filter(lambda animal: animal["family"] == pk, database.data["animals"])
    context = {
        "family": list(family_members)
    }
    # response = '\n'.join([animal["name"] for animal in family_members])
    template = 'family.html'
    return render(request, template, context)



def ViewAnimal(request, pk):
    for animal in database.data["animals"]:
        if animal["id"] == pk:
            context = animal
            break
    template = 'animal.html'
    return render(request, template, context) 
