score = 0

print("Quiz Game")

print("1. What is the capital of India?")
print("a) Mumbai  b) Delhi")
ans = input("Enter answer: ")

if ans == "b":
    score += 1

print("2. 5 + 5 = ?")
print("a) 10  b) 15")
ans = input("Enter answer: ")

if ans == "a":
    score += 1

print("Final Score:", score)
