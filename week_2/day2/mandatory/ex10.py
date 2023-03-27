sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []
sandwich_orders.reverse()
for sandwich in sandwich_orders[::-1]:
    print(f"{sandwich} is prepared")
    finished_sandwiches.append(sandwich_orders.pop())
