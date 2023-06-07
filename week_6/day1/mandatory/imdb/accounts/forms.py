from django.contrib.auth.models import User
from django.contrib.auth.forms import UsernameField
from django import forms


class SignupForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", "password")


class LoginForm(forms.Form):

    username = UsernameField(widget=forms.TextInput(attrs={"autofocus": True}))
    password = forms.CharField(
        label="Password",
        strip=False,
        widget=forms.PasswordInput(attrs={"autocomplete": "current-password"}),
    )
