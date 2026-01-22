 CREATE TABLE students(
  student_id INT,
  name VARCHAR(50),
  department VARCHAR(30),
  year INT,
  marks INT
)

INSERT INTO students (student_id, name, department, year, marks)
VALUES
(3, 'Harsh',   'Computer Science', 2, 78),
(4, 'Vedant',  'Information Tech',  1, 82),
(5, 'Mantra',  'Computer Science', 3, 88),
(6, 'Jimil',   'Electronics', 2, 75)




select * from students

SELECT name, department
FROM students;


SELECT *
FROM students
WHERE marks > 75;


SELECT *
FROM students
WHERE department = 'Computer Science';


SELECT *
FROM students
ORDER BY marks DESC;


SELECT TOP 3 *
FROM students
ORDER BY marks DESC;
