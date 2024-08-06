"""
Middleware Classes
This module defines the base middleware class.
"""

from django.utils.cache import add_never_cache_headers

class DisableClientSideCachingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response['Cache-Control'] = 'no-store'
        return response