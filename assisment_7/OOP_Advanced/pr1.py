#   1 Create a base class Animal and subclasses Dog and Cat.

class Animal:
    def speak(self):
        print("Animal makes a sound")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

class Cat(Animal):
    def speak(self):
        print("Cat meows")

d = Dog()
c = Cat()
d.speak()
c.speak()
 
# 2 Create a class hierarchy for Vehicle → Car → ElectricCar.

class Vehicle:
    def start(self):
        print("Vehicle started")

class Car(Vehicle):
    def drive(self):
        print("Car is driving")

class ElectricCar(Car):
    def charge(self):
        print("Charging electric car")

e = ElectricCar()
e.start()
e.drive()
e.charge()



# 3 Implement method overriding in a base and derived class.

class Parent:
    def show(self):
        print("This is parent")

class Child(Parent):
    def show(self):
        print("This is child")

c = Child()
c.show()

#  4 Demonstrate multiple inheritance with two parent classes.

class A:
    def showA(self):
        print("Class A")

class B:
    def showB(self):
        print("Class B")

class C(A, B):
    pass

c = C()
c.showA()
c.showB()


# 5 Create a polymorphic function that works with different shapes.

class Shape:
    def area(self):
        pass

class Square(Shape):
    def area(self):
        print("Square area")

class Circle(Shape):
    def area(self):
        print("Circle area")

s = Square()
c = Circle()
s.area()
c.area()


# 6 Create a Bank system with SavingsAccount and CurrentAccount classes.

class BankAccount:
    def show(self):
        print("Bank Account")

class SavingsAccount(BankAccount):
    def show(self):
        print("Savings Account")

class CurrentAccount(BankAccount):
    def show(self):
        print("Current Account")

s = SavingsAccount()
c = CurrentAccount()
s.show()
c.show()


# 7 Create a class with private attributes and getter/setter methods.


class Person:
    def __init__(self):
        self.__age = 0

    def setAge(self, age):
        self.__age = age

    def getAge(self):
        return self.__age

p = Person()
p.setAge(20)
print(p.getAge())

# 8 Create a Teacher and Student class to show inheritance.

class Teacher:
    def teach(self):
        print("Teacher teaching")

class Student(Teacher):
    def study(self):
        print("Student studying")

s = Student()
s.teach()
s.study()

# 9 Create a MusicPlayer class and subclass Spotify to override play method.

class MusicPlayer:
    def play(self):
        print("Playing music")

class Spotify(MusicPlayer):
    def play(self):
        print("Playing from Spotify")

s = Spotify()
s.play()

# 10 Demonstrate the use of super() in inheritance.

class Parent:
    def show(self):
        print("Parent class")

class Child(Parent):
    def show(self):
        super().show()
        print("Child class")

c = Child()
c.show()
