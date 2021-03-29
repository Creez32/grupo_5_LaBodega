-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema labodega_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema labodega_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `labodega_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `labodega_db` ;

-- -----------------------------------------------------
-- Table `labodega_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `apellido` VARCHAR(255) NULL DEFAULT NULL,
  `direccion` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `avatar` VARCHAR(255) NULL DEFAULT NULL,
  `fecha` DATETIME NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `labodega_db`.`colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega_db`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `labodega_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega_db`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `variedad` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `labodega_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega_db`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `priceBox` INT NOT NULL,
  `variety` VARCHAR(255) NOT NULL,
  `detail` VARCHAR(1000) NOT NULL,
  `year` INT NOT NULL,
  `time` VARCHAR(255) NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `origin` VARCHAR(255) NOT NULL,
  `colorId` INT NULL DEFAULT NULL,
  `categoryId` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `colorId` (`colorId` ASC),
  INDEX `categoryId` (`categoryId` ASC),
  CONSTRAINT `products_ibfk_1`
    FOREIGN KEY (`colorId`)
    REFERENCES `labodega_db`.`colors` (`id`),
  CONSTRAINT `products_ibfk_2`
    FOREIGN KEY (`categoryId`)
    REFERENCES `labodega_db`.`categories` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `labodega_db`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega_db`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `labodega_db`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega_db`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NULL DEFAULT NULL,
  `productId` INT NULL DEFAULT NULL,
  `amount` INT NULL DEFAULT NULL,
  `orderId` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC),
  INDEX `productId` (`productId` ASC),
  INDEX `orderId` (`orderId` ASC),
  CONSTRAINT `carts_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `labodega_db`.`users` (`id`),
  CONSTRAINT `carts_ibfk_2`
    FOREIGN KEY (`productId`)
    REFERENCES `labodega_db`.`products` (`id`),
  CONSTRAINT `carts_ibfk_3`
    FOREIGN KEY (`orderId`)
    REFERENCES `labodega_db`.`orders` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `labodega_db`.`sequelizemeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega_db`.`sequelizemeta` (
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name` (`name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
