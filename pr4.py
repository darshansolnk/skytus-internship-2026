# 1. Create a tuple with 5 numbers
numbers = (10, 20, 30, 40, 50)

# 2. Access the third element
print("Third element:", numbers[2])

# 3. Unpack a tuple into variables
a, b, c, d, e = numbers
print("Unpacked values:", a, b, c, d, e)

# 4. Create a set of 5 fruits
fruits = {"apple", "banana", "mango", "orange", "grapes"}

# 5. Add a new fruit
fruits.add("pineapple")
print("After adding fruit:", fruits)

# 6. Remove an element from a set
fruits.remove("banana")
print("After removing fruit:", fruits)

# 7. Find union of two sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print("Union:", set1.union(set2))

# 8. Find intersection of two sets
print("Intersection:", set1.intersection(set2))

# 9. Check if one set is subset of another
print("Is set1 subset of set2?", set1.issubset(set2))

# 10. Convert list with duplicates into set
dup_list = [1, 2, 2, 3, 4, 4, 5]
unique_set = set(dup_list)
print("Set without duplicates:", unique_set)

# -----------------------------------------------------------------------------------------------------------------------------#

# 1. Create a dictionary of student names and marks
students = {"Henil": 85, "Darshan": 92, "Parth": 95}

# 2. Add a new key-value pair
students["Dev"] = 90
print("After adding student:", students)

# 3. Delete a key-value pair
del students["Darshan"]
print("After deleting student:", students)

# 4. Merge two dictionaries
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
merged_dict = dict1 | dict2
print("Merged dictionary:", merged_dict)

# 5. Check if a key exists
key = "maitri"
print("Key exists?" , key in students)

# 6. Count word frequency in a string
text = "python is easy and python is powerful"
words = text.split()
word_count = {}

for word in words:
    word_count[word] = word_count.get(word, 0) + 1

print("Word frequency:", word_count)

# 7. Find key with maximum value
max_key = max(students, key=students.get)
print("Student with highest marks:", max_key)

# 8. Reverse keys and values
reversed_dict = {value: key for key, value in students.items()}
print("Reversed dictionary:", reversed_dict)

# 9. Update value for a specific key
students["Parth"] = 95
print("After updating marks:", students)

# 10. Convert list of tuples into dictionary
tuple_list = [("x", 10), ("y", 20), ("z", 30)]
converted_dict = dict(tuple_list)
print("Dictionary from tuples:", converted_dict)