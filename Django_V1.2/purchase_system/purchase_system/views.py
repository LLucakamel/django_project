from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.views.decorators.http import require_http_methods

@login_required
def home(request):
    return render(request, 'home.html')

@require_http_methods(["GET", "POST"])
def logout_page(request):
    if request.method == 'POST':
        logout(request)
        request.session.flush()  # This will remove all session data
        return redirect('login')  # Redirect the user to the login page after logout
    return render(request, 'logout.html')

from django.shortcuts import render

def login_view(request):
    if request.method == 'POST':
        # handle POST request
        ...
    return render(request, 'registration/login.html')