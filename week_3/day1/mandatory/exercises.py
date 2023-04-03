# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

    def __str__(self):
        return f"name - {self.name}, age - {self.age}"

def oldest_cat(array_of_cats):
    return max(array_of_cats, key=lambda cat: cat.age)

def exercise1_proceed():
    first = Cat("qwe", 31)
    second = Cat("asd", 48)
    third = Cat("zxc", 21)
    oldest = oldest_cat([first, second, third])
    print(f"The oldest cat is {oldest.name}. Her age is {oldest.age}")

# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def barking(self):
        print(f"{self.name} goes woof")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high")

    def __str__(self):
        return f"name - {self.name}, height - {self.height}"

    def __gt__(self, other):
        return self.height > other.height


def exercise2_proceed():
    davids_dog = Dog(name="Rex", height=50)
    print(davids_dog)
    davids_dog.barking()
    davids_dog.jump()
    saras_dog = Dog(name="Teacup", height=20)
    print(saras_dog)
    saras_dog.barking()
    saras_dog.jump()
    biggest_dog = max(davids_dog, saras_dog)
    print(biggest_dog.name)

# 🌟 Exercise 3 : Who’s The Song Producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:
# Then, call the sing_me_a_song method. The output should be:

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def __str__(self):
        return '\n'.join(self.lyrics)

    def sing_me_a_song(self):
        print(self)

def exercise3_proceed():
    stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
    stairway.sing_me_a_song()

# Exercise 4 : Afternoon At The Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.

class Zoo:
    def __init__(self, zoo_name):
        self.animals = set()
        self.name = zoo_name

    def get_animals(self):
        for animal in self.animals:
            print(animal)

    def add_animal(self, new_animal):
        self.animals.add(new_animal)

    def sell_animal(self, sold_animal):
        self.animals.discard(sold_animal)

    def sorted_animals(self):
        return sorted(self.animals)

    def group_animals(self):
        if not self.animals:
            return []
        sorted_animals = self.sorted_animals()
        first_letter = sorted_animals[0][0]
        groups = {first_letter: [sorted_animals[0]]}
        for animal in sorted_animals[1 : ]:
            if animal[0] == first_letter:
                groups[first_letter].append(animal)
            else:
                first_letter = animal[0]
                groups[first_letter] = [animal]
        return groups

def exercise4_proceed():
    ramat_gan_safari = Zoo(zoo_name="Ramat_gan_safari")
    ramat_gan_safari.add_animal("dog")
    ramat_gan_safari.add_animal("dolphin")
    ramat_gan_safari.add_animal("lion")
    ramat_gan_safari.add_animal("lizard")
    ramat_gan_safari.add_animal("dog")
    ramat_gan_safari.add_animal("elephant")
    print(*ramat_gan_safari.sorted_animals())
    ramat_gan_safari.sell_animal("elephant")
    print(*ramat_gan_safari.sorted_animals())
    groups = ramat_gan_safari.group_animals()
    print(groups)    




if __name__ == "__main__":
    # exercise1_proceed()
    # exercise2_proceed()
    # exercise3_proceed()
    exercise4_proceed()
