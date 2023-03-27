string = input()
no_repeates_array = [string[0]]
for i in range(1, len(string)):
    if string[i] != string[i - 1]:
        no_repeates_array.append(string[i])
print(''.join(no_repeates_array))
