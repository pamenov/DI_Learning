my_fav_numbers = set()
my_fav_numbers.add(26)
my_fav_numbers.add(14)
my_fav_numbers.remove(14)
friend_fav_numbers = {1, 2, 3, 26}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)
