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
USE `LaBodega` ;

-- -----------------------------------------------------
-- Table `LaBodega`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaBodega`.`categories` (
  `Id` INT NOT NULL,
  `Variedad` VARCHAR(45) NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `LaBodega`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaBodega`.`products` (
  `Id_Producto` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `price` INT NULL,
  `priceBox` VARCHAR(45) NULL,
  `detail` VARCHAR(500) NULL,
  `year` VARCHAR(45) NULL,
  `time` VARCHAR(11) NULL,
  `color` VARCHAR(45) NULL,
  `origin` VARCHAR(45) NULL,
  `imagen` VARCHAR(45) NULL,
  `category_id` INT NULL,
  PRIMARY KEY (`Id_Producto`),
  INDEX `fk_products_categories_idx` (`category_id` ASC),
  CONSTRAINT `fk_products_categories`
    FOREIGN KEY (`category_id`)
    REFERENCES `LaBodega`.`categories` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `LaBodega`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaBodega`.`users` (
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
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `LaBodega`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaBodega`.`carts` (
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
    REFERENCES `LaBodega`.`products` (`Id_Producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carts_users`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `LaBodega`.`users` (`id_User`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `LaBodega`.`purchase_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaBodega`.`purchase_history` (
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
    REFERENCES `LaBodega`.`products` (`Id_Producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carts_users0`
    FOREIGN KEY (`user_id`)
    REFERENCES `LaBodega`.`users` (`id_User`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
