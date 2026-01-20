# 1 print number 1 to 10 
for x in range(1,11):
    print(x)

# 2 display multiplication table for a given number
n1=int(input("enter a number:"))
for x in range(1,11):
    print(n1,"*",x,"=",n1*x)

# 3 find factorial of number
n1=int(input("enter a number:"))
fact=1
for i in range(1,n1+1 ):
    fact=fact*i
print("factoriall is :",fact)

# 4 Generate the first fibonacci numbers
n1= int(input("enter N:"))
a=0
b=1
for i in range(n1):
    print(a)
    a = a + b #1=1+1  #2


# 5 check the number is prime 
n1=int(input("enter the number:"))

if n1<=1:
    print("not prime")
else:
    for i in range(2,n1):
        if n1%i==0:
            print("not prime")
            break
    else:
            print("prime")

# 6 reverse the number (123 > 321)
n1=int(input("enter the number"))
rev=0
while n1>0:
    rev=rev*10+n1%10
    n1=n1//10
print("reverse:",rev)


# 7 counts digit in number
n1= int(input("Enter a number: "))
c = 0

while n1 > 0:
    c = c + 1
    n1 = n1 // 10  

print("Number of digits:", c)

# 8 find sum of even number in between 1 to 100
total=0
for i in range(1,101):
    if i % 2==0:
        total=total+i
print("sum of :",total)

# 9 print the pyramid pattern
for i in range(1, 5 + 1):
    print(" " * (5 - i) + "* " * i)
#10 find all divisors of number
n1=int(input("enter a number "))

for i in range(1,n1+1):
    if n1%i==0:
        print(i)
  

