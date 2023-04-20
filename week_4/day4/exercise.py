# PART 1
# In this exercise we will use PostgreSQL and Python. Create a new database and a new table in pgAdmin (or in psql). 
# Read the instructions below before creating the new table

# Create a new class called MenuItem, the attributes should be the name and price of each item.

# Create several methods (save, delete, update) these methods will allow a user to save,
 # delete and update items from the database.

# Within the MenuItem class create a method called all which will return a list of all our MenuItem objects.

# Create another method called get_by_name that will return a single MenuItem object depending on it’s name,
 # if an object is not found (there is no item matching the name in the get_by_name method) return None.
import psycopg2


def execute_query(connection, query):
    with connection.cursor() as cursor:
        cursor.execute(query)
        connection.commit()
    connection.close()

def select_query(connection, query):
    with connection.cursor() as cursor:
        cursor.execute(query)
        result = cursor.fetchall()
    return result

class MenuManager:
    def __init__(self, hostname, username, password, database):
        self.HOSTNAME = hostname
        self.USERNAME = username
        self.PASSWORD = password
        self.DATABASE = database

    def start_connection(self):
        return psycopg2.connect(
            host=self.HOSTNAME,
            dbname=self.DATABASE,
            password=self.PASSWORD,
            user=self.USERNAME
        )

    def get_item(self, name: str) -> tuple:
        connection = self.start_connection()
        query = f"SELECT name, price FROM {self.DATABASE} WHERE name = '{name}'"
        result = select_query(connection, query)
        if len(result) == 0:
            return
        else:
            return result[0]        

    def add(self, name: str, price: int) -> bool:
        connection = self.start_connection()
        if self.get_item(name) is not None:
            return False
        query = f"INSERT INTO {self.DATABASE} (name, price) VALUES ('{name}', {price});"
        execute_query(connection, query)
        return True

    def delete(self, name: str) -> bool:
        connection = self.start_connection()
        if self.get_item(name) is None:
            return False
        query = f"DELETE FROM {self.DATABASE} WHERE name='{name}';"
        execute_query(connection, query)
        return True

    def rename_item(self, name: str, new_name: str) -> None:
        connection = self.start_connection()
        if self.get_item(name) is None:
            return False
        query = f"UPDATE {self.DATABASE} SET name = '{new_name}' WHERE name = '{name}';"
        execute_query(connection, query)
        return True

    def change_price(self, name: str, new_price: int) -> None:
        connection = self.start_connection()
        if self.get_item(name) is None:
            return False
        query = f"UPDATE {self.DATABASE} SET price = '{new_price}' WHERE name = '{name}';"
        execute_query(connection, query)

    @property
    def all_items(self):
        connection = self.start_connection()
        query = f"SELECT name, price FROM {self.DATABASE}"
        return select_query(connection, query)



# if __name__ == "__main__":
#     manager = MenuManager()
#     # manager.add(name="pasta", price=210)
#     # manager.delete("Beef")
#     # manager.rename_item(name="Rum", new_name="Dark rum")
#     # manager.change_price(name="Gin", new_price=500)
#     print(manager.all_items)
#     print(manager.get_item('Good Beef'))
