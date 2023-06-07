from django.contrib import admin
from .models import Room, RoomType, Rent, Review


admin.site.register(Room)
admin.site.register(RoomType)
admin.site.register(Rent)
admin.site.register(Review)
