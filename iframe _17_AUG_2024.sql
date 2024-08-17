-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 17, 2024 at 07:35 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iframe`
--

-- --------------------------------------------------------

--
-- Table structure for table `fs_booking`
--

CREATE TABLE `fs_booking` (
  `booking_id` int(11) NOT NULL,
  `booking_no` varchar(255) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `booking_date` date DEFAULT NULL,
  `booking_name` varchar(255) DEFAULT NULL,
  `booking_category_id` int(11) DEFAULT NULL,
  `booking_sub_category_id` int(11) DEFAULT NULL,
  `booking_venue_location` text DEFAULT NULL,
  `booking_venue_name` varchar(255) DEFAULT NULL,
  `booking_mobile_no` varchar(50) DEFAULT NULL,
  `booking_email_id` varchar(255) DEFAULT NULL,
  `booking_price` decimal(20,2) DEFAULT NULL,
  `booking_service_id` int(11) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `status` varchar(10) DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fs_booking`
--

INSERT INTO `fs_booking` (`booking_id`, `booking_no`, `company_id`, `booking_date`, `booking_name`, `booking_category_id`, `booking_sub_category_id`, `booking_venue_location`, `booking_venue_name`, `booking_mobile_no`, `booking_email_id`, `booking_price`, `booking_service_id`, `created_by`, `created_on`, `updated_by`, `updated_on`, `status`) VALUES
(1, 'tesdsds', NULL, '2024-08-12', 'tttt', 1, 2, 'testtt address', 'text', '9876543210', 'prathipaupdate@gmail.com', 150000.00, 1, NULL, NULL, NULL, NULL, 'A'),
(2, 'tesdsds', NULL, '2024-08-12', 'tttt', 1, 2, 'testtt address', 'text', '9876543210', 'kk@gmail.com', 150000.00, 1, NULL, NULL, NULL, NULL, 'A'),
(3, 'tesdsds', NULL, '2024-08-12', 'tttt', 1, 2, 'testtt address', 'text', '9876543210', 'kk@gmail.com', 150000.00, 1, NULL, NULL, NULL, NULL, 'A'),
(4, 'tesdsds', NULL, '2024-08-12', 'tttt', 1, 2, 'testtt address', 'text', '9876543210', 'kk@gmail.com', 150000.00, 1, NULL, NULL, NULL, NULL, 'A'),
(5, 'tesdsds', NULL, '2024-08-12', 'tttt', 1, 2, 'testtt address', 'text', '9876543210', 'kk@gmail.com', 150000.00, 1, NULL, NULL, NULL, NULL, 'A'),
(6, 'tesdsds', NULL, '2024-08-12', 'tttt', 1, 2, 'testtt address', 'text', '9876543210', 'kk@gmail.com', 150000.00, 1, NULL, NULL, NULL, NULL, 'A'),
(7, 'tesdsds', NULL, '2024-08-12', 'tttt', 1, 2, 'testtt address', 'text', '9876543210', 'kk@gmail.com', 150000.00, 1, NULL, NULL, NULL, NULL, 'A'),
(8, '008', NULL, '2024-08-12', 'tttt', 1, 2, 'testtt address', 'text', '9876543210', 'kk@gmail.com', 150000.00, 1, NULL, NULL, NULL, NULL, 'A'),
(9, 'FS-009', NULL, '2024-08-12', 'tttt', 1, 2, 'testtt address', 'text', '9876543210', 'kk@gmail.com', 150000.00, 1, NULL, NULL, NULL, NULL, 'A');

-- --------------------------------------------------------

--
-- Table structure for table `fs_category`
--

CREATE TABLE `fs_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fs_category`
--

INSERT INTO `fs_category` (`category_id`, `category_name`) VALUES
(1, 'Wedding'),
(2, 'Birthday Shoot'),
(3, 'couples shoot'),
(4, 'Portraits'),
(5, 'Maternity');

-- --------------------------------------------------------

--
-- Table structure for table `fs_sub_category`
--

CREATE TABLE `fs_sub_category` (
  `sub_category_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `sub_category_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fs_sub_category`
--

INSERT INTO `fs_sub_category` (`sub_category_id`, `category_id`, `sub_category_name`) VALUES
(1, 1, 'Pre Wedding shoot'),
(2, 1, 'Post Wedding shoot'),
(3, 2, 'Birthday shoot'),
(4, 2, '1 st Birthday shoot'),
(5, 3, 'Pre couples shoot'),
(6, 3, 'Post couples shoot'),
(7, 4, 'Portraits'),
(8, 5, 'Maternity');

-- --------------------------------------------------------

--
-- Table structure for table `fs_user_admin`
--

CREATE TABLE `fs_user_admin` (
  `admin_id` int(11) NOT NULL,
  `company_id` int(11) DEFAULT NULL,
  `admin_name` varchar(255) DEFAULT NULL,
  `mobile_no` varchar(50) DEFAULT NULL,
  `alternate_no` varchar(50) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `location` text DEFAULT NULL,
  `admin_type` int(11) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `org_password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fs_user_admin`
--

INSERT INTO `fs_user_admin` (`admin_id`, `company_id`, `admin_name`, `mobile_no`, `alternate_no`, `email_id`, `location`, `admin_type`, `role`, `username`, `password`, `org_password`, `created_at`, `created_by`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'sample', '$2b$10$Q04CTg2m.NloOlUtyt6BouDSLXSEqngIoVRH7hZHyn0b8tY19kiPa', 'samplepass', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fs_booking`
--
ALTER TABLE `fs_booking`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `fs_category`
--
ALTER TABLE `fs_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `fs_sub_category`
--
ALTER TABLE `fs_sub_category`
  ADD PRIMARY KEY (`sub_category_id`);

--
-- Indexes for table `fs_user_admin`
--
ALTER TABLE `fs_user_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fs_booking`
--
ALTER TABLE `fs_booking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `fs_category`
--
ALTER TABLE `fs_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `fs_sub_category`
--
ALTER TABLE `fs_sub_category`
  MODIFY `sub_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `fs_user_admin`
--
ALTER TABLE `fs_user_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
