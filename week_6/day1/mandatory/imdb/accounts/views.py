from django.shortcuts import render, redirect
from .forms import SignupForm, LoginForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User


def loginView(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        print(form.data)
        if form.is_valid():
            print("after")
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]
            print(username, password)
            user = User.objects.get(username=username)
            print(user)
            print(user.password)
            print(user.username == username)
            print(user.password == password)
            user = authenticate(username=username, password=password)
            print("user", user)
            if user is None:
                return redirect('login')
            else:
                login(request, user)
                return redirect('homepage')
        else:
            error_message = form.errors
            form = LoginForm()
            context = {
                "form": form,
                "error_message": error_message
            }
            print("not valid", form.errors)
            return render(request, template_name='login.html', context=context)
    return render(request, template_name='login.html', context={'form': LoginForm()})


def logoutView(request):
    logout(request)
    return redirect('login')

def signupView(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('homepage')
    return render(request, template_name='signup.html', context={'form': SignupForm()})

def profileView(request, id):
    pass