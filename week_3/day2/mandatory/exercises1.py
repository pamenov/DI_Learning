# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def eat(self, food):
        return f'{food} costs 50$'


def proceed_exercise_1():
    bengal_cat = Bengal(name="qwe", age=1)
    char_some_unreadable_french_cat = Chartreux(name="asd", age=99)
    siamese_cat = Siamese(name="zxc", age=32)
    i_ve_made_a_list = [bengal_cat, char_some_unreadable_french_cat, siamese_cat]
    sarahs_pets = Pets(i_ve_made_a_list)
    sarahs_pets.walk()

# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age

    def fight(self, another):
        winner = max(self, another, key=lambda dog: dog.weight * dog.run_speed())
        looser = min(self, another, key=lambda dog: dog.weight * dog.run_speed())
        return f"{winner.name} beats {looser.name}"

def proceed_exercise_2():
    first = Dog(name="asd", age=2, weight=43)
    second = Dog(name="qwe", age = 3, weight=23)
    third = Dog(name="zxc", age=1, weight=27)
    dogs = first, second, third
    for dog in dogs:
        print(dog.bark())
        print(dog.run_speed())
    print(first.fight(second))
    print(second.fight(third))
    print(third.fight(first))


if __name__ == "__main__":
    # proceed_exercise_1()
    proceed_exercise_2()
