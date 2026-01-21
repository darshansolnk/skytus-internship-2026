#  1 Write a program to read a file and display its contents.
f = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file.txt", "r")
print(f.read())
f.close()


# 2 Write a program to count the number of lines in a file.
f = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file.txt", "r")
lines=f.readlines()
print("numbers of line:",len(lines))
f.close


#3 Write a program to count how many times each word appears in a file.
f = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file.txt", "r")
text = f.read().split()

count = {}
for word in text:
    count[word] = count.get(word, 0) + 1

print(count)
f.close()



#4 Write a program to write 5 user-entered sentences to a file.
f = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file.txt", "w")
for i in range(5):
    sentnce=input("enter sentence:")
    f.write(sentnce + "\n")
    
f.close

# 5 Write a program to append a list of strings to an existing file.

data=["apple","banana","mango"]

f = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file.txt", "a")
for item in data:
    f.write(item+"\n")
f.close()


#6 Write a program to read a file and print only lines containing a specific word.
word=input("enter word to search:")
f = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file.txt", "r")

for line in f:
    if word in line:
        print(line)
f.close()


#7  Write a program to replace a specific word in a file and save changes.
f = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file.txt", "r")
text=f.read()
f.close()

text=text.replace("darshan","darsh")

f = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file.txt", "w")
f.write(text)
f.close()



#8  Write a program to merge the contents of two text files into a third file.
f1 = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file.txt", "r")
f2 = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file2.txt", "r")
f3 = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/marge.txt", "w")


f3.write(f1.read())
f3.write(f2.read())

f1.close()
f2.close()
f3.close()
#9  Write a program to read a CSV file and display its content in a formatted way.
f = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/data.csv", "r")

for line in f:
    print(line.strip().replace(",","!"))
f.close()



#10 Write a program to back up a file by copying its contents into another file.

source = open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/file.txt", "r")
backup= open("C:/Users/darsh/OneDrive/Desktop/python/skyttus/assisment_4/File Handling/backup.txt", "w")

backup.write(source.read())

source.close()
backup.close()