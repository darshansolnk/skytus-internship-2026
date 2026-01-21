# 1  Create a Car class with attributes like brand, model, and speed, and methods to accelerate/brake.

class car:
    def __init__(self,brand,model,speed):
        self.brand=brand
        self.model=model
        self.speed=speed
    def accelerate(self):
        self.speed +=10
        print("speed:",self.speed)
    def brake(Self):
        Self.speed -=10
        print("speed:",Self.speed)

car1=car("toyota",2020,200)
car1.accelerate()
car1.brake()



# 2 Create a BankAccount class with deposit and withdraw methods.

class Bankacc:
    def __init__(self,balance):
        self.balance=balance
    def deposite(self,amount):
        self.balance+=amount
        print("balance:",self.balance)
    def withdraw(self,amount):
        self.balance-=amount
        print("balance:",self.balance)

acc = Bankacc(1000)
acc.deposite(500)
acc.withdraw(300)


# 3 Create a Student class with a method to calculate average marks.

class Student:
    def __init__(self, marks):
        self.marks = marks

    def average(self):
        return sum(self.marks) / len(self.marks)

s = Student([80, 90, 70])
print(s.average())




# 4 Create a Rectangle class with methods to find area and perimeter.

class Rectangle:
    def __init__(self, l, w):
        self.l = l
        self.w = w

    def area(self):
        return self.l * self.w

    def perimeter(self):
        return 2 * (self.l + self.w)
    
r = Rectangle(10, 5)
print(r.area())
print(r.perimeter())




# 5 Create an Employee class that displays salary details.

class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def display(self):
        print("Name:", self.name)
        print("Salary:", self.salary)

e = Employee("Darshan", 30000)
e.display()



#  6 Create a Book class to store title, author, and price, and display details.

class Book:
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price

    def display(self):
        print(self.title, self.author, self.price)

b = Book("Python", "Darshan", 500)
b.display()


# 7 Create a Circle class to find area and circumference.

class Circle:
    def __init__(self, r):
        self.r = r

    def area(self):
        return 3.14 * self.r * self.r

    def circumference(self):
        return 2 * 3.14 * self.r
c = Circle(7)
print("Area:", c.area())
print("Circumference:", c.circumference())


#8  Create a Laptop class with a method to apply discounts on price.

class Laptop:
    def __init__(self, price):
        self.price = price

    def discount(self, percent):
        self.price -= self.price * percent / 100
        print("Final price:", self.price)
 
l = Laptop(50000)
l.discount(10)

# 9 Create a Flight class with seat booking functionality.

class Flight:
    def __init__(self, seats):
        self.seats = seats

    def book_seat(self):
        if self.seats > 0:
            self.seats -= 1
            print("Seat booked")
        else:
            print("No seats available")

f = Flight(2)
f.book_seat()
f.book_seat()
f.book_seat()


 # 10 Create a Shop class with a method to add and list products.

class Shop:
    def __init__(self):
        self.products = []

    def add(self, item):
        self.products.append(item)

    def show(self):
        print(self.products)
s = Shop()
s.add("Pen")
s.add("Book")
s.show()
