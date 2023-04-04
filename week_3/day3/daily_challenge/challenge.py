def read_input():
    data = []
    for _ in range(5):
        print("Input format: 'name,age,score'")
        line = input().split(',')
        data.append((line[0], int(line[1]), int(line[2])))
    return data

if __name__ == "__main__":
    data = read.data
    data.sort()
    print(*data, sep="\n")


# I think author supposed following solution, but to store ints as string is strange as for me

# def read_input():
#     data = []
#     for _ in range(5):
#         print("Input format: 'name,age,score'")
#         line = input().split(',')
#         data.append(line)
#     return data

# if __name__ == "__main__":
#     data = read.data
#     data.sort(key=lambda trio: trio[0], int(trio[1]), int(trio[2]))
#     print(*data, sep="\n")
