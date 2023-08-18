Create DATABASE finalexams1;

USE finalexams1;

CREATE TABLE IF NOT EXISTS roles(
    id int PRIMARY KEY auto_increment NOT NULL,
    rolename varchar(100)
);

CREATE TABLE IF NOT EXISTS groups(
    id int PRIMARY KEY auto_increment NOT NULL,
    groupname varchar(100)
);

CREATE TABLE IF NOT EXISTS users(
    id int PRIMARY KEY auto_increment NOT NULL,
    username varchar(100),
    pwd varchar(50),
    role_id int, FOREIGN KEY (role_id) REFERENCES roles(id),
    toekn varchar(256),
    group_id int, FOREIGN KEY (group_id) REFERENCES groups(id),
    remote_addr varchar(16),
    forward_addr varchar(16),
    image varchar(256)
);

CREATE TABLE IF NOT EXISTS addresses(
    id int PRIMARY KEY auto_increment NOT NULL,
    houseno varchar(150),
    streetno varchar(150),
    streetname varchar(150),
    villagename varchar(150),
    districtname varchar(150),
    communnename varchar(150),
    provincename varchar(150),
    cityname varchar(150),
    countryname varchar(150),
    iscurrent TINYINT
);

CREATE TABLE IF NOT EXISTS publishers(
    id int PRIMARY KEY auto_increment NOT NULL,
    publishername varchar(50),
    address_id int, FOREIGN KEY (address_id) REFERENCES addresses(id)
);

CREATE TABLE IF NOT EXISTS categories(
    id int PRIMARY KEY auto_increment NOT NULL,
    categoryname varchar(256)
);

CREATE TABLE IF NOT EXISTS books(
    id int PRIMARY KEY auto_increment NOT NULL,
    title varchar(256),
    path varchar(256),
    user_id int, FOREIGN KEY (user_id) REFERENCES users(id),
    group_id int, FOREIGN KEY (group_id) REFERENCES groups(id),
    publisher_id int, FOREIGN KEY (publisher_id) REFERENCES publishers(id)
);

CREATE TABLE IF NOT EXISTS book_categories(
    book_id int, FOREIGN KEY (book_id) REFERENCES books(id),
    category_id int, FOREIGN KEY (category_id) REFERENCES categories(id)
    -- ADD PK_book_categories PRIMARY KEY (book_id,categories_id)
);
ALTER TABLE book_categories ADD PRIMARY KEY (book_id,category_id);

CREATE TABLE IF NOT EXISTS inventories(
    id int PRIMARY KEY auto_increment NOT NULL,
    book_id int, FOREIGN KEY (book_id) REFERENCES books(id),
    copies int,
    srcurl varchar(256),
    created_ad TIMESTAMP
);

CREATE TABLE IF NOT EXISTS downloads(
    id int PRIMARY KEY auto_increment NOT NULL,
    user_id int, FOREIGN KEY (user_id) REFERENCES users(id),
    book_id int, FOREIGN KEY (book_id) REFERENCES books(id),
    downloaded_at TIMESTAMP
);

#DATA for Role
INSERT INTO roles(rolename) VALUES ('User');
#DATA for Group
INSERT INTO groups(groupname) VALUES ('User');
#DATA for User
INSERT INTO users VALUES(NULL,'Tester','123456',1,'test',1,'PP,Test','KPS,test','Profile.jpg');
#DATA for Address
INSERT INTO addresses VALUES (NULL,'10','11','St.test','Sensok','Test','Test','Test','Test','Test',1);
#DATA for Publisher
INSERT INTO publishers VALUES (NULL,'Phearum',1);

#DATA for Category
INSERT INTO categories VALUES (NULL,'Physical');
INSERT INTO categories VALUES (NULL,'Math');
INSERT INTO categories VALUES (NULL,'Statistic');
INSERT INTO categories VALUES (NULL,'History');
INSERT INTO categories VALUES (NULL,'Quantum');

#DATA for Book
INSERT INTO books VALUES (NULL,'CHAPTER1','chapter1.pdf',1,1,1);
INSERT INTO books VALUES (NULL,'CHAPTER2','chapter2.pdf',1,1,1);
INSERT INTO books VALUES (NULL,'CHAPTER3','chapter3.pdf',1,1,1);
INSERT INTO books VALUES (NULL,'CHAPTER4','chapter4.pdf',1,1,1);









