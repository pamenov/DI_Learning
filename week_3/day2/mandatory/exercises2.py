# Exercise 1 : Family
# Instructions
# Create a class called Family and implement the following attributes:

# members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
# last_name : (string)

# Implement the following methods:

# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ first name.

class Meshpaha():
    def __init__(self, last_name="Netanyahu", members=None):
        self.last_name = last_name
        self.members = members
        if members is None:
            members = {}

    def born(self, **kwargs):
        self.members.append(kwargs)
        self.members[-1]["is_child"] = True
        self.members[-1]["age"] = 0

    def is_18(self, name):
        for guy in self.members:
            if guy["name"] == name and guy["age"] < 18:
                return False
        return True

    def family_presentation(self):
        print(f"{self.last_name} members are:")
        for guy in self.members:
            print(guy["name"])

def proceed_1():
    family = Meshpaha(members=[
            {'name':'Michael','age':35,'gender':'Male','is_child':False},
            {'name':'Sarah','age':32,'gender':'Female','is_child':False},
        ]
    )
    family.born(name="Alexander", gender="Non-binary")
    print(family.is_18("Alexander"))
    family.family_presentation()

# Exercise 2 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:

# This is no random family they are an incredible family,
# therefore we need to add the following keys to our dictionaries: power and incredible_name.

# 2.Add a method called use_power, this method should print the power of a member only if they are over 18 years old. 
# If not raise an exception (look up exceptions) which stated they are not over 18 years old.


# 3. Add a method called incredible_presentation which : 
# * prints the family’s last name and all the members’ first name (ie. use the super() function, 
# to call the family_presentation method) * prints all the members’ incredible name and power.


# 4. Call the incredible_presentation method.
# 5. Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
# 6. Call the incredible_presentation method again.

class TheIncredibles(Meshpaha):
    def __init__(self, **kwargs):
        members = kwargs["members"]
        if not members is None:
            for guy in members:
                if "power" not in guy or "incredible_name" not in guy:
                    raise SyntaxError("Incorrect member keys")
                    return
        super().__init__(**kwargs)

    def use_power(self, name):
        for guy in self.members:
            if guy["name"] == name:
                if guy["age"] < 18:
                    raise SyntaxError("under 18")
                else:
                    print(guy["power"])

    def incredible_presentation(self):
        super().family_presentation()
        for guy in self.members:
            print(f"{guy['incredible_name']} power is to {guy['power']}")



def proceed_2():
    members=[
        {'name':'Michael','age':35,'gender':'Male','is_child':False, "power": "fly", "incredible_name": "qwe"},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False, "power": "sleep", "incredible_name": "asd"},
    ]
    super_family = TheIncredibles(members=members)
    super_family.incredible_presentation()
    super_family.born(name="jack", gender="unlnown", power="Unknown Power", incredible_name="zxc")
    super_family.incredible_presentation()



if __name__ == "__main__":
    # proceed_1()
    proceed_2()
