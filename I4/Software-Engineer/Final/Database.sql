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
    Category_id int REFERENCES categories(id)
);
CREATE TABLE IF NOT EXISTS Stocks(
    id int NOT NULL PRIMARY KEY auto_increment,
    Quantity int,
    Unit int,
    Product_id int REFERENCES Products(id)
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
    Customer_id int REFERENCES Customers(id),
    User_id int REFERENCES users(id)
);
CREATE TABLE IF NOT EXISTS Sale_Detail(
    id INT NOT NULL PRIMARY KEY auto_increment,
    Quantity int,
    Total_Price DOUBLE,
    Date_Sale DATE,
    Product_id int REFERENCES Products(id),
    Sale_id int REFERENCES Sales(id)
);

CREATE TABLE IF NOT EXISTS Purchases(
    id int NOT NULL PRIMARY KEY auto_increment,
    Total_Price DOUBLE,
    Supplier_id int REFERENCES Suppliers(id),
    User_id int REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS Purchase_Detail(
    id int NOT NULL PRIMARY KEY auto_increment,
    Quantity int,
    Total_Price double,
    DatePurchase DATE,
    Product_id int REFERENCES Products(id),
    Purchase_id int REFERENCES Purchases(id)
);

INSERT INTO Categories(Name) VALUES ('Sting');
