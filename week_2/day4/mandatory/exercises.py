from random import randint

# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

def display_message(answer, *args):
    all_args = [answer] + list(args)
    message = ', '.join(all_args)
    print(f"I'm learning {message}")

# 🌟 Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    print(f"My favorite book is {title}")

# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

def describe_city(city, county="Vatican"):
    print(f"{city} is in {county}")

# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

def foo4(num=randint(1, 100)):
    another_num = randint(1, 100)
    if num == another_num:
        print("Lucky piece of shit!")
    else:
        print(f"{num} != {another_num}")

# 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

def make_shirt(size="L", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'")

# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names. magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

def show_magicians(magician_names):
    print(', '.join(magician_names))

def make_great(magician_names):
    for i in range(len(magician_names)):
        magician_names[i] += " the Great"

# 🌟 Exercise 7 : Temperature Advice

get_random_temp = lambda: randint(-10, 40)

def get_random_with_season(season):
    limits = {
        "winter": (-35, 0),
        "spring": (-10, 20),
        "summer": (10, 35),
        "autumn": (-5, 25)
    }
    return randint(*limits[season])

def main():
    temp = get_random_temp()
    messages = {
        (-10, 0): "Brrr, that’s freezing! Wear some extra layers today",
        (0, 16): "Quite chilly! Don’t forget your coat",
        (16, 23): "16-23",
        (23, 32): "16-23",
        (32, 41): "pzdc"
    }
    print(f"The temperature right now is {temp} degrees Celsius")
    for temp_range in messages:
        if temp_range[0] <= temp <= temp_range[1]:
            print(messages[temp_range])
            break



if __name__ == "__main__":
    # ________ 1________
    # display_message("q", "w", "r")
    
    # ________ 2________
    # favorite_book("Lord of the Rings")

    # ________ 3________    
    # describe_city("Bangkok")
    # describe_city("Bangkok", "Thailand")

    # ________ 4________
    # foo4()

    # ________ 5________
    # make_shirt()
    # make_shirt(size="M")
    # make_shirt(size="S", text="Nike")

    # ________ 6________
    # magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
    # show_magicians(magician_names)
    # make_great(magician_names)
    # show_magicians(magician_names)

    # ________ 7________
    print(get_random_temp())
    print(get_random_with_season("spring"))
