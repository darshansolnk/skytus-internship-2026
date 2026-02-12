CREATE DATABASE mess_db;
USE mess_db;

-- Members
CREATE TABLE Members (
    member_id INT PRIMARY KEY,
    name VARCHAR(50),
    room_no VARCHAR(10),
    phone VARCHAR(10),
);

-- Staff
CREATE TABLE Staff (
    staff_id INT PRIMARY KEY,
    name VARCHAR(50),
    role VARCHAR(30)
);


-- Meals
CREATE TABLE Meals (
    meal_id INT PRIMARY KEY,
    meal_type VARCHAR(20),
    meal_date DATE,
    prepared_by INT,
    FOREIGN KEY (prepared_by) REFERENCES Staff(staff_id)
);


-- Menu
CREATE TABLE Menu (
    menu_id INT PRIMARY KEY,
    meal_id INT,
    item_name VARCHAR(50),
    FOREIGN KEY (meal_id) REFERENCES Meals(meal_id)
);

-- Payments
CREATE TABLE Payments (
    payment_id INT PRIMARY KEY,
    member_id INT,
    amount DECIMAL(8,2),
    payment_date DATE,
    FOREIGN KEY (member_id) REFERENCES Members(member_id)
);



INSERT INTO Members VALUES
(1,'Darshan','A101','9876543210'),
(2,'Harsh','A102','9876543211'),
(3,'Dev','B201','9876543212'),
(4,'Mantra','B202','9876543213'),
(5,'Jimil','C301','9876543214');


INSERT INTO Staff VALUES
(1,'Ranjan','Cook'),
(2,'Suresh','Helper'),
(3,'Mahesh','Manager'),
(4,'Dinesh','Cook'),
(5,'Lokesh','Cleaner');


INSERT INTO Meals VALUES
(1,'Breakfast','2026-02-10',1),
(2,'Lunch','2026-02-10',4),
(3,'Dinner','2026-02-10',1),
(4,'Breakfast','2026-02-11',4),
(5,'Lunch','2026-02-11',1);


INSERT INTO Menu VALUES
(1,1,'Poha'),
(2,2,'Rice'),
(3,3,'Chapati'),
(4,4,'Upma'),
(5,5,'Dal');


INSERT INTO Payments VALUES
(1,1,2000,'2026-02-01'),
(2,2,2000,'2026-02-01'),
(3,3,1800,'2026-02-02'),
(4,4,2000,'2026-02-02'),
(5,5,1500,'2026-02-03');



-- 1.
 SELECT * FROM Members;

-- 2. 
SELECT name, room_no FROM Members;

-- 3.
 SELECT * FROM Payments WHERE amount > 1800;

-- 4. 
SELECT * FROM Meals WHERE meal_type='Lunch';

-- 5. 
SELECT COUNT(*) FROM Members;

-- 6. Member payments details
SELECT m.name, p.amount
FROM Members m
JOIN Payments p ON m.member_id=p.member_id;

-- 7. Meal with staff name
SELECT meal_type, name
FROM Meals
JOIN Staff ON prepared_by=staff_id;

-- 8. Menu items with meal type

SELECT meal_type, item_name
FROM Meals
JOIN Menu ON Meals.meal_id=Menu.meal_id;

-- 9. Total payment collected

SELECT SUM(amount) FROM Payments;

-- 10. Average payment

SELECT AVG(amount) FROM Payments;

-- 11. Payments per member

SELECT member_id, SUM(amount)
FROM Payments
GROUP BY member_id;

-- 12. Members who paid above average

SELECT name
FROM Members
WHERE member_id IN (
    SELECT member_id FROM Payments
    WHERE amount > (SELECT AVG(amount) FROM Payments)
);

-- 13. Staff who prepared breakfast

SELECT DISTINCT s.name
FROM Staff s
JOIN Meals m ON s.staff_id=m.prepared_by
WHERE meal_type='Breakfast';

-- 14. Latest meal served

SELECT * FROM Meals
ORDER BY meal_date DESC;

-- 15. Members without payments

SELECT name
FROM Members
WHERE member_id NOT IN (
    SELECT member_id FROM Payments
);



-- Optimize at least 3 queries

CREATE INDEX idx_member_payment
ON Payments(member_id);

CREATE INDEX idx_meal_staff
ON Meals(prepared_by);

CREATE INDEX idx_menu_meal
ON Menu(meal_id);


SELECT DISTINCT m.name
FROM Members m
JOIN Payments p
ON m.member_id = p.member_id;

SELECT meal_type, name
FROM Meals
JOIN Staff
ON prepared_by = staff_id;

SELECT *
FROM Payments
WHERE amount > 1800;
