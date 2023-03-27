print("enter your favorite fruits, separate them with space")
favorite_fruits = set(input().split())
print("Enter a fruit")
fruit = input()
if fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")
