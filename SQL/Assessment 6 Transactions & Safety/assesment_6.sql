use company_db;

CREATE TABLE accounts (
    acc_id INT PRIMARY KEY,
    name VARCHAR(50),
    balance INT
);

select * from accounts;

INSERT INTO accounts VALUES
(1, 'Darshan', 5000),
(2, 'Harsh', 3000);

-- Start a transaction

BEGIN TRANSACTION;


-- Insert record into accounts

INSERT INTO accounts VALUES (3, 'Vedant', 4000);

-- Rollback changes

ROLLBACK;


-- Commit valid transactions

BEGIN TRANSACTION;

INSERT INTO accounts VALUES (3, 'Vedant', 4000);

COMMIT;


-- Demonstrate transfer of money using transaction

BEGIN TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE acc_id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE acc_id = 2;

COMMIT;
