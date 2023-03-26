current_length = 0
print("Enter as long sentance without 'a' as you can. Type '-1' to stop.")
sentance = input()
while sentance != "-1":
    if "a" in sentance or "A" in sentance:
        print("Incorrect sentance")
    else:
        if len(sentance) > current_length:
            current_length = len(sentance)
            print("good job!")
    print("Enter as long sentance without 'a' as you can. Type '-1' to stop.")
    sentance = input()
