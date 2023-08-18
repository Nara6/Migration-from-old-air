#TP Noté Group C
#Name: YIN SOKNARA
#ID: e20191298
USE estate_agency;

#1. List address and clientID of client named Adam.
SELECT clientaddress, clientID FROM client 
		WHERE name = "Adam";
#2. List information of rent that costs more than 1000.
SELECT * FROM rent 
		WHERE price>1000;
#3. List information of rent that started in 2018.
SELECT * FROM rent 
		WHERE rent_date 
		LIKE "2018-%";
#4. List information of properties rented by client C1.
SELECT p.* FROM property AS p JOIN rent AS r
		ON p.propertyID = r.propertyID
        WHERE r.clientID = "C1";
#5. List information of property rented by Adam.
SELECT p.* FROM property AS p JOIN rent AS r JOIN client AS c
		ON p.propertyID = r.propertyID AND c.clientID = r.clientID
        WHERE c.name = "Adam";
#6. List information of client who has rented any property of type house.
SELECT c.*, p.type  FROM property AS p JOIN rent AS r JOIN client AS c
		ON p.propertyID = r.propertyID AND c.clientID = r.clientID
        ORDER BY p.type;
#7. List information of client who has never rented any property.
SELECT * FROM client 
		WHERE clientID 
        NOT IN (SELECT clientID FROM rent);
#8. Show the total number of property for each type of property, for example, there are 3 flats, 2 houses and 1 apartment in the database.
SELECT type, count(type) AS Total_number_type FROM property
		GROUP BY type ORDER BY Total_number_type DESC;
#9. Knowing that client need to pay an extra 1% per day for late payment of property with id 3, calculate the total amount of payment for 1 week late.
SELECT propertyID, sum((price*0.01)*7) as Total_fee 
		FROM rent
		WHERE propertyID = 3;
#10. For each property, show the highest rent (cost) and the rent period.
SELECT propertyID,rent_date,end_date ,max(price) 
		FROM rent
		GROUP BY propertyID;
