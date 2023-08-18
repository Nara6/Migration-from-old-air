
use tp11;
-- id integer, auto increment, and is a primary key. (Ex. 1)
-- country character varying max length 50 and not NULL or EMPTY. (Ex. Cambodia)

CREATE TABLE IF NOT EXISTS countries(
    id INT PRIMARY KEY auto_increment,
    country VARCHAR(50) NOT NULL
);
-- 2. cities (id, city, countryid, ucity);
CREATE TABLE IF NOT EXISTS cities(
    id INT PRIMARY KEY auto_increment,
    city VARCHAR(50) NOT NULL,
    countryid INT REFERENCES countries(id)
);
CREATE TABLE IF NOT EXISTS hotels(
    id INT PRIMARY KEY auto_increment,
    hotel VARCHAR(100) NOT NULL,
    countryid INT NULL REFERENCES countries(id),
    cityid INT NULL REFERENCES cities(id),
    star TINYINT(5) UNSIGNED,
    cost DECIMAL(12,2),
    info TEXT NULL
);
CREATE TABLE if not exists images(
    id INT primary key auto_increment,
    hotelid INT REFERENCES hotel(id),
    imagePath VARCHAR(256) NOT NULL
);
CREATE TABLE if not exists roles(
    id int primary key auto_increment,
    role VARCHAR(20) UNIQUE NOT NULL
);
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL CHECK (char_length(username) >= 3),
    UNIQUE(username),
    pass VARCHAR(80) NOT NULL CHECK (char_length(pass) >= 3),
    email VARCHAR(256) NULL,
    roleid INT NOT NULL,
    FOREIGN KEY (roleid) REFERENCES roles(id),
    discount TINYINT UNSIGNED NOT NULL CHECK (discount >= 0 AND discount <= 100),
    avatar VARCHAR(256) NULL
);
INSERT INTO countries(country) VALUES("Thai");
INSERT INTO cities(city,countryid) VALUES("Phnom Penh",1);
INSERT INTO hotels(hotel,countryid,cityid,star,cost,info) VALUES("Raffles Hotel Le Royal",1,1,5,270.99,"Raffles Hotel Le Royal invites you to enjoy an unforgettable stay at its iconic luxury hotel just off Phnom Penh's main boulevard near foreign embassies.");
insert into images(hotelid,imagePath) VALUES(1,"images/raffles.png");
INSERT INTO roles(role) VALUES("Customer");
INSERT INTO users(username,pass,email,roleid,discount,avatar) VALUES("bopha","1234567","bopha@itc.edu.kh",2,50,"avatar/bopha.png");
INSERT INTO hotels values(2,"Nam",1,3,6);
DROP TABLE hotels;
CREATE TABLE if NOT EXISTS 

