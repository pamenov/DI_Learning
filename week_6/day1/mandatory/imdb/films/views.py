from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic

from .forms import DirectorForm, FilmForm
from .models import Category, Country, Director, Film


class HomePage(generic.ListView):
    template_name = "homepage.html"
    context_object_name = "films"
    model = Film


class addDirector(generic.CreateView):
    template_name = 'director/add_director.html'
    model = Director
    form_class = DirectorForm
    success_url = reverse_lazy('homepage')


class addFilm(generic.CreateView):
    template_name = 'director/add_director.html'
    model = Film
    form_class = FilmForm
    success_url = reverse_lazy('homepage')
