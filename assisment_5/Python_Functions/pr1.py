#  1 Function to check if a number is prime.
def is_prime(n):
    if n<=1:
        return False
    for i in range(2,n):
        if n % i ==0:
            return False
        return True
result=is_prime(11)
print(result)

# 2 Function to reverse a string.
def reverse_string(s):
    return s[::-1]
re=reverse_string("darshan")
print(re)

# 3 Function to find factorial.
def factorial(n):
    fact=1
    for i in range(1,n+1):
        fact=fact*i
    return fact 
re=factorial(5)
print(re)

#  4 Function to calculate simple interest.
def simple_interest(p,r,t):
    return(p*r*t)/100
r=simple_interest(10000,5,1) 
print(r)

# 5 Function to check if a word is palindrome.
def is_palindrome(word):
    return word==word[::-1]
r=is_palindrome("dad")
print(r)

# 6 Function to count vowels in a string.
def count_vowels(s):
    count = 0
    for ch in s:
        if ch in "aeiouAEIOU":
            count=count+1
    return count
r=count_vowels("aeiou")
print(r)

# 7 Function to merge two lists.
def merge_list(lsit1,list2):
    return list1+list2


#  8 Function to find GCD of two numbers.
def gcd(a,b):
    while b!=0:
        a,b=b,a%b
    return a
r=gcd(12,28)
print(r)

# 9 Function to find area of rectangle.
def area_rectangle(len,wid):
    return len*wid
r=area_rectangle(5,2)
print(r)


# 10 Function to check Armstrong number.

def armstrong(n):
    temp=n
    sum =0
    digits=len(str(n))

    while temp>0:
        digit=temp%10
        sum+=digit**digits
        temp//=10
    return sum==n
r=armstrong(1634)
print(r)