def reverse_sentance(sentance):
    words = sentance.split()
    return ' '.join(reversed(words))

if __name__ == "__main__":
    sentance = input("Enter your sentance\n")
    print(reverse_sentance(sentance))
