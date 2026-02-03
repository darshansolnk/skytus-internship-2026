--   🔹 Tasks

-- Create users table with:

-- Primary key

-- Unique email

-- Not null password

-- Add foreign key between orders and users

-- Create index on email column

-- Create view to display user order summary





CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    order_amount INT,
    order_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE INDEX idx_users_email
ON users(email);


CREATE VIEW user_order_summary AS
SELECT 
    u.user_id,
    u.name,
    COUNT(o.order_id) AS total_orders,
    SUM(o.order_amount) AS total_spent
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
GROUP BY u.user_id, u.name;

SELECT * FROM user_order_summary;

