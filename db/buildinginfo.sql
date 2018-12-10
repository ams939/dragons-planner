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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buildings`
--

LOCK TABLES `buildings` WRITE;
/*!40000 ALTER TABLE `buildings` DISABLE KEYS */;
INSERT INTO `buildings` VALUES (7,'ACADMC','Academic Building','Built in 1988','Administration','101 N 33rd St',39.9579,-75.1889,'https://sites.google.com/site/duacademicbuilding/_/rsrc/1322512708513/home/pic.PNG'),(8,'CURTIS','Curtis Hall','General classroom building, connected to the main building.','College of Engineering','3101 Chestnut St',39.9539,-75.1861,'https://upload.wikimedia.org/wikipedia/commons/7/7f/Curtis_Hall_-_Drexel_University_-_IMG_7265.JPG'),(9,'DISQUE','Disque Hall','Large lecture halls on first floor','College of Arts & Sciences','32 S 32nd St',39.9545,-75.1877,'https://c1.staticflickr.com/4/3906/14522152579_4727c7a39d_b.jpg'),(10,'UCROSS','University Crossings','\"CCI has on campus classrooms, administrative offices and faculty offices at University Crossings 100, located at the corner of JFK and Market Streets. The building houses a student computer lab (featuring workstations and laptop plug-in stations, arranged in pods, to encourage collaboration among CCI students), as well as several classrooms with video-conference enabled technology and media projection capabilities. Its Cyber Learning Center provides consulting and other learning resources for students taking computer science classes within the College. University Crossings is also home to several of the College’s research groups and laboratories.\" -Drexel University Website (https://drexel.edu/cci/about/our-facilities/university-crossings/)','College of Computing and Informatics','15 N. 32nd Street',39.9563,-75.1876,'https://www.americancampus.com/assets/385-universitycrossings/gallery/galleryslider/01-385-01-exterior-gallery7-gallery.jpg'),(11,'CODANX','Design Arts Annex','-','Westphal College of Art','3200 Race St',39.958,-75.1885,'https://teenlife.s3.amazonaws.com/media/uploads/listings/drexel-university-arts-programs/vWB3dipdyrto.jpg'),(12,'DRC','Drexel Recreational Center','University gym','Other','3301 Market St',39.9561,-75.19,'https://upload.wikimedia.org/wikipedia/en/8/81/Drexel_Rec_Center.JPG'),(13,'DXLPLZ','Drexel One Plaza','Building with classrooms, business offices. Houses the Garden Level Classrooms','Other','3025 Market St',39.9553,-75.1841,'https://drexelmasterplan.files.wordpress.com/2014/04/bulletin.jpg'),(14,'GHALL','Gerri C. LeBow Hall','\"Drexel\'s Gerri C. LeBow Hall serves​ as an academic center for students and faculty and a networking hub for the Philadelphia business community.\" - Drexel University website','LeBow College of Business',' 3220 Market St',39.9551,-75.1878,'https://www.lebow.drexel.edu/sites/default/files/locations/1434719366-phila-campus2.jpg'),(15,'HAGRTY','W.W Hagerty Library','The university\'s library','Other','3300 Market St',39.9553,-75.1898,'https://thetriangle.org/wp-content/uploads/2016/10/Hagerty_PC_Rachel-Wisniewski_WEB.jpg'),(16,'INTCUL','Intercultural Center','\"The Marks Intercultural Center features a seminar room, an exhibition gallery, a resource center, an interfaith chapel, a multipurpose room, and a kitchen. The Center also houses the administrative offices of Drexel’s Office of Equality & Diversity, Student Center for Diversity and Inclusion, Office of Study Abroad, and office space for spiritual and religious ministries.\" -Drexel website','Other','3225 Arch St',39.9578,-75.1888,'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Intercultural_Center_-_Drexel_University_-_IMG_7293.JPG/800px-Intercultural_Center_-_Drexel_University_-_IMG_7293.JPG'),(17,'KORMAN','Korman Center','Home to math faculty & tutoring services','Other','3315 Market St',39.9548,-75.1888,'https://gluckman-tang.s3.amazonaws.com/media/CACHE/images/Korman-Center_Graham-Hebel_0095_RT/ac3699ba1643a12dd79622978cd0e6f7.jpg'),(18,'LANGCC','Language and communication center','Home to the ELC, English Language Center','College of Arts and Sciences','229 N 33rd St',39.9597,-75.1891,'https://c1.staticflickr.com/4/3859/14728661003_f7a36508e5_b.jpg'),(19,'LAWBDG','Law Building','Drexel\'s law school building','Kline School of Law','3320 Market St',39.9554,-75.1904,'https://upload.wikimedia.org/wikipedia/commons/7/78/Drexel_University_Kline_School_of_Law.jpg'),(20,'LEBOW','LeBow Engineering Center','Building with classrooms','College of Engineering','Market St & S 31st St',39.9549,-75.1859,'https://upload.wikimedia.org/wikipedia/commons/5/5e/WTP_A22_Techserv_1.jpg'),(21,'MACALS','MacAlister Hall','Has the university bookstore on the first floor, classrooms on higher levels','LeBow College of Business','3250 Chestnut St',39.9535,-75.1894,'https://drexelmasterplan.files.wordpress.com/2011/09/pisb-3.jpg?w=600&h=405'),(22,'MAIN','Main Building','Drexel\'s main building, houses university services like the admissions center, financial aid office etc.','Other','3141 Chestnut Street',39.9543,-75.1869,'https://www.bachelorsdegreecenter.org/wp-content/uploads/2018/01/drexel.jpg'),(23,'MNDELL','Mandell Theater','A theater with 424 seats. See https://drexel.edu/performingarts/about/facilities/mandell-theater/ for further info','Other','33rd & Chestnut Street',39.9534,-75.1891,'https://c1.staticflickr.com/4/3904/14728699623_f67d8238ae_b.jpg'),(24,'NSBITT','Nesbitt Hall','-','School of Public Health','3215 Market St',39.9559,-75.1891,'http://anmarcorporation.com/wp-content/uploads/2015/02/Nesbitt-Hall-1.jpg'),(25,'PEARL','Pearlstein Business Center','Building with classrooms','LeBow College of Business','3215 Market St',39.9553,-75.1887,'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/WTP_A19_Techserv_1.jpg/640px-WTP_A19_Techserv_1.jpg'),(26,'PSA','Psych-Soc-Anthro Bldg','Department of Anthropology, neuropsychology laboratory','College of Arts and Sciences','33rd St & Powelton Av',39.9602,-75.1892,'https://gyazo.com/4a9bbbfa019bceba1e325f8865ad93a5'),(27,'RANDEL','Randell Hall','Building that houses many classrooms for a variety of majors','Other','3141 Chestnut St',39.9539,-75.1864,'http://planphilly.com/uploads/media_items/http-planphilly-com-sites-planphilly-com-files-drexel_randell_hall-jpg.752.564.s.jpg'),(28,'RUSH','Rush Building','\"\"\"The Rush Building houses on campus classes, College of Computing & Informatics (CCI) administrative offices (academic advising, admissions, faculty, etc.) and the iCommons computer lab (open to all CCI students). The building holds 6 classrooms equipped for audio-visual presentation. These rooms typically contain a networked PC, HD video player, ceiling mounted projectors, and other equipment for presentations and demonstrations. Four of these classrooms are fully equipped to function as laptop computing labs for networking, programming and database-related projects.  In 2013, CCI redesigned its Information Technology Laboratory (room 205 in the Rush Building) in support of the undergraduate degree program in information technology. This lab consists of enterprise class information technology hardware that students would encounter in industry positions. The hardware includes 20 high powered workstations that are available to students and specialized networking lab simulation software. The hardware is networked and reconfigurable utilizing multiple virtual technologies as needed for the various classes the laboratory supports. In addition a special system has been built into to the classroom to allow for conversion into a standard laptop computing lab utilizing motorized monitor lifts that allow the monitors and keyboards to recess into the desk.The Rush Building houses on campus classes, CCI administrative offices (academic advising, admissions, faculty, etc.) and the iCommons computer lab (open to all CCI students).\"\" - Drexel CCI Department website, https://drexel.edu/cci/about/our-facilities/rush-building/\"','College of Computing and Informatics','30 North 33rd Street',39.9567,-75.1894,'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/CCI_Rush.jpg/1200px-CCI_Rush.jpg'),(29,'STRATN','Stratton Hall','Building with lecture halls and classrooms. Houses chemistry and physics laboratories','Other','3201 Chestnut St',39.9541,-75.1881,'https://commons.wikimedia.org/wiki/File:Stratton_Hall_-_-_Drexel_University_-_IMG_7284.JPG'),(30,'URBN','URBN Center','Home of the Westphal College of Arts','Westphal College of Art','3501 Market St',39.9564,-75.1929,'http://www.bala.com/sites/default/files/styles/slide/public/slides/Home_0.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Penn Museum','A museum in University City','Attraction',39.9502,-75.1989,'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Penn_Museum%27s_Warden_Garden_and_Main_Entrance%2C_Summer_2012.jpg/1200px-Penn_Museum%27s_Warden_Garden_and_Main_Entrance%2C_Summer_2012.jpg'),(2,'Mario the Dragon','Statue','Attraction',39.9554,-75.1893,'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mario_the_Magnificent.jpg'),(3,'Commuter Lounge','A room in the basement of the Creese building where commuter students have access to a microwave, fridge, televisions and other accomodations.','Other',39.9537,-75.1883,'https://drexel.edu/~/media/Images/campusservices/DSC/CreeseBasement.ashx'),(4,'7-Eleven','A convenience store at the end of Lancaster Walk','Store',39.9577,-75.1914,'https://i.gyazo.com/66947c2c08cc687ab7c5ff12412e651a.jpg'),(5,'Saxby\'s Drexel University','Coffee Shop on Drexel Campus','Store',39.9542,-75.1893,'https://drexel.edu/~/media/Images/now/v2/story-images/2017/June/Drexel_PISB_Exterior-2.ashx'),(6,'Drexel Financial Aid Office','Drexel\'s Financial Aid Office for students','Drexel service',39.954,-75.1871,'https://drexel.edu/~/media/Images/drexelCentral/homePage/homepageslide/drexelcentral-homepage-slide-1.ashx'),(7,'Urban Eatery','Drexel dining hall','Restaurant',39.957,-75.1917,'https://www.scb.com/app/uploads/2016/03/151004_001-1600x1064.jpg'),(8,'Drexel Pizza','Pizzeria on 33rd and Cherry St','Restaurant',39.9581,-75.189,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGqR3jtGezC5787vnQRZa8r9ZA4E52HhxQbInCr-7aXm1VRnS'),(9,'Wahoo\'s','Mexican Restaurant','Restaurant',39.9536,-75.1873,'https://www.universitycity.org/sites/default/files/styles/restaurant_image/public/wahoo-fish-taco-940.jpg'),(10,'Shake Shack','Burger joint','Restaurant',39.9538,-75.1886,'https://images.complex.com/complex/image/upload/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/sf6osn1umchdwgxqfjzh.jpg'),(11,'CO-OP Restaurant & Lounge','Restaurant on Chestnut Street','Restaurant',39.9543,-75.19,'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2017/02/coop-940540.jpg'),(12,'Math tutoring center','Math tutoring services','Drexel service',39.9548,-75.1888,'https://drexel.edu/~/media/Images/now/v2/story-images/2017/December/Korman-Center/The%20facade%20of%20the%20new%20Korman%20Center%20addition.ashx'),(13,'CCI Advising Center','Advising center for College of Computing and Informatics students, 4th floor of Rush building','Drexel service',39.9569,-75.1894,'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/CCI_Rush.jpg/1200px-CCI_Rush.jpg'),(14,'College of Engineering Advising Center','Advising center for college of engineering students','Drexel service',39.9563,-75.1879,'https://www.americancampus.com/assets/385-universitycrossings/gallery/galleryslider/02-385-02-exterior-gallery6-gallery.jpg'),(15,'Steinbright Career Development Center','Drexel COOP advising center','Drexel service',39.9581,-75.1881,'https://drexel.edu/~/media/Images/now/v2/story-images/2014/september/Steinbright%20resized.ashx'),(16,'Barne\'s & Noble\'s Bookstore','Drexel University Bookstore','Store',39.9539,-75.1895,'https://drexel.edu/~/media/Images/campusservices/DSC/Zoombn.ashx'),(17,'Biowall','22 ft wide, 80 ft tall wall of living plants','Attraction',39.9544,-75.1893,'https://drexel.edu/~/media/Images/biology/PISB/Biowall_panorama_full_sm.ashx'),(18,'Anthony J. Drexel Statue','A statue of Drexel\'s founder','Attraction',39.9551,-75.1874,'http://blackzebra.irt.drexel.edu/MuseumPlus/69369.jpg'),(19,'T-Mobile','Phone store','Store',39.9546,-75.1927,'https://i.gyazo.com/9f5bb44cea4c754dc4e4767130129107.jpg'),(20,'UPenn Bookstore','University of Pennsylvania Bookstore','Store',39.9534,-75.1951,'https://i.gyazo.com/bb9384521f4ca1b2bb0fa7e088a0e2fc.jpg'),(21,'7-Eleven','Convenience Store','Store',39.9557,-75.1922,'https://i.gyazo.com/24e610c4e9efa950da3db755517b0bbb.jpg'),(22,'CVS Pharmacy','Pharmacy','Store',39.953,-75.1923,'https://i.gyazo.com/854af27b09f6a99662cb4e9d26ff3f3e.jpg'),(23,'Wava','Convenience Store','Store',39.9545,-75.1949,'https://i.gyazo.com/6c60e1da2a59f963eaa3f0e1eb5ecf3a.jpg'),(24,'Chick-fil-A','Restaurant','Restaurant',39.9592,-75.1904,'https://i.gyazo.com/3e51c89fabb1b3ccc631f764a58bb6b5.png');
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

-- Dump completed on 2018-12-09 22:00:00
