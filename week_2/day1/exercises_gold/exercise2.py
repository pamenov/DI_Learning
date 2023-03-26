print("Enter month number")
month_number = int(input())
season_dict = {0: "Winter",
               1: "Spring",
               2: "Summer",
               3: "Autumn"}
tranformed_number = month_number % 12
season_number = tranformed_number // 3
print(f"season is {season_dict[season_number]}")
