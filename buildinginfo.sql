CREATE DATABASE  IF NOT EXISTS `buildinginfo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `buildinginfo`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: buildinginfo
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `buildings`
--

DROP TABLE IF EXISTS `buildings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `buildings` (
  `building_id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(10) NOT NULL,
  `name` text,
  `description` text,
  `department` text,
  `street_address` text,
  `lat` float DEFAULT '39.956',
  `lon` float DEFAULT '-75.19',
  `image_url` text,
  PRIMARY KEY (`building_id`),
  UNIQUE KEY `code_UNIQUE` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buildings`
--

LOCK TABLES `buildings` WRITE;
/*!40000 ALTER TABLE `buildings` DISABLE KEYS */;
INSERT INTO `buildings` VALUES (7,'ACADMC','Academic Building','Built in 1988','Administration','101 N 33rd St',39.9579,-75.1889,'https://sites.google.com/site/duacademicbuilding/_/rsrc/1322512708513/home/pic.PNG'),(8,'CURTIS','Curtis Hall','General classroom building, connected to the main building.','College of Engineering','3101 Chestnut St',39.954,-75.1882,'https://upload.wikimedia.org/wikipedia/commons/7/7f/Curtis_Hall_-_Drexel_University_-_IMG_7265.JPG'),(9,'DISQUE','Disque Hall','Large lecture halls on first floor','College of Arts & Sciences','32 S 32nd St',39.9545,-75.1877,'https://c1.staticflickr.com/4/3906/14522152579_4727c7a39d_b.jpg'),(10,'UCROSS','University Crossings','\"CCI has on campus classrooms, administrative offices and faculty offices at University Crossings 100, located at the corner of JFK and Market Streets. The building houses a student computer lab (featuring workstations and laptop plug-in stations, arranged in pods, to encourage collaboration among CCI students), as well as several classrooms with video-conference enabled technology and media projection capabilities. Its Cyber Learning Center provides consulting and other learning resources for students taking computer science classes within the College. University Crossings is also home to several of the College’s research groups and laboratories.\" -Drexel University Website (https://drexel.edu/cci/about/our-facilities/university-crossings/)','College of Computing and Informatics','15 N. 32nd Street',39.9563,-75.1876,'https://www.americancampus.com/assets/385-universitycrossings/gallery/galleryslider/01-385-01-exterior-gallery7-gallery.jpg');
/*!40000 ALTER TABLE `buildings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `locations` (
  `location_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `description` text,
  `type` text,
  `lat` float NOT NULL DEFAULT '39.956',
  `lon` float NOT NULL DEFAULT '-75.1878',
  `image_url` text,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Penn Museum','A museum in University City','Attraction',39.9502,-75.1989,'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Penn_Museum%27s_Warden_Garden_and_Main_Entrance%2C_Summer_2012.jpg/1200px-Penn_Museum%27s_Warden_Garden_and_Main_Entrance%2C_Summer_2012.jpg');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-27 22:28:13
