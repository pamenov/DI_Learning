from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Customer(models.Model):
    first_name = models.CharField(max_length=20)
    second_name = models.CharField(max_length=20)
    address = models.CharField(max_length=50)
    city = models.CharField(max_length=20)
    country = models.CharField(max_length=20)
    email = models.EmailField()
    phone = PhoneNumberField(unique=True)


    def __str__(self):
        return self.first_name + ' ' + self.second_name


class VehicleType(models.Model):
    name = models.CharField(max_length=30, unique=True)


    def __str__(self):
        return self.name


class VehicleSize(models.Model):
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name


class Vehicle(models.Model):
    vehicle_type = models.ForeignKey(VehicleType, on_delete=models.CASCADE)
    date_created = models.DateField(auto_now_add=True)
    cost = models.FloatField()
    size = models.ForeignKey(VehicleSize, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.vehicle_type) + ' ' + str(self.size)


class Rental(models.Model):
    rental_date = models.DateField(auto_now_add=True)
    return_date = models.DateField(blank=True, null=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='rentals')
    vehicle = models.ForeignKey(Vehicle, on_delete=models.DO_NOTHING, related_name='rentals')

    def __str__(self):
        return str(self.customer) + str(self.rental_date)




class RentalRate(models.Model):
    daily_rate = models.FloatField()
    vehicle_type = models.ForeignKey(VehicleType, on_delete=models.CASCADE)
    vehicle_size = models.ForeignKey(VehicleSize, on_delete=models.CASCADE)
