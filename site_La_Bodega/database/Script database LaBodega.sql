-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema LaBodega
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema LaBodega
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `LaBodega` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema labodega
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema labodega
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `labodega` DEFAULT CHARACTER SET utf8 ;
USE `LaBodega` ;

-- -----------------------------------------------------
-- Table `LaBodega`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaBodega`.`categories` (
  `Id` INT NOT NULL,
  `Variedad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `LaBodega`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaBodega`.`products` (
  `Id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `priceBox` INT NOT NULL,
  `detail` VARCHAR(500) NOT NULL,
  `year` VARCHAR(45) NOT NULL,
  `time` VARCHAR(11) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `origin` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NOT NULL,
  `id_category` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_products_categories_idx` (`id_category` ASC),
  CONSTRAINT `fk_products_categories`
    FOREIGN KEY (`id_category`)
    REFERENCES `LaBodega`.`categories` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `LaBodega`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaBodega`.`users` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(150) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(45) NOT NULL,
  `fecha` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `LaBodega`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaBodega`.`carts` (
  `id` INT NOT NULL,
  `id_usuario` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_carts_products_idx` (`id_producto` ASC),
  INDEX `fk_carts_users_idx` (`id_usuario` ASC),
  CONSTRAINT `fk_carts_products`
    FOREIGN KEY (`id_producto`)
    REFERENCES `LaBodega`.`products` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carts_users`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `LaBodega`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `LaBodega`.`purchase_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaBodega`.`purchase_history` (
  `id` INT NOT NULL,
  `id_user` INT NOT NULL,
  `id_product` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_carts_products_idx` (`id_product` ASC),
  INDEX `fk_carts_users_idx` (`id_user` ASC),
  CONSTRAINT `fk_carts_products0`
    FOREIGN KEY (`id_product`)
    REFERENCES `LaBodega`.`products` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carts_users0`
    FOREIGN KEY (`id_user`)
    REFERENCES `LaBodega`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `labodega` ;

-- -----------------------------------------------------
-- Table `labodega`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega`.`categories` (
  `Id` INT NOT NULL,
  `Variedad` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `labodega`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega`.`products` (
  `Id_Producto` INT NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `price` INT NULL DEFAULT NULL,
  `priceBox` VARCHAR(45) NULL DEFAULT NULL,
  `detail` VARCHAR(500) NULL DEFAULT NULL,
  `year` VARCHAR(45) NULL DEFAULT NULL,
  `time` VARCHAR(11) NULL DEFAULT NULL,
  `color` VARCHAR(45) NULL DEFAULT NULL,
  `origin` VARCHAR(45) NULL DEFAULT NULL,
  `imagen` VARCHAR(45) NULL DEFAULT NULL,
  `category_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`Id_Producto`),
  INDEX `fk_products_categories_idx` (`category_id` ASC),
  CONSTRAINT `fk_products_categories`
    FOREIGN KEY (`category_id`)
    REFERENCES `labodega`.`categories` (`Id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `labodega`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega`.`users` (
  `id_User` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(150) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(45) NOT NULL,
  `fecha` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id_User`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `labodega`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega`.`carts` (
  `id_Carts` INT NOT NULL,
  `id_usuario` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Carts`),
  INDEX `fk_carts_products_idx` (`id_producto` ASC),
  INDEX `fk_carts_users_idx` (`id_usuario` ASC),
  CONSTRAINT `fk_carts_products`
    FOREIGN KEY (`id_producto`)
    REFERENCES `labodega`.`products` (`Id_Producto`),
  CONSTRAINT `fk_carts_users`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `labodega`.`users` (`id_User`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `labodega`.`purchase_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `labodega`.`purchase_history` (
  `id_Carts` INT NOT NULL,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `quantity` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Carts`),
  INDEX `fk_carts_products_idx` (`product_id` ASC),
  INDEX `fk_carts_users_idx` (`user_id` ASC),
  CONSTRAINT `fk_carts_products0`
    FOREIGN KEY (`product_id`)
    REFERENCES `labodega`.`products` (`Id_Producto`),
  CONSTRAINT `fk_carts_users0`
    FOREIGN KEY (`user_id`)
    REFERENCES `labodega`.`users` (`id_User`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
