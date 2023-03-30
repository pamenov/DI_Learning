WHAT_TO_PRINT = { 
    1: "x",
    2: "o",
    0: " ",
}
            
def print_br(length):
    print("|".join(["---"] * length))

def display_field(field):
    for row in range(len(field)):
        line = [f" {WHAT_TO_PRINT[field[row][col]]} " for col in range(len(field[row]))]
        print("|".join(line))
        if row != len(field) - 1:
            print_br(len(field[row]))

def read_input():
    return int(input("Your row\n")) - 1, int(input("Your column\n")) - 1

def is_correct_input(field, x, y):
    if not 0 <= x < len(field):
        return False
    if not 0 <= y < len(field[0]):
        return False
    if field[x][y] != 0:
        return False
    return True

def get_correct_input(field):
    x, y = read_input()
    while not is_correct_input(field=field, x=x, y=y):
        print("Incorrect input!")
        x, y = read_input()
    return x, y

def check_line(line, symb):
    return line.count(symb) == len(line)

def check_victory(field, x_last, y_last):
    symb = field[x_last][y_last]
    # check horizontal
    if field[x_last].count(symb) == len(field):
        return True
    # check vertical
    vertical = [field[i][y_last] for i in range(len(field))]
    if vertical.count(symb) == len(field):
        return True
    # check diagonal
    if x_last == y_last:
        diagonal = [field[i][i] for i in range(len(field))]
        if diagonal.count(symb) == len(field):
            return True
    # check another diagonal
    if x_last + y_last == 2:
        diagonal = [field[i][len(field) - i - 1] for i in range(len(field))]
        if diagonal.count(symb) == len(field):
            return True
    return False

def switch_player(i):
    return i % 2 + 1

def game(field_size):
    field = [[0] * field_size for _ in range(field_size)]
    print("Game starts!")
    display_field(field)
    current_player = 1
    for turn_num in range(field_size ** 2):
        print(f"Player {current_player}")
        x, y = get_correct_input(field)
        field[x][y] = current_player
        if check_victory(field=field, x_last=x, y_last=y):
            print(f"Player {current_player} wins!")
            return current_player
        current_player = switch_player(current_player)
        display_field(field)
    print("Draw!")
    return 0

def test_display():
    test_field = [
        [1, 0, 2],
        [2, 1, 0],
        [0, 0, 0],
    ]
    display_field(test_field)


if __name__ == "__main__":
    size = int(input("Enter field size\n"))
    game(size)
