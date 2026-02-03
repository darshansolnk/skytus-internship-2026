create database company_db;
use company_db;

CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    salary INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);


INSERT INTO departments VALUES
(1, 'IT'),
(2, 'HR'),
(3, 'Finance'),
(4, 'Sales');


INSERT INTO employees VALUES
(101, 'Darshan', 1, 60000),
(102, 'Harsh', 1, 52000),
(103, 'Vedant', 2, 45000),
(104, 'Mantra', 3, 70000),
(105, 'Jimil', 3, 48000);


select * from departments

select * from employees



-- 🔹 Tasks

-- Display employee name with department name

SELECT e.emp_name, d.dept_name
FROM employees e
JOIN departments d
ON e.dept_id = d.dept_id;



-- Display employees earning more than 50,000

SELECT emp_name, salary
FROM employees
WHERE salary > 50000;


-- Display department-wise total salary

SELECT d.dept_name, SUM(e.salary) AS total_salary
FROM employees e
JOIN departments d
ON e.dept_id = d.dept_id
GROUP BY d.dept_name;


-- Display departments with more than 2 employees

SELECT d.dept_name, COUNT(e.emp_id) AS total_employees
FROM employees e
JOIN departments d
ON e.dept_id = d.dept_id
GROUP BY d.dept_name
HAVING COUNT(e.emp_id) >= 2;


-- Display employees without a department

SELECT emp_name, salary
FROM employees
WHERE dept_id IS NULL;
