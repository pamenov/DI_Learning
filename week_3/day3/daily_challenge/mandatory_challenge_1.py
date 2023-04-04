class Circle:
    def __init__(self, **kwargs):
        if "radius" in kwargs:
            self.radius = kwargs["radius"]
            self.diameter = 2 * self.radius
        elif "diameter" in kwargs:
            self.diameter = kwargs["diameter"]
            self.radius = self.diameter / 2
        else:
            raise TypeError(f"Incorrect kwargs for class Circle {kwargs}")

    def __str__(self):
        return f"circle radius is {self.radius}, diametr {self.diametr} why I need to stor both of them?"

    def __repr__(self):
        return f"radius = {self.radius}"

    def __gt__(self, rhs):
        return self.radius > rhs.radius

    def __ge__(self, rhs):
        return self.radius >= rhs.radius

    def __lt__(self, rhs):
        return self.radius < rhs.radius

    def __le__(self, rhs):
        return self.radius <= rhs.radius

    def __eq__(self, rhs):
        return self.radius == rhs.radius

if __name__ == "__main__":
    circle = Circle(radius=1)
    list_of_circles = [
        Circle(radius=1),
        Circle(radius=5),
        Circle(radius=3),
    ]
    list_of_circles.sort()
    print(list_of_circles)
