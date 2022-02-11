# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.36)
# Database: website_maker
# Generation Time: 2022-02-11 08:20:57 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table page_drafts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `page_drafts`;

CREATE TABLE `page_drafts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `title` varchar(255) NOT NULL DEFAULT 'Website-Maker' COMMENT '标题',
  `description` varchar(255) NOT NULL DEFAULT 'Website Maker' COMMENT '描述',
  `keywords` varchar(255) NOT NULL DEFAULT 'Website-Maker，Low-Code' COMMENT '关键字',
  `route` varchar(255) NOT NULL DEFAULT '' COMMENT '路由',
  `metadata` longtext NOT NULL COMMENT '页面数据',
  `created_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_time` timestamp NULL DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  `deleted_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `page_drafts` WRITE;
/*!40000 ALTER TABLE `page_drafts` DISABLE KEYS */;

INSERT INTO `page_drafts` (`id`, `name`, `title`, `description`, `keywords`, `route`, `metadata`, `created_time`, `updated_time`, `deleted_time`, `created_by`, `updated_by`, `deleted_by`)
VALUES
	(1,'Website-Maker','Website-Maker','Website Maker','website，maker，nuxt3，low-code','/maker/website-maker','[{\"zhName\":\"横幅-浅色背景\",\"enName\":\"BannerShallowBackground\",\"demoImg\":\"/_nuxt/assets/img/demo-banner__shallow.jpg\",\"data\":{\"title\":\"Website-Maker\",\"description\":\"基于 Nuxt3 的低代码建站方案\",\"img\":{\"Webp\":\"https://web-cdn.agora.io/website-maker/imgs/demo-banner__shallow.webp\",\"NoWebp\":\"https://web-cdn.agora.io/website-maker/imgs/demo-banner__shallow.jpg\"}},\"key\":\"BannerShallowBackground-1644565390528\"},{\"zhName\":\"免费10000分钟-深色背景\",\"enName\":\"Free10000MinutesDeepBackground\",\"demoImg\":\"/_nuxt/assets/img/demo-free-10000-minutes__deep.jpg\",\"data\":{\"title\":\"解放双手！告别996\",\"btnText\":\"了解一下\",\"btnLink\":\"https://github.com/hd996/website-maker\",\"btnBlank\":true},\"key\":\"Free10000MinutesDeepBackground-1644565438710\"}]','2022-02-11 15:44:48','2022-02-11 16:17:44',NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `page_drafts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pages
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pages`;

CREATE TABLE `pages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `title` varchar(255) NOT NULL DEFAULT 'Website-Maker' COMMENT '标题',
  `description` varchar(255) NOT NULL DEFAULT 'Website Maker' COMMENT '描述',
  `keywords` varchar(255) NOT NULL DEFAULT 'Website-Maker，Low-Code' COMMENT '关键字',
  `route` varchar(255) NOT NULL DEFAULT '' COMMENT '路由',
  `metadata` longtext NOT NULL COMMENT '页面数据',
  `created_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_time` timestamp NULL DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  `deleted_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;

INSERT INTO `pages` (`id`, `name`, `title`, `description`, `keywords`, `route`, `metadata`, `created_time`, `updated_time`, `deleted_time`, `created_by`, `updated_by`, `deleted_by`)
VALUES
	(1,'Website-Maker','Website-Maker','Website Maker','website，maker，nuxt3，low-code','/maker/website-maker','[{\"zhName\":\"横幅-浅色背景\",\"enName\":\"BannerShallowBackground\",\"demoImg\":\"/_nuxt/assets/img/demo-banner__shallow.jpg\",\"data\":{\"title\":\"Website-Maker\",\"description\":\"基于 Nuxt3 的低代码建站方案\",\"img\":{\"Webp\":\"https://web-cdn.agora.io/website-maker/imgs/demo-banner__shallow.webp\",\"NoWebp\":\"https://web-cdn.agora.io/website-maker/imgs/demo-banner__shallow.jpg\"}},\"key\":\"BannerShallowBackground-1644565390528\"},{\"zhName\":\"免费10000分钟-深色背景\",\"enName\":\"Free10000MinutesDeepBackground\",\"demoImg\":\"/_nuxt/assets/img/demo-free-10000-minutes__deep.jpg\",\"data\":{\"title\":\"解放双手！告别996\",\"btnText\":\"了解一下\",\"btnLink\":\"https://github.com/hd996/website-maker\",\"btnBlank\":true},\"key\":\"Free10000MinutesDeepBackground-1644565438710\"}]','2022-02-11 15:44:48','2022-02-11 16:17:46',NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
