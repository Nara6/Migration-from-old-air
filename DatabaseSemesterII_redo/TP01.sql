CREATE DATABASE SAILOR_REDO;
USE SAILOR_REDO;
CREATE TABLE Sailors_redo(
		sid INT PRIMARY KEY,
        sname VARCHAR(25),
        rating INT,
        age INT
);
CREATE TABLE Boats_redo(
		bid INT PRIMARY KEY,
        bname VARCHAR(25),
        color VARCHAR(25)
);
CREATE TABLE Reserves_redo(
		sid INT,
        bid INT,
        day DATE,
        PRIMARY KEY (sid,bid,day),
        FOREIGN KEY(sid) REFERENCES Sailors_redo(sid), FOREIGN KEY (bid) REFERENCES Boats_redo(bid)
)ENGINE = INNODB;
ALTER TABLE Sailors_redo MODIFY age DECIMAL(3,1);
ALTER TABLE Sailors_redo ADD CHECK (rating>=0 && rating<=10);
#ALTER TABLE Sailors_redo ADD CHECK (age>17 && age<49);
#FOR TP1 SKIP ON INSERT DATA.
INSERT INTO Sailors_redo VALUES  ( 22,"Dustin",7,45.0),
													( 29,"Brutus",1,33.0),
                                                    ( 31,"Lubber",8,55.5),
                                                    ( 32,"Andy",10,25.5),
                                                    ( 58,"Rusty",10,35.0),
                                                    ( 64,"Horatio",7,35.0),
                                                    ( 71,"Zorba",10,16.0),
                                                    ( 74,"Horatio",9,35.0),
                                                    ( 85,"Art",3,25.5),
                                                    ( 95,"Bob",3,64.5);
INSERT INTO Boats_redo VALUES  (101,"Interlake","blue"),
													(102,"Interlake","red"),
                                                    (103,"Clipper","green"),
                                                    (104,"Marine","red");
INSERT INTO Reserves_redo VALUES (22,101,"1998-10-10"),
														(22,102,"1998-10-10"),
                                                        (22,103,"1998-10-10"),
                                                        (22,104,"1998-8-10"),
                                                        (31,102,"1998-10-11"),
                                                        (31,103,"1998-6-11"),
                                                        (31,104,"1998-12-11"),
                                                        (64,101,"1998-5-9"),
                                                        (64,102,"1998-8-9"),
                                                        (74,103,"1998-8-9");

#------------------------------------------------- TP02----------------------------------------------------
    #Ex1
INSERT INTO Sailors VALUES (22,"Dara",8,25);
INSERT INTO Sailors VALUES (null,"Dara",8,25);
INSERT INTO Sailors VALUES ("Dara",22,8,25);
INSERT INTO Sailors VALUES ("Sok",22,7,25);
INSERT INTO Reserves VALUES (74,105,"1998-08-09");
INSERT INTO Reserves VALUES (74,104,19980809);

	#Ex2
SELECT sname FROM Sailors_redo WHERE rating>7;
	#EX3
SELECT sname FROM Sailors_redo WHERE (rating>7 AND age<=50);
	#Ex4
SELECT * FROM Sailors_redo WHERE sname = "Horatio";
	#EX5
SELECT * FROM Sailors_redo WHERE sname LIKE "a%";
	#Ex6
SELECT * FROM Sailors_redo WHERE sname LIKE "a%y";
	#Ex7
SELECT * FROM Boats_redo WHERE color = "red";
	#Ex8
SELECT * FROM Boats_redo b JOIN Reserves_redo r
	ON b.bid = r.bid WHERE day LIKE "1998-10-%";
    #Ex9
SELECT sname FROM Sailors_redo s NATURAL JOIN Reserves_redo r
	WHERE b.bid = 103;
SELECT DISTINCT sname FROM Sailors_redo s NATURAL JOIN Reserves_redo r NATURAL JOIN Boats_redo b
	WHERE b.color = "red";
SELECT * FROM Sailors_redo s NATURAL JOIN Reserves_redo r NATURAL JOIN Boats_redo b;

