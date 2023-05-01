from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render

from .forms import CategoryForm, GifForm
from .models import Category, Gif


def HomePageView(request):
    query = Gif.objects.all()
    context = {
        "gifs": query,
    }
    template = "homepage.html"
    return render(request, template, context)
    


def AddGifView(request):
    template = "add_gif.html"
    if request.method == "GET":
        add_form = GifForm()
        context = {"form": add_form}
        return render(request, template, context)
    form = GifForm(request.POST)
    if form.is_valid():
        new_gif = form.save()
        category_list = form.cleaned_data["category"]
        category_objects = [Category.objects.get(name=cat) for cat in category_list]
        for cat_obj in category_objects:
            new_gif.categories.add(cat_obj)
        return HttpResponse("Thank you!")
    form = GifForm()
    return render(request, template, {"form": form})



def AddCategoryView(request):
    template = "add_category.html"
    if request.method == "GET":
        add_form = CategoryForm()
        context = {"form": add_form}
        return render(request, template, context)
    form = CategoryForm(request.POST)
    if form.is_valid():
        new_category = form.save()
        return HttpResponse("Thank you!")
    form = CategoryForm()
    return render(request, template, {"form": form})

def CategoryView(request, slug):
    category = get_object_or_404(Category, name=slug)
    gifs = category.gifs.all()
    return render(request, "homepage.html", {"gifs": gifs})
