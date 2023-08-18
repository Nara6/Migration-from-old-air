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
    id int PRIMARY KEY auto_increment NOT NULL,
    category_id int, FOREIGN KEY (category_id) REFERENCES categories(id)
);

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