from django.urls import path
from .views import favicon, portfolio

urlpatterns = [
    path('favicon.ico', favicon, name='favicon'),
    path('', portfolio, name='home'),
    path('portfolio/', portfolio, name='portfolio'),
]
