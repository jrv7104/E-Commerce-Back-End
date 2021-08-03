-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;


USE ecommerce_db;

CREATE TABLE Category (
    id (pk?) INT NOT NULL AUTO AUTO_INCREMENT
    category_name VARCHAR(30) NOT NULL
);

CREATE TABLE Product (
    id (pk?) INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL UNSIGNED NOT NULL,
    stock INT DEFAULT '10' NOT NULL,
    category_id INT FOREIGN KEY (Category_id) REFERENCES Category(id)
);

