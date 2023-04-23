from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render

from .models import Animal, Family


def ViewFamily(request, pk):
    family_members = Animal.objects.filter(family=pk)
    context = {
        "family": list(family_members)
    }
    # response = '\n'.join([animal["name"] for animal in family_members])
    template = 'family.html'
    return render(request, template, context)



def ViewAnimal(request, pk):
    animal = get_object_or_404(Animal, id=pk)
    context = {
        "animal": animal,
    }
    template = 'animal.html'
    return render(request, template, context)


def AllAnimals(request):
    animals = Animal.objects.all()
    template = 'all_animals.html'
    context = {
        "animals": animals,
    }
    return render(request, template, context)
