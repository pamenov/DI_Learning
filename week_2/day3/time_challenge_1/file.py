def get_divisors(num):
    divisors = [1]
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            if i * i == num:
                divisors.append(i)
            else:
                divisors.append(i)
                divisors.append(num // i)
    return divisors

def is_perfect(num):
    return num == sum(get_divisors(num))


if __name__ == "__main__":
    num = int(input("Enter the number\n"))
    print(is_perfect(num))
