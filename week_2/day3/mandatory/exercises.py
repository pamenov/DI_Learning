from bisect import bisect_left


def read_dict(key_legend="key", value_legend="value", key_type=str, value_type=int):
    final_dict = {}
    key = input(f"Enter {key_legend}, 'quit' if finish \n")
    while key != 'quit':
        final_dict[key_type(key)] = value_type(input(f"Enter {value_legend}\n"))
        key = input(f"Enter {key_legend}, 'quit' if finish\n")
    return final_dict

# Exercise 1
# Convert the two following lists, into dictionaries.

def create_dict(keys, values):
    return dict(zip(keys, values))


# Exercise 2
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable 
# (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

def cinemax_price(border_ages=[0, 3, 12, 99999], prices=[0, 10, 15]):
    family = read_dict(key_legend="name", value_legend="age")
    total_price = 0
    for name, age in family.items():
        index = bisect_left(border_ages, age)
        total_price += prices[index]
    return total_price


#Exercise 3
# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:

def exercise_3():
    brand_info = {
        "name": "Zara", 
        "creation_date": 1975,
        "creator_name": "Amancio Ortega Gaona",
        "type_of_clothes": ["men", "women", "children", "home"], 
        "international_competitors": ["Gap", "H&M", "Benetton"],
        "number_stores": 7000, 
        "major_color": { 
            "France": ["blue"], 
            "Spain": ["red"], 
            "US": ["pink", "green"]
            }
    }
    brand_info["number_stores"] = 2
    name = brand_info["name"]
    clients = ", ".join(brand_info["type_of_clothes"])
    print(f"Brand {name} has stuff for {clients}")
    brand_info["country_creation"] = "Spain"
    if "international_competitors" in brand_info:
        brand_info["international_competitors"].append("Desigual")
    brand_info.pop("creation_date")
    print(brand_info["international_competitors"][-1])
    print(*brand_info["major_color"]["US"])
    print(len(brand_info))
    for key_name in brand_info.keys():
        print(key_name)
    more_on_zara = {
        "creation_date": 1975,
        "number_stores": 10000
    }
    brand_info.update(more_on_zara)
    print(brand_info["number_stores"])


# Exercise 4
# #1/
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
# #2/
# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
# #3/ 
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
# The characters, which names start with the letter “m” or “p”.

def exercise_4(array=["Mickey","Minnie","Donald","Ariel","Pluto"]):
    print(create_dict(keys=array, values=range(len(array))))
    print(create_dict(values=array, keys=range(len(array))))
    print(create_dict(keys=sorted(array), values=range(len(array))))
    new_array = list(filter(lambda name: "i" in name, array))
    print(create_dict(keys=new_array, values=range(len(new_array))))
    one_more_array = list(filter(lambda name: name[0] in {"m", "M", "p", "P"}, array))
    print(create_dict(keys=one_more_array, values=range(len(one_more_array))))



if __name__ == "__main__":
    # print(cinemax_price())
    exercise_4()
