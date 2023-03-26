print("Enter your number")
n = int(input())
ans_table = {0: "even", 1: "odd"}
print("Your number is " + ans_table[n % 2])
