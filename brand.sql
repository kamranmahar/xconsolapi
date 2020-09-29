CREATE TABLE `Brands` (
  `ID` int NOT NULL,
  `Name` varchar(250) NOT NULL,
  `Description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Slug` varchar(250) NOT NULL,
  `Thumbnail` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Brands`
--

INSERT INTO `Brands` (`ID`, `Name`, `Description`, `Slug`, `Thumbnail`) VALUES
(1, 'Nokia', NULL, 'nokia', NULL),
(2, 'Niki', NULL, 'niki', NULL),
(3, 'Gucci', NULL, 'gucci', NULL);
