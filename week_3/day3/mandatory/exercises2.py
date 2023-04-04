# 🌟 Exercise 1: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function
import string
from datetime import date, datetime
from random import choice, randint

import pandas as pd
from func import summa


def test_exercise_1():
    print(summa(2, 2))


# 🌟 Exercise 2: Random Module
# Instructions
# Create a function that accepts a number between 1 and 100, then rolls a random number between 1 and 100,
# if it’s the same number, display a success message to the user, else don’t.
def ex2(number):
    my_number = randint(1, 100)
    if number == my_number:
        print("got it")

def test_exercise_2():
    ex2(55)

# 🌟 Exercise 3: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

def gen_string(length):
    alphabeth = string.ascii_lowercase
    array_random_letters = [choice(alphabeth) for _ in range(length)]
    return ''.join(array_random_letters)

# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

def display_date():
    print(datetime.today().strftime("%Y-%m-%d"))


# Exercise 5 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

def until_new_year():
    # print(type(datetime.today()))
    next_year = datetime.today().year + 1
    new_year = datetime(year=next_year, day=1, month=1)
    return new_year - datetime.today()

# Exercise 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice),
#  then displays a message stating how many minutes the user lived in his life.

def life_in_minuts(birthday):
    return (datetime.today() - birthday).total_seconds() / 60


# Exercise 7 : Upcoming Holiday
# Instructions
# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which 
# holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
# Hint: Start by hardcoding the datetime and name of the upcoming holiday.

def difference_without_year(some_date):
    today = date.today()
    cur_month, cur_day = today.month, today.day
    some_month, some_day = some_date.month, some_date.day
    if (cur_month, cur_day) > (some_month, some_day):
        return date(year=today.year + 1, month=some_month, day=some_day) - today
    else:
        return date(year=today.year, month=some_month, day=some_day) - today

def time_to_next_holiday():
    all_holidays = [
        date(year=1,day=1, month=1),
        date(year=1,day=12, month=11),
        date(year=1,day=7, month=2),
        date(year=1,day=24, month=1),
        date(year=1,day=17, month=5),
        date(year=1,day=21, month=9),
        date(year=1,day=13, month=10),
        date(year=1,day=26, month=10),
        date(year=1,day=8, month=4),
        date(year=1,day=11, month=3),
    ]
    today = date.today()
    next_holiday = min(all_holidays, key=difference_without_year)
    return difference_without_year(next_holiday)


if __name__ == "__main__":
    # test_exercise_1()
    # test_exercise_2()
    # print(gen_string(10))
    # display_date()
    # print(until_new_year())
    # print(life_in_minuts(datetime(year=1034, month=6, day=6)))
    print(time_to_next_holiday())
