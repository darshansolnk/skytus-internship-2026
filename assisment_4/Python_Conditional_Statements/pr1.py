# 1 Check if a person is eligible to vote (age ≥ 18).
age = int(input("Enter age: "))

if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")
#2 Grade calculator based on marks: 90+ = A, 80+ = B, else C.
marks = int(input("Enter marks: "))

if marks >= 90:
    print("Grade A")
elif marks >= 80:
    print("Grade B")
else:
    print("Grade C")
#3 Simulate a traffic light: Red = Stop, Yellow = Wait, Green = Go.
color = input("Enter color (red/yellow/green): ")

if color == "red":
    print("Stop")
elif color == "yellow":
    print("Wait")
elif color == "green":
    print("Go")
else:
    print("Invalid color")
#4 ATM withdrawal check: sufficient balance or not.
balance = int(input("Enter balance: "))
amount = int(input("Enter withdrawal amount: "))

if amount <= balance:
    print("Withdrawal successful")
else:
    print("Insufficient balance")
#5 Check if a number is positive, negative, or zero.
num = int(input("Enter a number: "))

if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")
#6 Check if a number lies within a given range.

num = int(input("Enter number: "))

if num >= 10 and num <= 50:
    print("Number is in range")
else:
    print("Number is not in range")

#7 Username & password verification.
username = input("Enter username: ")
password = input("Enter password: ")

if username == "Darshan" and password == "1234":
    print("Login successful")
else:
    print("Invalid username or password")
#8 Electricity bill calculator based on units consumed.
units = int(input("Enter units: "))

if units <= 100:
    bill = units * 5
else:
    bill = units * 8

print("Electricity bill:", bill)


#9Simple calculator (add, subtract, multiply, divide).
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
op = input("Enter operator (+ - * /): ")

if op == "+":
    print(a + b)
elif op == "-":
    print(a - b)
elif op == "*":
    print(a * b)
elif op == "/":
    print(a / b)
else:
    print("Invalid operator")

#10Check type of triangle (equilateral, isosceles, scalene).
a = int(input("Enter side 1: "))
b = int(input("Enter side 2: "))
c = int(input("Enter side 3: "))

if a == b == c:
    print("Equilateral triangle")
elif a == b or b == c or a == c:
    print("Isosceles triangle")
else:
    print("Scalene triangle")
