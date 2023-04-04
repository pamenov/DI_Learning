# Exercise 1 : Built-In Functions
# Instructions
# Python has many built-in functions.
# If you feel that you don’t know how to properly implement them take a look at the python documentation online.

# Write a program which prints the results of the following python built-in functions: abs(), int(), input().
# Using the __doc__ dunder method create your own documentation which explains the execution of your code.
# Take a look at the doc method on google for help.

def result_of_build_in_funcs():
    """Quite useless function, don't use it in real life"""

    print(f"{abs(1)} abs")
    print(f"{int(1)} int")
    print(input("input smthng"))


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        cur_name = self.currency + "s"
        if self.amount == 1:
            cur_name = self.currency
        return f"{self.amount} {cur_name}"

    def __repr__(self):
        return str(self)

    def __int__(self):
        return int(self.amount)

    def __add__(self, rhs):
        if isinstance(rhs, int):
            return Currency(self.currency, self.amount + rhs)
        if not isinstance(rhs, Currency):
            raise TypeError(f"Unsupported operation + between <Currency> and {type(rhs)}")
        if self.currency == rhs.currency:
            return Currency(self.currency, self.amount + rhs.amount)
        raise TypeError(f"Cann't use + for <{self.currency}> and <{rhs.currency}>")

    def __radd__(self, lhs):
        if isinstance(lhs, int):
            return Currency(self.currency, self.amount + lhs)

    def __sub__(self, rhs):
        if isinstance(rhs, int):
            return Currency(self.currency, self.amount - rhs)
        if not isinstance(rhs, Currency):
            raise TypeError(f"Unsupported operation - between <Currency> and {type(rhs)}")
        if self.currency == rhs.currency:
            return Currency(self.currency, self.amount - rhs.amount)
        raise TypeError(f"Cann't use - for <{self.currency}> and <{rhs.currency}>")

    def __iadd__(self, rhs):
        if isinstance(rhs, int):
            return Currency(self.currency, self.amount + rhs)
        if not isinstance(rhs, Currency):
            raise TypeError(f"Unsupported operation += between <Currency> and {type(rhs)}")
        if self.currency == rhs.currency:
            return Currency(self.currency, self.amount + rhs.amount)
        raise TypeError(f"Cann't use += for <{self.currency}> and <{rhs.currency}>")



def test_exercise_2():
    c1 = Currency('dollar', 5)
    c2 = Currency('dollar', 10)
    c3 = Currency('shekel', 1)
    c4 = Currency('shekel', 10)
    print(repr(c1))
    print(c1 + c2)
    print(5 + c1)
    print(c4 - 9)
    print(c1 - c2)
    # print(c1 + "dollar")
    # print(c1 - c3)


if __name__ == "__main__":
    # result_of_build_in_funcs()
    # print(result_of_build_in_funcs.__doc__)
    test_exercise_2()
