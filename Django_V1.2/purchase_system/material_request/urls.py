from django.urls import path
from . import views

urlpatterns = [
    path('material-request/', views.material_request_view, name='material_request'),
]
