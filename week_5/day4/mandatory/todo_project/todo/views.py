from datetime import datetime

from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render

from .forms import CategoryForm, DoneForm, ToDoForm
from .models import Category, ToDo


def ToDoView(request):
    template = "add_todo.html"
    if request.method == "GET":
        form = ToDoForm()
        return render(request, template, {"form": form})
    form = ToDoForm(request.POST)
    # print(form.cleaned_data)
    if form.is_valid():
        form.save()
        return HttpResponse("ToDo added!")
    form = ToDoForm()
    return render(request, template, {"form": form})


def AllTasksView(request):
    if request.method == "POST":
        done_form = DoneForm(request.POST)
        if done_form.is_valid():
            task = done_form.cleaned_data["task"]
            task.has_been_done = True
            task.date_completion = datetime.today().strftime('%Y-%m-%d')
            task.save()            
    template = "mainpage.html"
    task_list = list(ToDo.objects.all())
    done_forms = [DoneForm(initial={"task":task, "done":True}) for task in task_list]
    context_list = list(zip(task_list, done_forms))
    return render(request, template, {"task_list": context_list})
