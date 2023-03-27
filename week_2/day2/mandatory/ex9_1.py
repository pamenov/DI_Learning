PRICES = [0, 10, 15]
BORDER_AGES = [0, 3, 12, 9999]


family_members = ["mom", "dad", "rocky", "arnold", "charlie"]
total_price = 0
for guy in family_members:
    print(f"How old are you, {guy}?")
    age = int(input())
    for i in range(len(BORDER_AGES)):
        if BORDER_AGES[i] <= age < BORDER_AGES[i + 1]:
            total_price += PRICES[i]
            break
print(f"Total price is {total_price}")
