from django import forms

from .models import Category, Gif


class GifForm(forms.ModelForm):
    class Meta:
        model = Gif
        fields = ("title", "url", "uploader_name")

    category = forms.ModelMultipleChoiceField(queryset=Category.objects.all())


class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ("name",)
