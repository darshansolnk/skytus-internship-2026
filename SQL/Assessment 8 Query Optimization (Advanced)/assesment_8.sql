--   🔹 Tasks

-- 1 Add index to improve search on orders.customer_id

CREATE INDEX idx_orders_customer
ON orders(customer_id);




-- 2 Use EXPLAIN to analyze query

SET SHOWPLAN_ALL ON;
GO

SELECT *
FROM orders
WHERE customer_id = 1;
GO

SET SHOWPLAN_ALL OFF;





-- 3 Optimize a slow join query

SELECT c.name, o.amount
FROM customers c
JOIN orders o 
ON c.customer_id = o.customer_id;



-- 4 Explain when index should not be used

--Do NOT use index when:

1 Table is very small (few rows)

2 Column has few unique values (e.g. gender, status)

3 Column is frequently updated (index slows writes)

4 When you always select most rows

5 When using functions in WHERE: