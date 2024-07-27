-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2024 at 08:11 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
-- Table structure for table `user_admin`
--

CREATE TABLE `user_admin` (
  `admin_id` int(11) NOT NULL,
  `company_id` int(11) DEFAULT NULL,
  `admin_name` varchar(255) DEFAULT NULL,
  `mobile_no` varchar(15) DEFAULT NULL,
  `alternate_no` varchar(15) DEFAULT NULL,
  `amail_id` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `admin_type` varchar(20) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(25) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `org_password` varchar(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_admin`
--

INSERT INTO `user_admin` (`admin_id`, `company_id`, `admin_name`, `mobile_no`, `alternate_no`, `amail_id`, `location`, `admin_type`, `role`, `username`, `password`, `org_password`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'testuser', '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36D3AfsPbLEx.MX5dAxJXq6', 'mypassword', NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'testuser', '$2b$10$8khGVxrLXoVPfck30yR4cuk2W/VdShXlsb9KeY7CDHIBN7pUnDhL.', 'mypassword', NULL, NULL, NULL, NULL),
(6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'testuser', '$2b$10$/v6TLZNOYwaKjx.RuCKBLe3oJScgihOtbU.qox12.BAyCU3oh.CK6', 'mypassword', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_admin`
--
ALTER TABLE `user_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_admin`
--
ALTER TABLE `user_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
