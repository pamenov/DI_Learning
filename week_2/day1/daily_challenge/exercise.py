print("Enter any string")
string = input()
current_arr = []
for letter in string:
    current_arr.append(letter)
    print(*current_arr, sep="")
