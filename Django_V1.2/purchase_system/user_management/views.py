from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth.decorators import user_passes_test
from .forms import UserAdminForm
from django.contrib.auth import update_session_auth_hash
from .forms import CustomPasswordChangeForm  # Make sure this import is added

def admin_check(user):
    return user.is_authenticated and user.is_superuser

@user_passes_test(admin_check)
def user_list(request):
    users = User.objects.all()
    return render(request, 'user_management/user_list.html', {'users': users})

@user_passes_test(admin_check)
def user_edit(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    if request.method == 'POST':
        form = UserAdminForm(request.POST, instance=user)
        password_form = CustomPasswordChangeForm(user, request.POST)
        if form.is_valid() and password_form.is_valid():
            form.save()
            password_form.save()
            update_session_auth_hash(request, user)  # Keep the user logged in after password change
            return redirect('user_management:user_list')
    else:
        form = UserAdminForm(instance=user)
        password_form = CustomPasswordChangeForm(user)
    return render(request, 'user_management/user_edit.html', {'form': form, 'password_form': password_form, 'user': user})