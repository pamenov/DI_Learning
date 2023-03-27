toppings = []
print("Enter a pizza topping")
users_input = input()
while users_input != "quit":
    toppings.append(users_input)
    print(f"{users_input} added. Anything more?")
    users_input = input()
print("All toppings are:", *toppings)
price = 10 + 2.5 * len(toppings)
print(f"Total price {price}")
