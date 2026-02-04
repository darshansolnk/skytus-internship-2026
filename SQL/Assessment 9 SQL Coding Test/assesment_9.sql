  use company_db;
--   1 Write query to find Nth highest salary

  SELECT DISTINCT salary
FROM employees e1
WHERE 2 = (
    SELECT COUNT(DISTINCT salary)
    FROM employees e2
    WHERE e2.salary > e1.salary
);


-- 2 Remove duplicate records

WITH CTE AS (
    SELECT *,
           ROW_NUMBER() OVER (
               PARTITION BY emp_name, dept_id, salary
               ORDER BY emp_id
           ) AS rn
    FROM employees
)
DELETE FROM CTE WHERE rn > 1;


-- 3 Find records common in two tables

SELECT dept_id
FROM employees
INTERSECT
SELECT dept_id
FROM departments;



-- 4 Find employees hired in last 6 months

SELECT *
FROM employees
WHERE hire_date >= DATEADD(MONTH, -6, GETDATE());


-- 5 Find continuous duplicate values

SELECT salary
FROM (
    SELECT salary,
           LAG(salary) OVER (ORDER BY emp_id) AS prev_salary
    FROM employees
) t
WHERE salary = prev_salary;

