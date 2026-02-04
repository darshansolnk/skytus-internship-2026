--   📌 Project: E-Commerce Database

-- Tables

-- customers(customer_id, name, city)
-- orders(order_id, customer_id, order_date, amount)
-- products(product_id, product_name, price)
-- order_items(order_id, product_id, quantity)

create database E_Commerce;
use E_commerce;

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    amount INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price INT
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
select * from customers;

INSERT INTO customers VALUES
(1, 'Darshan', 'Ahmedabad'),
(2, 'Harsh', 'Surat'),
(3, 'Vedant', 'Rajkot'),
(4, 'Mantra', 'Vadodara'),
(5, 'Jimil', 'Ahmedabad');


INSERT INTO orders VALUES
(101, 1, '2025-01-10', 12000),
(102, 2, '2025-01-15', 18000),
(103, 3, '2025-02-05', 22000),
(104, 1, '2025-02-20', 15000),
(105, 4, '2025-03-01', 30000);

INSERT INTO products VALUES
(1, 'Laptop', 50000),
(2, 'Mobile', 20000),
(3, 'Headphones', 2000),
(4, 'Keyboard', 1500),
(5, 'Mouse', 800);

INSERT INTO order_items VALUES
(101, 2, 1),
(101, 3, 2),
(102, 1, 1),
(103, 2, 1),
(104, 5, 3),
(105, 1, 1),
(105, 4, 2);


-- 🔹 Tasks

-- 1 Total orders per customer


SELECT c.name, COUNT(o.order_id) AS total_orders
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.name;

-- 2 Customers who never placed an order

SELECT name
FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);

-- 3 Highest selling product

SELECT p.product_name, SUM(oi.quantity) AS total_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
GROUP BY p.product_name
ORDER BY total_sold DESC

-- 4 Monthly sales report

SELECT 
    FORMAT(order_date, 'yyyy-MM') AS month,
    SUM(amount) AS total_sales
FROM orders
GROUP BY FORMAT(order_date, 'yyyy-MM');

-- 5 Customers with total purchase > ₹50,000

SELECT c.name, SUM(o.amount) AS total_purchase
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.name
HAVING SUM(o.amount) > 50000;

-- 6 Top 3 cities by revenue

SELECT TOP 3 c.city, SUM(o.amount) AS total_revenue
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.city
ORDER BY total_revenue DESC

