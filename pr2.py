#1 calculate the remainder of two numbers
n1=20
n2=5
sum=n1%n2
print("remainder",sum)


# 2 check if number is even or odd

n1=12
if(n1%2==0):
    print("number is even",n1)

else:
    print("the number is odd",n1)


# 3 compare the two number and the print the largest number

n1=50
n2=40
if(n1>=n2):
    print("largest numbers is :",n1)
else:
    print("largest number is :",n2)

# 4 write the program to calculate the square and cube of number

n1=int(input("enter the number"))
sq=n1*n1
cb=n1*n1*n1
print("square of number ",sq)
print("cube of number ",cb)

# 5 check if two entered numbers are equal
n1=int(input("enter no one"))
n2=int(input("enter no two"))
if(n1==n2):
    print("numbers are equal",n1,n2)
else:
    print("numbers are not equal",n1,n2)

# 6 Take two numbers and print True if both are positive , else false

n1=int(input("enter no 1:"))
n2=int(input("enter no 2:"))
print(n1>0 and n2>0)

# 7  Write a program to convert float to integer
n1=5.55
print(type(n1))
n1=int(n1)
print(type(n1))

# 8 Take a number as string, convert into integer and multiply by 10
nm=input("enter no")
print(type(nm),nm)
nm=int(nm)
print(type(nm),nm)
nm2=nm*10
print(nm2)

# 9 Write a program that uses and & or operator to check multiple condition

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

if (a > 0 and b > 0) or (a == 0 or b == 0):
    print("Condition is satisfied")
else:
    print("Condition is not satisfied")


# 10 Divide two numbers and print the quotient and remainder separately

n1=10
n2=4
qu=n1/n2
rmd=n1%n2
print("quotient:",qu)
print("remainder:",rmd)