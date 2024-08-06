from django.urls import path
from . import views

app_name = 'user_management'

urlpatterns = [
    path('users/', views.user_list, name='user_list'),
    path('users/edit/<int:user_id>/', views.user_edit, name='user_edit'),
]