-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 10, 2023 at 11:55 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ataa`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(250) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confPassword` varchar(100) NOT NULL,
  `phone` bigint(100) NOT NULL,
  `date` date NOT NULL,
  `blood` varchar(50) NOT NULL,
  `region` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `language` varchar(100) NOT NULL,
  `gender` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `firstname`, `lastname`, `email`, `password`, `confPassword`, `phone`, `date`, `blood`, `region`, `city`, `language`, `gender`) VALUES
(1, 'Alazy Alhimeari', 'undefined', 'admin@admin.com', 'undefined', 'undefined', 8888676, '2023-12-28', 'AB+', 'Madinah Province', 'ghgyh', 'undefined', '');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `ID` int(11) NOT NULL,
  `fname` varchar(200) NOT NULL,
  `lname` varchar(200) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `phone` int(11) NOT NULL,
  `birthDate` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `language` varchar(100) NOT NULL,
  `message` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`ID`, `fname`, `lname`, `gender`, `phone`, `birthDate`, `email`, `language`, `message`) VALUES
(1, 'alazy', 'ali', 'english', 23235, '2023-12-11', 'admin@admin.com', 'english', 'hello world');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `ID` int(11) NOT NULL,
  `Hospital_name` varchar(200) NOT NULL,
  `location` varchar(200) NOT NULL,
  `link` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`ID`, `Hospital_name`, `location`, `link`) VALUES
(1, 'Central Blood Bank', 'Mecca', '#'),
(2, 'Blood Donation Center', 'Alhasa', '#'),
(3, 'Al Hammadi Hospital', 'Riyadh', '#'),
(4, 'King Fahad Specialist Hospital', 'Dammam', '#'),
(5, 'King Abdullah Medical Complex', 'Jeddah', '#'),
(6, 'King Abdulaziz Hospital', 'Jeddah', '#'),
(7, 'Central Blood Bank', 'Mecca', '#'),
(8, 'Blood Donation Center', 'Alhasa', '#'),
(9, 'Al Hammadi Hospital', 'Riyadh', '#'),
(10, 'King Fahad Specialist Hospital', 'Dammam', '#'),
(11, 'King Abdullah Medical Complex', 'Jeddah', '#'),
(12, 'King Abdulaziz Hospital', 'Jeddah', '#');

-- --------------------------------------------------------

--
-- Table structure for table `reservation_ok`
--

CREATE TABLE `reservation_ok` (
  `ID` int(11) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `location` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservation_ok`
--

INSERT INTO `reservation_ok` (`ID`, `Name`, `location`, `date`, `time`) VALUES
(1, 'King Fahad Specialist Hospital', '0', '2023-12-05', '21:13:00'),
(2, 'King Abdulaziz Hospital', '0', '2023-12-06', '11:15:00'),
(3, 'King Abdulaziz Hospital', '0', '2023-12-06', '11:15:00'),
(4, 'Blood Donation Center', 'Alhasa', '2023-12-06', '22:40:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `reservation_ok`
--
ALTER TABLE `reservation_ok`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `reservation_ok`
--
ALTER TABLE `reservation_ok`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
