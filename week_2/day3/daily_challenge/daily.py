# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.

def find_letters_indexies(word):
    letter_indexies = {}
    for i in range(len(word)):
        letter = word[i]
        if letter in letter_indexies:
            letter_indexies[letter].append(i)
        else:
            letter_indexies[letter] = [i]
    return letter_indexies

def challenge_1():
    word = input("Enter your word\n")
    letter_counter = find_letters_indexies(word)
    print(letter_counter)


#Challenge 2
# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Examples

def parse_amount(string):
    return int(''.join(filter(str.isdigit, string)))

def challenge_2(items_purchase, wallet):
    list_of_possabilities = []
    for name, price in items_purchase.items():
        if parse_amount(price) <= parse_amount(wallet):
            list_of_possabilities.append(name)
    return list_of_possabilities

if __name__ == "__main__":
    items_purchase = {
        "Water": "$1",
        "Bread": "$3",
        "TV": "$1,000",
        "Fertilizer": "$20"
    }
    wallet = "$300"
    print(challenge_2(items_purchase, wallet))

    items_purchase = {
        "Apple": "$4",
        "Honey": "$3",
        "Fan": "$14",
        "Bananas": "$4",
        "Pan": "$100",
        "Spoon": "$2"
    }

    wallet = "$100" 
    print(challenge_2(items_purchase, wallet))


    items_purchase = {
        "Phone": "$999",
        "Speakers": "$300",
        "Laptop": "$5,000",
        "PC": "$1200"
    }

    wallet = "$1"
    print(challenge_2(items_purchase, wallet))
