from django.db import models

CHOICES = (
    ('sunny1', 'Sunny1'),
    ('sunny2', 'Sunny2'),
    ('sunny3', 'Sunny3'),
)


class Report(models.Model):
    location = models.CharField(max_length=50)
    tempreature = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    weather_type = models.CharField(max_length=10, choices=CHOICES)

    def __str__(self):
        return str(self.location) + ' ' + str(self.created_at)
