Use producttest_redo;

#------------------------------ TP05 ---------------------------


		#Ex1:
Select product_t.* From product_t JOIN order_line_t
		JOIN customer_t JOIN order_t
		ON product_t.ID = order_line_t.product_ID
        AND customer_t.ID = order_t.customer_ID
        AND order_t.ID = order_line_t.order_ID
		Where name = "John Doe";
		#Ex2:
Select Distinct customer_t.* From product_t JOIN order_line_t
		JOIN customer_t JOIN order_t
		ON product_t.ID = order_line_t.product_ID
        AND customer_t.ID = order_t.customer_ID
        AND order_t.ID = order_line_t.order_ID 
        Where name !="John Doe" AND product_t.ID
        IN (select product_t.ID From product_t JOIN order_line_t
		JOIN customer_t JOIN order_t
		ON product_t.ID = order_line_t.product_ID
        AND customer_t.ID = order_t.customer_ID
        AND order_t.ID = order_line_t.order_ID 
        Where name ="John Doe" );
        #Ex3:
Select Distinct customer_t.* From customer_t JOIN product_t
		JOIN order_line_t JOIN order_t
        ON product_t.ID = order_line_t.product_ID
        AND customer_t.ID = order_t.customer_ID
        AND order_t.ID = order_line_t.order_ID
        Where finish = "Natural Ash";
		#Ex4:
Select * From order_line_t Having order_ID 
		IN (Select order_ID From order_line_t 
        Group By order_ID 
        Having count(order_ID)>1);
		#Ex5:
Select * From order_t 
		Having ID IN
        (Select ID From order_t 
        Group By customer_ID 
        Having count(customer_ID)>1);
		#Ex6:
Select customer_t.*, count(customer_ID) as Total_Order From order_t JOIN customer_t 
		ON customer_t.ID = order_t.customer_ID 
        Group By customer_t.ID;
		#Ex7: 
Select sum(quantity) as Total_Unit From product_t JOIN order_line_t
		JOIN order_t
		ON product_t.ID = order_line_t.product_ID
        AND order_t.ID = order_line_t.order_ID
        Where description = "Office Chair"
        AND order_t.order_date LIKE "2004-04-%";
        #Ex8:
Select customer_t.*,sum(quantity*standard_price) as Total_cost From customer_t JOIN order_t 
		JOIN order_line_t JOIN product_t
        ON customer_t.ID = order_t.customer_ID
        AND order_t.ID = order_line_t.order_ID
        AND product_t.ID = order_line_t.product_ID
        Where customer_t.name = "John Doe" Group By customer_t.ID ;
        #Ex9:
Select customer_t.*,sum(quantity*standard_price) as Total_cost From customer_t JOIN order_t 
		JOIN order_line_t JOIN product_t
        ON customer_t.ID = order_t.customer_ID
        AND order_t.ID = order_line_t.order_ID
        AND product_t.ID = order_line_t.product_ID
        Where customer_t.name = "John Doe";
Select AVG(t.Total_cost) From
		(Select sum(quantity*standard_price) as Total_cost 
        From customer_t JOIN order_t 
		JOIN order_line_t JOIN product_t
        ON customer_t.ID = order_t.customer_ID
        AND order_t.ID = order_line_t.order_ID
        AND product_t.ID = order_line_t.product_ID
        Where customer_t.name = "John Doe"
        Group By order_t.ID) as t;


