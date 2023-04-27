from django import forms

from .models import Category, ToDo


class CategoryForm(forms.ModelForm):

    class Meta:
        model = Category
        fields = ("name", "image",)


class ToDoForm(forms.ModelForm):

    class Meta:
        model = ToDo
        fields = ("title", "details", "deadline", "category")

    category = forms.ModelChoiceField(Category.objects.all())


class DoneForm(forms.Form):
    task = forms.ModelChoiceField(queryset=ToDo.objects.all(), widget=forms.HiddenInput())
    done = forms.BooleanField(required=False, widget=forms.HiddenInput())
