-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: localhost    Database: trivia_db
-- ------------------------------------------------------
-- Server version	5.7.13-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `triviaquestions`
--

DROP TABLE IF EXISTS `triviaquestions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `triviaquestions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `triviaquestions`
--

LOCK TABLES `triviaquestions` WRITE;
/*!40000 ALTER TABLE `triviaquestions` DISABLE KEYS */;
INSERT INTO `triviaquestions` VALUES (1,'What does E.T. stand for?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(2,'What Wham! album featured the single: Careless Whisper?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(3,'What year does Marty McFly travel to in Back to the Future?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(4,'What year did Michael Jackson\'s \'Thriller\' come out?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(5,'Finish the sentence: all work and no play makes Jack a ______:','2016-08-30 23:53:14','2016-08-30 23:53:14'),(6,'What are the names of all the Huxtable children?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(7,'What famous line does Jack Nicholson improvise in The Shining?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(8,'What year was \'The Breakfast Club\' released?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(9,'What musical group was NOT formed in the 80s?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(10,'What comes between Brooke Sheilds and her Calvins?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(11,'what was the princess\' name in \'The Princess Bride\'?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(12,'what is the name of the clown in Stephen King\'s 1986 novel \'It\'?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(13,'Who played Cher Horowitz in the 1995 film \'Clueless\'?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(14,'Who was Corey\'s love interest on \'Boy Meets World\'?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(15,'Where is The Fresh Prince from?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(16,'Who\'s creek was it?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(17,'What kind of show was \'In Living Color\'?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(18,'What is Doug\'s full name in the Nickelodeon tv show \'Doug\'?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(19,'What 1990s \'Red Hot Chili Peppers\' album featured the song \'Under the Bridge?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(20,'What song was NOT on TLC\'s 1994 album \'CrazySexyCool\'?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(21,'On the television show \'Pete and Pete\', what is Pete\'s brother\'s name?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(22,'What Quentin Tarantino film came out in 1994?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(23,'Which Green Day studio album featured the single \'When I Come Around\'?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(24,'What animated tv spinoff of \'Beavis and Butthead\' featured an apathetic teenage girl?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(25,'Finish the sentence: \'Making my way______\'','2016-08-30 23:53:14','2016-08-30 23:53:14'),(26,'What movie starring Jon Heder relased in June 2004?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(27,'Which computer animated feature recieved best animated feature at the 2002 Academy Awards?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(28,'Who were Lizzie McGuire\'s best friends?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(29,'On what day does Aaron Samules ask Cady Heron the date in \'Mean Girls\'?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(30,'Halle Berry was the first African American woman to win an Academy Award in a leading role for what movie?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(31,'What Nickelodeon television show involved a little girl who could speak to animals?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(32,'2003 is the year the 5th installment of which literary phenomenon was published?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(33,'Curb your what?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(34,'What Kanye West Album released on September 11th, 2007 which featured the songs: \'Stronger\', \'Can\'t Tell Me Nothing\' and \'Homecoming\'?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(35,'What does Stacey\'s mom have?','2016-08-30 23:53:14','2016-08-30 23:53:14'),(36,'What graphic novel by Marjane Satrapi was adapted into an animated film in 2007?','2016-08-30 23:53:14','2016-08-30 23:53:14');
/*!40000 ALTER TABLE `triviaquestions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-05 23:44:45
