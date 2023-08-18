CREATE DATABASE finalexams1;
USE finalexams1;

CREATE TABLE IF NOT EXISTS Categories(
    id int NOT NULL PRIMARY KEY auto_increment,
    Name VARCHAR(50)
);
CREATE TABLE IF NOT EXISTS Products(
    id int NOT NULL PRIMARY KEY auto_increment,
    Name VARCHAR(50),
    Cost_Price double,
    Sell_Price double,
    Unit int,
    Category_id int,FOREIGN KEY (Category_id) REFERENCES categories(id)
);
CREATE TABLE IF NOT EXISTS Stocks(
    id int NOT NULL PRIMARY KEY auto_increment,
    Quantity int,
    Unit int,
    Product_id int,FOREIGN KEY(Product_id) REFERENCES Products(id)
);
CREATE TABLE IF NOT EXISTS users(
    id int NOT NULL PRIMARY KEY auto_increment,
    Name VARCHAR(50),
    Password VARCHAR(50),
    Confirm_Password VARCHAR(50),
    Profile VARCHAR(100)
);
CREATE TABLE IF NOT EXISTS Customers(
    id int NOT NULL PRIMARY KEY auto_increment,
    Name VARCHAR(50),
    Phone VARCHAR(50),
    Address VARCHAR(100)
);
CREATE TABLE IF NOT EXISTS Suppliers(
    id int NOT NULL PRIMARY KEY auto_increment,
    Name VARCHAR(50),
    Phone VARCHAR(50),
    Address VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Sales(
    id int NOT NULL PRIMARY KEY auto_increment,
    Total_Price double,
    Customer_id int, FOREIGN KEY (Customer_id) REFERENCES Customers(id),
    User_id int, FOREIGN KEY (User_id) REFERENCES users(id)
);
CREATE TABLE IF NOT EXISTS Sale_Detail(
    id INT NOT NULL PRIMARY KEY auto_increment,
    Quantity int,
    Total_Price DOUBLE,
    Date_Sale DATE,
    Product_id int, FOREIGN KEY(Product_id) REFERENCES Products(id),
    Sale_id int, FOREIGN KEY (Sale_id) REFERENCES Sales(id)
);

CREATE TABLE IF NOT EXISTS Purchases(
    id int NOT NULL PRIMARY KEY auto_increment,
    Total_Price DOUBLE,
    Supplier_id int REFERENCES Suppliers(id),
    User_id int, FOREIGN KEY (User_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS Purchase_Detail(
    id int NOT NULL PRIMARY KEY auto_increment,
    Quantity int,
    Total_Price double,
    DatePurchase DATE,
    Product_id int, FOREIGN KEY (Product_id) REFERENCES Products(id),
    Purchase_id int, FOREIGN KEY (Purchase_id) REFERENCES Purchases(id)
);

INSERT INTO Categories(Name) VALUES ('Beverage');
INSERT INTO Categories(Name) VALUES ('Snack');
INSERT INTO Categories(Name) VALUES ('Skin Care');

INSERT INTO users(Name,Password,Confirm_Password,Profile) VALUES ('Nara','123456','123456','profile.jpg');
INSERT INTO Products(Name,Cost_Price,Sell_Price,Unit,Category_id) VALUES ('Coca',100,200,5,1);
INSERT INTO Stocks(Quantity,Unit,Product_id) VALUES(25,20,2);

INSERT INTO Suppliers(Name,Phone,Address) VALUES ('Nara','016838248','Sensok,Kmounh,PP');

INSERT INTO Purchases(Total_Price,Supplier_id,User_id) VALUES (200,1,1);

INSERT INTO Purchase_Detail(Quantity,Total_Price,DatePurchase,Product_id,Purchase_id) VALUES(5,100,'2022-06-19',1,1);

UPDATE Stocks SET Quantity=10 Unit=10 Product_id=1 WHERE id=3;