def create_list(n, length):
    return [n * i for i in range(1, length + 1)]

print("enter number")
n = int(input())
print("enter length")
length = int(input())
print(create_list(n, length))
