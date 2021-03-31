-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: db_red-hot-chili-guitars
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `instrument` varchar(100) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `mark` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `price` int NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `description` varchar(1200) DEFAULT NULL,
  `id_category` int NOT NULL,
  `id_product` varchar(45) DEFAULT NULL,
  `kit` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_categories_idx` (`id_category`),
  CONSTRAINT `fk_products_categories` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (7,'guitarra','criolla','gibson','abc-123','negra',12345,NULL,'la mejor guitarra del mundo mundial',1,NULL,'on'),(8,'teclado','','yamaha','bbc-123','negro',23456,NULL,NULL,2,NULL,NULL),(9,'bateria','','yamaha','ddc-234','roja',34567,NULL,NULL,4,NULL,NULL),(10,'flauta','','ahab','flauta-1','amarilla',99843,NULL,NULL,5,NULL,NULL),(11,'amplificador','','marshall','amp-445','blanco',88473,NULL,NULL,3,NULL,NULL),(20,'bajo','soprano','fender','baj-123','blanco',12345,NULL,'bajo de madera laqueada, perfecto para iniciar la carrera musical',1,NULL,'on'),(21,'ukelele','meso soprano','oberture','uqu-122','natural',223341,NULL,'ukelele chico de color natural, perfecto para recién iniciados en l amúsica',1,NULL,'on'),(22,'bateria','acustica','yamaha','bat-223','roja',33344222,NULL,'excelente bateria de 4 cuerpos, con hi-hat y bocina, perfecta para iniciados',4,NULL,'on'),(23,'trompeta','soprana','jazzola','tro-334','dorada',33452,NULL,'trompeta jazzola soprana, excelente para aprender a respirar y tocar',5,NULL,'on'),(24,'teclado','','yamaha','pia-123','natural',33445,NULL,'piano vertical, excelente estado, apto para rocksatrs',2,NULL,'on');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-31 10:15:23
