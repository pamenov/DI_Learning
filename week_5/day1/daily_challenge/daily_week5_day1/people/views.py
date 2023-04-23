from django.http import HttpResponse
from django.shortcuts import render

from . import database


def People(request):
    people = database.people
    people_age = [(item['name'], item['age']) for item in people]
    people_age.sort(key=lambda x: x[1])
    template = "people.html"
    context = {
        "people" : people_age,
    }
    return render(request, template, context)

def Person(request, person_id):
    people = database.people
    found = False
    for person in people:
        if person["id"] == person_id:
            context = {
                "person": person
            }
            found = True
    if not found:
        return HttpResponse("<h2> Incorrect id </h2>")
    template = "person.html"
    return render(request, template, context)
