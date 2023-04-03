class Farm:
    def __init__(self, farm_owner):
        self.owner = farm_owner
        self.animals = {}

    def add_animal(self, name, count=6):
        self.animals[name] = self.animals.get(name, 0) + count

    def get_info(self):
        title = f"{self.owner}'s farm"
        repr_dict = []
        for animal, count in self.animals.items():
            repr_dict.append(f"{animal}: {count}")
        return title + "\n\n" + "\n".join(repr_dict)

    def get_animals_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        if not self.animals:
            print("No animals")
            return
        animals = self.get_animals_types()
        answer_ending = ", ".join(animals[:-1]) + f" and {animals[-1]}"
        return f"{self.owner}'s farm has " + answer_ending 


if __name__ == "__main__":
    macdonald = Farm("McDonald")
    macdonald.add_animal('cow',5)
    macdonald.add_animal('sheep')
    macdonald.add_animal('sheep')
    macdonald.add_animal('goat', 12)
    print(macdonald.get_info())
    print(macdonald.get_short_info())
