from django.contrib import admin

from .models import (Customer, Rental, RentalRate, Vehicle, VehicleSize,
                     VehicleType)

admin.site.register(Customer)
admin.site.register(Rental)
admin.site.register(RentalRate)
admin.site.register(VehicleType)
admin.site.register(Vehicle)
admin.site.register(VehicleSize)
