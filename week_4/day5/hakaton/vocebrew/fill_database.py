import django
import os


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vocebrew.settings')
django.setup()


from poalim.models import Verb, Category

with open("verbs.csv", encoding="utf-8-sig") as f:
    for line in f:
        hebrew, root, part, cat, trans = line.split(";")
        # print(root, hebrew, part, cat, trans)
        cat_obj = Category.objects.get(name_rus=cat)
        verb = Verb(
            hebrew=hebrew,
            root=root,
            category=cat_obj,
            ru_translate=trans
        )
        verb.save()




# def fake_customer():
#     locale = choice(AVAILABLE_LOCALES)
#     # county_loc = locale.split("_")[1]
#     fake = Faker(locale)
#     print(locale)
#     first_name, second_name = fake.name().split()
#     fake_customer = Customer(
#         first_name=first_name,
#         second_name=second_name,
#         address=fake.address(),
#         city=fake.city(),
#         country=fake.current_country(),
#         email=fake.email(),
#         phone=fake.phone_number(),
#     )
#
#     fake_customer.save()
#
#
# if __name__ == '__main__':
#
#     for _ in range(10):
#         fake_customer()