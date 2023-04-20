# Part 2
# Create a file called menu_editor.py , which will have the following functions:
import os

from dotenv import load_dotenv
from exercise import MenuManager

load_dotenv()

class MenuUserInterface:
    COMMANDS = {
        "a": "Add item",
        "d": "Delete item",
        "p": "change Price",
        "rn": "ReName item",
        "sh": "SHow menu",
        "q": "Quit"
    }

    # load_manager()- this function should create a new MenuItem instance.
    def __init__(self,
                 hostname=os.environ["PG_HOSTNAME"],
                 username=os.environ["PG_USERNAME"],
                 password=os.environ["PASSWORD"],
                 database=os.environ["DATABASE"],
                 ):
        self.manager = MenuManager(
            hostname=hostname,
            username=username,
            password=password,
            database=database
        )

    # show_user_menu() - this function should display the program menu (not the restaurant menu!),
    # and ask the user to choose an item. Call the appropriate function that matches the user’s input.
    def show_user_interface(self):
        print("What do you want?")
        for command in self.COMMANDS:
            print(f"{command} - {self.COMMANDS[command]}")
        print()

    # add_item_to_menu() - this will ask the user to input the item’s name and price.
    # If the item was added successfully print a message which states: item was added successfully.
    def add(self):
        name = input("Enter name\n")
        price = int(input("Enter price\n"))
        succeeded = self.manager.add(name=name, price=price)
        if succeeded:
            print(f"{name} was added to menu\n")
        else:
            print(f"{name} already exists\n")

    # remove_item_from_menu()- this function should ask the user to input the name of the item they want 
    # to remove from the restaurant’s menu. The function should not interact with the menu itself, 
    # but simply call the appropriate function from the MenuItem object.
    # If the item was deleted successfully – print a message to let the user know this was completed.
    # If not – print a message which states that there was an error.
    def delete(self):
        name = input("What do you want to delete?\n")
        succeeded = self.manager.delete(name)
        if succeeded:
            print(f"{name} deleted\n")
        else:
            print(f"There is no {name} in menu\n")

    # show_restaurant_menu() - print the restaurant’s menu.
    def display_menu(self):
        menu = self.manager.all_items
        print("MENU:")
        for name, price in menu:
            print(name, price)


    def rename_item(self):
        name = input("What do you want to rename\n")
        new_name = input("Enter new name\n")
        succeeded = self.manager.rename_item(name=name, new_name=new_name)
        if succeeded:
            print(f"{name} renamed to {new_name}\n")
        else:
            print(f"There is no {name}\n")

    def change_price(self):
        name = input("What will become more expensive?\n")
        new_price = int(input("Enter new price\n"))
        succeeded = self.manager.change_price(name=name, new_price=new_price)
        if succeeded:
            print(f"Price for {name} changed\n")
        else:
            print(f"There is no {name} in menu\n")

    # When the user chooses to exit the program, display the restaurant menu and exit the program.

    def run_session(self):
        FUNC_TABLE = {
            "a": self.add,
            "rn": self.rename_item,
            "p": self.change_price,
            "d": self.delete,
            "sh": self.display_menu,
        }
        self.show_user_interface()
        command = input()
        while command != "q":
            if command not in FUNC_TABLE:
                print("LO NAHON!!!!")
            else:
                FUNC_TABLE[command]()
            self.show_user_interface()
            command = input()
        self.display_menu()
        print("Bye, bye")

if __name__ == "__main__":
    interface = MenuUserInterface()
    interface.run_session()
