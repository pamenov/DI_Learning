# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

from random import choice

from exercises1 import Dog


class PetDog(Dog):
    TRICK_OPTIONS = [
        "does a barrel roll",
        "stands on his back legs",
        "shakes your hand",
        "plays dead",
    ]


    def __init__(self, name, age, weight, trained=False):
       super().__init__(name=name, age=age, weight=weight)
       self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        list_of_names = [self.name] + [dog.name for dog in args]
        print(", ".join(list_of_names) +" all play together")

    def do_a_trick(self):
        action = choice(PetDog.TRICK_OPTIONS)
        print(f"{self.name} {action}")


if __name__ == "__main__":
    dog = Dog(name="qwe", age=1, weight=1)
    pet = PetDog(name="zxc", age=56, weight=987, trained=False)
    pet.train()
    pet.play(dog)
    pet.do_a_trick()
