teenagers = ["asd", "dfg", "oih", "yossi"]
legal_age_teenagers = set(teenagers)
for dude in teenagers:
    print(f"{dude}, what's your name?")
    if 16 <= int(input()) < 21:
        legal_age_teenagers.remove(dude)
print(*legal_age_teenagers)
