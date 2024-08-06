from django.shortcuts import render

def material_request_view(request):
    # Your logic here, for example, fetching data to be displayed
    return render(request, 'material_request/material_request.html')