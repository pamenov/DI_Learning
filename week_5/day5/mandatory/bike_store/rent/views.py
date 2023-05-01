from itertools import chain

from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic

from .forms import CustomerForm, RentalForm, VehicleForm
from .models import Customer, Rental, Vehicle


class AllRentals(generic.ListView):
    template_name = "all_rentals.html"
    context_object_name = "rentals"
    model = Rental


    def get_queryset(self):
        not_finished = Rental.objects.filter(return_date__isnull=True)
        finished = Rental.objects.filter(return_date__isnull=False).order_by("return_date")
        return chain(not_finished, finished)


class RentalView(generic.DetailView):
    template_name = "rental_info.html"
    model = Rental
    context_object_name = 'rental'


class RentalAdd(generic.CreateView):
    template_name = "create_rental.html"
    model = Rental
    form_class = RentalForm
    success_url = reverse_lazy("all_rentals")


class AllCustomers(generic.ListView):
    template_name = "all_customers.html"
    context_object_name = "customers"
    model = Customer


class CustomerView(generic.DetailView):
    template_name = "customer_info.html"
    model = Customer
    context_object_name = 'customer'


class CustomerAdd(generic.CreateView):
    template_name = 'create_rental.html'
    model = Customer
    form_class = CustomerForm
    success_url = reverse_lazy("all_customers")


class AllVehicle(generic.ListView):
    template_name = "all_vehicles.html"
    context_object_name = "vehicles"
    model = Vehicle


class VehicleView(generic.DetailView):
    template_name = "vehicle_info.html"
    model = Vehicle
    context_object_name = 'vehicle'


class VehicleAdd(generic.CreateView):
    template_name = 'create_rental.html'
    model = Vehicle
    form_class = VehicleForm
    success_url = reverse_lazy("all_vehicle")
