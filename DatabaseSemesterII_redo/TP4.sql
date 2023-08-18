Use producttest_redo;

#--------------------------------- TP04 ----------------------------------

		#Ex1:
Select c.ID, c.name,o.ID,o.order_date From customer_t as c JOIN order_t as o
		ON c.ID = o.customer_ID;
		#Ex2:
Select p.ID,p.description,Sum(o.quantity) as quantity From product_t as p JOIN order_line_t as o
		ON p.ID = o.product_ID Group By p.ID;
		#Ex3:
Select c.ID,c.name,p.ID,p.description From product_t as p JOIN customer_t as c
		JOIN order_line_t as ol JOIN order_t as o
        ON p.ID = ol.product_ID AND c.ID = o.customer_ID AND o.ID = ol.order_ID;
		#Ex4:
Select c.ID, c.name,o.ID,o.order_date From customer_t as c LEFT OUTER JOIN order_t as o
		ON c.ID = o.customer_ID;
		#Ex5:
Select * From product_t Having standard_price IN (Select MIN(standard_price) From product_t);
		#Ex6:
Select * FROM product_t 
		HAVING description IN 
        (Select description From product_t  Group by description Having count(description)>1);
        