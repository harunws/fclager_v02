-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2023 at 06:09 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fclager`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers_v02`
--

CREATE TABLE `customers_v02` (
  `customer_id` int(11) NOT NULL,
  `customer_first_name` varchar(255) NOT NULL,
  `customer_last_name` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `customer_updated` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers_v02`
--

INSERT INTO `customers_v02` (`customer_id`, `customer_first_name`, `customer_last_name`, `customer_email`, `customer_created`, `customer_updated`) VALUES
(2, 'Johnx', 'Doex', 'jxd@gmail.com', '2023-03-19 21:21:36', '2023-03-25 10:59:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers_v02`
--
ALTER TABLE `customers_v02`
  ADD PRIMARY KEY (`customer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers_v02`
--
ALTER TABLE `customers_v02`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
