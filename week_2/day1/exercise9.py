CM_PER_INCH = 2.54 


print("Whats your height in inches?")
user_height_in_inches = float(input())
if user_height_in_inches * CM_PER_INCH > 145:
    print("Enjoy your ride")
else:
    print("You are not tall enough")
