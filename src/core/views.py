from django.shortcuts import render
from django.http import JsonResponse

# third party imports
from rest_framework.views import APIView
from rest_framework.response import Response

class ParkView(APIView):
    def get(self, request, *args, **kwargs):
        park = {
            'type': 'Feature',
            'properties':
            {
                'id': 24,
                'risk': 10,
            },
            'geometry':
            {
                'type': 'Point',
                'coordinates': [-151.5129, 63.1016, 0.0]
            }
        }
        return Response(park)