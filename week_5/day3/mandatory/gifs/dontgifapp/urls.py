from django.urls import path

from .views import AddCategoryView, AddGifView, CategoryView, HomePageView

urlpatterns = [
    path('', HomePageView, name="home"),
    path('addgif', AddGifView, name="addgif"),
    path('addcategory', AddCategoryView, name="addcategory"),
    path('category/<slug:slug>', CategoryView)
]
