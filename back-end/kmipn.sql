-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 29, 2024 at 01:33 PM
-- Server version: 8.0.30
-- PHP Version: 8.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kmipn`
--

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int NOT NULL,
  `question` text NOT NULL,
  `option_a` varchar(255) NOT NULL,
  `option_b` varchar(255) NOT NULL,
  `option_c` varchar(255) NOT NULL,
  `option_d` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `question`, `option_a`, `option_b`, `option_c`, `option_d`) VALUES
(1, 'Apakah Anda sering merasa gelisah atau cemas?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(4, 'Apakah Anda merasa kesulitan untuk tidur atau tidur tidak nyenyak?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(5, 'Bagaimana perasaan Anda terhadap diri sendiri saat ini?', 'Percaya diri', 'Normal', 'Merasa tidak berharga', 'Merasa tidak mampu atau gagal'),
(6, 'Apakah Anda sering merasa sedih atau murung?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(7, 'Bagaimana energi Anda sehari-hari?', 'Tinggi dan bertenaga', 'Normal, tidak terlalu tinggi atau rendah', 'Cukup rendah', 'Sangat rendah atau lelah sepanjang waktu'),
(8, 'Apakah Anda merasa tertekan atau stres dalam situasi tertentu?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(9, 'Apakah Anda merasa kesulitan untuk berkonsentrasi atau memusatkan perhatian?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(10, 'Apakah Anda sering merasa marah atau mudah tersinggung?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(11, 'Apakah Anda merasa sulit untuk menikmati kegiatan atau hobi yang biasanya Anda nikmati?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(12, 'Apakah Anda merasa sering kehilangan minat pada hal-hal yang biasanya menarik?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(13, 'Apakah Anda sering merasa lelah atau kurang energi?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(14, 'Apakah Anda merasa kesulitan dalam mengambil keputusan?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(15, 'Apakah Anda merasa sering merasa tidak berdaya atau putus asa?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(16, 'Apakah Anda mengalami perubahan nafsu makan atau berat badan yang signifikan?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(17, 'Apakah Anda merasa sulit untuk bangun dari tempat tidur di pagi hari?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(18, 'Apakah Anda merasa sering ingin menangis tanpa alasan yang jelas?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(19, 'Apakah Anda merasa sering menghindari aktivitas sosial atau pertemuan dengan orang lain?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(20, 'Apakah Anda merasa sering cemas tentang masa depan?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(21, 'Apakah Anda merasa sulit untuk menikmati makanan atau mengalami penurunan nafsu makan?', 'Tidak pernah', ' Jarang', 'Kadang-kadang', 'Sering'),
(22, 'Apakah Anda merasa sering kesepian atau terisolasi dari orang lain?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(23, 'Apakah Anda sering merasa sakit kepala atau nyeri tubuh tanpa alasan medis yang jelas?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(24, 'Apakah Anda merasa sulit untuk rileks atau merasa tegang sepanjang waktu?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(25, 'Apakah Anda merasa sering khawatir tentang hal-hal kecil atau sepele?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(26, 'Apakah Anda merasa sering takut akan sesuatu yang tidak jelas atau tidak diketahui?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(27, 'Apakah Anda merasa sulit untuk bangkit dari kegagalan atau kekecewaan?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(28, 'Apakah Anda sering merasa tidak mampu untuk menyelesaikan pekerjaan atau tugas sehari-hari?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(29, 'Apakah Anda merasa sering menghindari tanggung jawab atau kewajiban?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(30, 'Apakah Anda merasa sulit untuk berpikir jernih atau fokus pada satu hal?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(31, 'Apakah Anda merasa sering cemas tentang kesehatan fisik Anda meskipun tidak ada alasan medis yang jelas?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering'),
(32, 'Apakah Anda merasa sering mengalami mimpi buruk atau gangguan tidur lainnya?', 'Tidak pernah', 'Jarang', 'Kadang-kadang', 'Sering');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `nama` varchar(255) NOT NULL,
  `whatsapp` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
