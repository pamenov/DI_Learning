from django.urls import path

from . import views

urlpatterns = [
    path("rental/", views.AllRentals.as_view(), name="all_rentals"),
    path("rental/<int:pk>", views.RentalView.as_view(), name="rental_info"),
    path("rental/add", views.RentalAdd.as_view(), name="add_rental"),
    path("customer/<int:pk>", views.CustomerView.as_view(), name="customer_info"),
    path("customer/", views.AllCustomers.as_view(), name="all_customers"),
    path("customer/add/", views.CustomerAdd.as_view(), name="add_customer"),
    path("vehicle/", views.AllVehicle.as_view(), name="all_vehicle"),
    path("vehicle/<int:pk>", views.VehicleView.as_view(), name="vehicle_info"),
    path("vehicle/add/", views.VehicleAdd.as_view(), name="add_vehicle"),
]
