from random import choice
from faker.config import AVAILABLE_LOCALES
from faker import Faker
from dotenv import load_dotenv
import django
import os


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')
django.setup()


from rent.models import Customer


def fake_customer():
    locale = choice(AVAILABLE_LOCALES)
    # county_loc = locale.split("_")[1]
    fake = Faker(locale)
    print(locale)
    first_name, second_name = fake.name().split()
    fake_customer = Customer(
        first_name=first_name,
        second_name=second_name,
        address=fake.address(),
        city=fake.city(),
        country=fake.current_country(),
        email=fake.email(),
        phone=fake.phone_number(),
    )

    fake_customer.save()


if __name__ == '__main__':

    for _ in range(10):
        fake_customer()
