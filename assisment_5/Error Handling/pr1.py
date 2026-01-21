#  1 Write a program to handle division by zero error.
try:
    a=int(input("enter first number:"))
    b=int(input("enter second number:"))
    print(a/b)
except ZeroDivisionError:
    print("can't divide by zero")

# 2 Write a program to handle invalid integer input.
try:
    n1=int(input("enter a number"))
    print("your number",n1)
except ValueError:
    print("Invalid number ! ")
# 3 Write a program to open a file and handle the “file not found” error.
try:
   f=open("test.txt","r")
   print(f.read())
except FileNotFoundError:
   print("file not found")

# 4 Write a program to demonstrate multiple exception blocks.
try:
    a=int(input("enter a number"))
    b=int(input("enter a number"))
    print(a/b)
except ZeroDivisionError:
    print("Division by zero")
except ValueError:
    print("Invalid input")

# 5 Write a program to use finally for resource cleanup.
try:
    f=open("test.txt","r")
    print(f.read())
except FileNotFoundError:
    print("File not found")
finally:
    print("program finished")

# 6 Write a program to create a custom exception for invalid age (<18).
class InvalidAgeError(Exception):
    pass
try:
    age=int(input("enter your age:"))
    if age<18:
        raise InvalidAgeError
    print("valid age")
except InvalidAgeError:
    print("Age must be 18 or above")

# 7 Write a program to handle IndexError when accessing a list.
try:
    lst=[1,2,3]
    print(lst[5])
except IndexError:
    print("index out of range")

# 8 Write a program that takes two numbers and handles all possible errors.
try:
    a=int(input("Enter first number:"))
    b=int(input("Enter Second number"))
    print(a/b)
except ZeroDivisionError:
    print("cant devide by zero")
except ValueError:
    print("Invalid input")


# 9 Write a program to log errors to a file instead of printing them.
try:
    a=int(input("enter the number"))
    b=int(input("enter the number"))
    print(a/b)
except Exception as e:
    f=open("error.log","a")
    f.write(str(e)+"\n")
    f.close
# 10 Write a program that validates an email format and raises an exception for invalid ones.

try:
    email=input("enter email")
    if "@" not in email or "." not in email:
        raise ValueError
    print("valid email")
except ValueError:
    print("Invalid email format")