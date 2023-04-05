import json
from random import choice

# 🌟 Exercise 1 – Random Sentence Generator

def read_dictionary(path_to_file):
    with open(path_to_file, 'r') as fin:
        dictionary = []
        for line in fin:
            dictionary.append(line.strip())
        return dictionary

def generate_random_sentance(number_of_words):
    words = read_dictionary("dictionary.txt")
    chosen_list = []
    for _ in range(number_of_words):
        chosen_list.append(choice(words).lower())
    return " ".join(chosen_list)

def main():
    print("""This script will generate some words sequense\n
             You can choose length of secuence.\n
             It have to be between 2 and 20.""")
    try:
        length = int(input("Enter length\n"))
    except:
        raise TypeError("Incorrect input")
    if length < 2 or 20 < length:
        raise TypeError("Incorrect integer")
    print(generate_random_sentance(length))

# 🌟 Exercise 2: Working With JSON
# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.

def json_exercise():
    sampleJson = """{ 
       "company":{ 
          "employee":{ 
             "name":"emma",
             "payable":{ 
                "salary":7000,
                "bonus":800
             }
          }
       }
    }"""
    data = json.loads(sampleJson)
    print(f"""I have access to salary - {data["company"]["employee"]["payable"]["salary"]}""")
    with open("json_data.txt", "w") as fout:
        json.dump(data, fout)

if __name__ == "__main__":
    # main()
    json_exercise()
