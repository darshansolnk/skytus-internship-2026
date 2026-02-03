assisment 2
-- Count total number of students

select count(student_id) from students 

-- Find average marks of students

select AVG(marks) from students

-- Find highest and lowest marks

select 
    MAX(marks) AS highest,
    MIN(marks) AS lowest
from students;


-- Find department-wise average marks

select department, AVG(marks) AS avg_marks
from students
GROUP BY department;


-- Display departments where average marks > 70


SELECT department, AVG(marks) AS avg_marks
FROM students
GROUP BY department
HAVING AVG(marks) > 70;
