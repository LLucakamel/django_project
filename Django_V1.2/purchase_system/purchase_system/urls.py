"""
URL configuration for purchase_system project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth.views import LogoutView
from accounts.views import profile_view
from .views import home  # Import the home view

urlpatterns = [
    path('', home, name='home'),  # Use the home view for the root URL
    path('admin/users/', include('user_management.urls', namespace='admin_user_management')),
    path('admin/', admin.site.urls),    
    path('material_request/', include('material_request.urls')),
    path('products/', include('products.urls')),
    path('accounts/', include('accounts.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('profile/', profile_view, name='profile'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'), 
    path('users/', include('user_management.urls', namespace='user_management')),  # Assuming there's a user_management.urls module
    ]