from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from django.views import generic

from .models import Category, Verb
from .utils import verb_forms
from .utils.voice import get_audio


def HomeView(request):
    template_name = 'homepage.html'
    return render(request, template_name)


def GetAudio(request, word):
    response = HttpResponse(get_audio(word), content_type="audio/wav")
    return response


def VerbView(request, id):
    verb = get_object_or_404(Verb, id=id)
    print(verb.hebrew)
    # category = verb.category
    category = "пааль"
    root = verb.root
    print(len(root))
    template_name = "verb.html"
    context = {
        "verb": {
            "infinitive": verb.hebrew,
            "present": verb_forms.get_present_forms(root=root, category=category),
            "past": verb_forms.get_past_forms(root=root, category=category),
        }
    }
    return render(request, template_name, context)
