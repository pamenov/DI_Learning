from random import randint


def read_data():
    data = []
    string = input("type string, '-1' if finished\n")
    while string != "-1":
        data.append(string)
        string = input("type string, '-1' if finished\n")
    return data

def read_columns(data):
    length = len(data[0])
    for string in data:
        if len(string) != length:
            print("incorrect data")
            return
    column_text = []
    for symb_num in range(length):
        column_text += [string[symb_num] for string in data]
    return column_text

def proceed_data(data):
    words = []
    word = []
    for i in range(len(data)):
        symb = data[i]
        if symb.isalpha():
            word.append(symb)
        elif len(word) != 0:
            words.append("".join(word))
            word = []
        if i == len(data) - 1 and symb.isalpha():
            words.append("".join(word))
    return ' '.join(words)

def another_proceed_data(data):
    new_data = [char if char.isalpha() else " " for char in data]
    text = "".join(new_data)
    return " ".join(text.split())

def generate_random_data(num_of_rows, str_length):
    data = []
    for _ in range(num_of_rows):
        row = [chr(randint(32, 127)) for i in range(str_length)]
        data.append(''.join(row))
    return data

def test(num_of_rows, str_length):
    data = generate_random_data(num_of_rows, str_length)
    if proceed_data(read_columns(data)) != another_proceed_data(read_columns(data)):
        print("AAAAAAHHHHTUUUUNG!!!!!!!!")
        return False
    else:
        print(proceed_data(read_columns(data)))
        print("Col beseder!")
        return True

def stress_test():
    while True: 
        num_of_rows = randint(5, 20)
        str_length = randint(3, 10)
        if not test(num_of_rows, str_length):
            break




if __name__ == "__main__":
    # data = read_data()
    # print(proceed_data(read_columns(data)))
    stress_test()
