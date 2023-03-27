def cooking(sandwich_orders):
    finished_sandwiches = []
    sandwich_orders.reverse()
    for sandwich in sandwich_orders[::-1]:
        print(f"{sandwich} is prepared")
    finished_sandwiches.append(sandwich_orders.pop())
    return finished_sandwiches


sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"] * 4
print("sliha, ain lanu pastrami")
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
finished_sandwiches = cooking(sandwich_orders)
if "Pastrami sandwich" in finished_sandwiches:
    print("ERROR")
