from django import forms

from .models import Category, Country, Director, Film


class FilmForm(forms.ModelForm):

    class Meta:
        model = Film
        fields = '__all__'

    director = forms.ModelChoiceField(queryset=Director.objects.all())
    category = forms.ModelMultipleChoiceField(queryset=Category.objects.all())
    created_in_country = forms.ModelChoiceField(queryset=Country.objects.all())
    availiable_in_countries = forms.ModelMultipleChoiceField(queryset=Country.objects.all())


class DirectorForm(forms.ModelForm):

    class Meta:
        model = Director
        fields = '__all__'
