-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  sam. 06 juin 2020 à 23:58
-- Version du serveur :  10.1.35-MariaDB
-- Version de PHP :  7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `debazar`
--

DROP DATABASE IF EXISTS `debazar`;
CREATE DATABASE `debazar`;
USE `debazar`;

-- --------------------------------------------------------

--
-- Structure de la table `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `author`
--

INSERT INTO `author` (`id`, `name`) VALUES
(29, 'Antoine Bauza'),
(30, 'Miguel Coïmbra');

-- --------------------------------------------------------

--
-- Structure de la table `best_game`
--

CREATE TABLE `best_game` (
  `id` int(11) NOT NULL,
  `game` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `best_game`
--

INSERT INTO `best_game` (`id`, `game`, `date`) VALUES
(1, 14, '2020-06-06');

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(2, 'Jeux enfants'),
(3, 'Escape Game'),
(4, 'Jeux de stratégie'),
(5, 'Jeux à deux'),
(6, 'Jeux en bois'),
(7, 'Jeux de dessin'),
(8, 'Jeux de plateau'),
(9, 'Jeux de cartes'),
(10, 'Jeux coopératifs');

-- --------------------------------------------------------

--
-- Structure de la table `editor`
--

CREATE TABLE `editor` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `editor`
--

INSERT INTO `editor` (`id`, `name`) VALUES
(9, 'Abalone Edition'),
(10, 'Alderac'),
(11, 'Asmodée'),
(12, 'Bankiiiz'),
(13, 'Blue Orange'),
(14, 'Bombyx'),
(15, 'Capsicum Games'),
(16, 'Carta mundi'),
(17, 'Catch up games'),
(18, 'Cocktail Games'),
(19, 'Abalone Edition'),
(20, 'Alderac'),
(21, 'Asmodée'),
(22, 'Bankiiiz'),
(23, 'Blue Orange'),
(24, 'Bombyx'),
(25, 'Capsicum Games'),
(26, 'Carta mundi'),
(27, 'Catch up games'),
(28, 'Cocktail Games'),
(29, 'Czech Games Edition'),
(30, 'Darwin Project'),
(31, 'Days of Wonder'),
(32, 'Dujardin'),
(33, 'Edge'),
(34, 'Elemon Games'),
(35, 'Fantasy Flight Games'),
(36, 'Ferti'),
(37, 'Filosofia'),
(38, 'Fryx Games'),
(39, 'Czech Games Edition'),
(40, 'Darwin Project'),
(41, 'Days of Wonder'),
(42, 'Dujardin'),
(43, 'Edge'),
(44, 'Elemon Games'),
(45, 'Fantasy Flight Games'),
(46, 'Ferti'),
(47, 'Filosofia'),
(48, 'Fryx Games'),
(49, 'Funforge'),
(50, 'Gameworks'),
(51, 'Gigamic'),
(52, 'Granna'),
(53, 'Guillotine Games'),
(54, 'Haba'),
(55, 'Halloween concept'),
(56, 'Hans im Glück'),
(57, 'Heidelberger Spielev'),
(58, 'Homoludicus'),
(59, 'Funforge'),
(60, 'Gameworks'),
(61, 'Gigamic'),
(62, 'Granna'),
(63, 'Guillotine Games'),
(64, 'Haba'),
(65, 'Halloween concept'),
(66, 'Hans im Glück'),
(67, 'Heidelberger Spielev'),
(68, 'Homoludicus'),
(69, 'Hurrican'),
(70, 'Iello'),
(71, 'Ilopeli'),
(72, 'Jactalea'),
(73, 'Jeux Descartes'),
(74, 'Lansay'),
(75, 'Libellud'),
(76, 'Ludically'),
(77, 'Ludodélire'),
(78, 'Ludonaute'),
(79, 'Lui-même'),
(80, 'Matagot'),
(81, 'Mattel'),
(82, 'Mattel Games'),
(83, 'MB'),
(84, 'Monster Games'),
(85, 'Nekocorp'),
(86, 'Nürnberger Spielkart'),
(87, 'Pearl Games'),
(88, 'Piatnik'),
(89, 'Hurrican'),
(90, 'Iello'),
(91, 'Ilopeli'),
(92, 'Jactalea'),
(93, 'Jeux Descartes'),
(94, 'Lansay'),
(95, 'Libellud'),
(96, 'Ludically'),
(97, 'Ludodélire'),
(98, 'Ludonaute'),
(99, 'Lui-même'),
(100, 'Matagot'),
(101, 'Mattel'),
(102, 'Mattel Games'),
(103, 'MB'),
(104, 'Monster Games'),
(105, 'Nekocorp'),
(106, 'Nürnberger Spielkarten Verlag'),
(107, 'Pearl Games'),
(108, 'Piatnik'),
(109, 'Plan B Games'),
(110, 'Purple Brain Creations'),
(111, 'Queen Games'),
(112, 'Ravensburger'),
(113, 'Renegade France'),
(114, 'Repos Productions'),
(115, 'Rio Grande Games'),
(116, 'Scorpion masqué'),
(117, 'Sit Down !'),
(118, 'Space Cow-Boys'),
(119, 'Steve Jackson Games'),
(120, 'Stronghold Games'),
(121, 'Tactic'),
(122, 'Tilsit'),
(123, 'Ubik'),
(124, 'Variantes'),
(125, 'Winning Moves France'),
(126, 'Ystari Games'),
(127, 'Plan B Games'),
(128, 'Purple Brain Creations'),
(129, 'Queen Games'),
(130, 'Ravensburger'),
(131, 'Renegade France'),
(132, 'Repos Productions'),
(133, 'Rio Grande Games'),
(134, 'Scorpion masqué'),
(135, 'Sit Down !'),
(136, 'Space Cow-Boys'),
(137, 'Steve Jackson Games'),
(138, 'Stronghold Games'),
(139, 'Tactic'),
(140, 'Tilsit'),
(141, 'Ubik'),
(142, 'Variantes'),
(143, 'Winning Moves France'),
(144, 'Ystari Games');

-- --------------------------------------------------------

--
-- Structure de la table `expansion`
--

CREATE TABLE `expansion` (
  `base_game_id` int(11) NOT NULL,
  `expansion_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `expansion`
--

INSERT INTO `expansion` (`base_game_id`, `expansion_id`) VALUES
(14, 18),
(14, 28);

-- --------------------------------------------------------

--
-- Structure de la table `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `image` text,
  `description` text NOT NULL,
  `editor` int(11) NOT NULL,
  `players` varchar(20) NOT NULL,
  `duration` varchar(20) NOT NULL,
  `published` varchar(20) NOT NULL,
  `age` varchar(11) NOT NULL,
  `price` float NOT NULL,
  `rating` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `game`
--

INSERT INTO `game` (`id`, `name`, `image`, `description`, `editor`, `players`, `duration`, `published`, `age`, `price`, `rating`) VALUES
(14, '7 Wonders', 'https://www.7wonders.net/wp-content/themes/seven-wonders/css/wonders/7-wonders-box.png', 'Chacun des 2 à 7 joueurs prend la tête d’une ville légendaire (Babylone, Éphèse, Rhodes…), et va disposer de trois Âges pour la faire prospérer et même bâtir la légendaire Merveille du monde qui y est associée. Le but du jeu est d’embellir sa cité et de la rendre plus influente que celle de ses adversaires.', 114, '2 à 7 joueurs', '30 min à 1 heure', '', '10', 39, 4),
(18, '7 Wonders : Armada', 'https://www.7wonders.net/wp-content/themes/seven-wonders/css/armada/7-wonders-armada-box-boite.png', 'Ajoutez un nouveau plateau de jeu à votre merveille, voguez sur les mers et utilisez votre Armada pour augmenter l’influence de votre cité !', 114, '2 à 7 joueurs', '30 min à 1 heure', '', '10', 20, 4),
(28, '7 Wonders : Babel', 'https://www.7wonders.net/wp-content/themes/seven-wonders/css/babel/boite-box-7-wonders-babel.png', 'Toutes les civilisations ont le regard tourné vers l’horizon où la somptueuse Tour de Babel \ns’érige lentement vers les cieux. Chaque joueur peut décider d’apporter ou non son aide à \ncette merveille commune en participant à sa construction et en finançant de prestigieux \nprojets annexes.\nBabel est composée de deux extensions qui peuvent être jouées ensemble ou séparément.\nLe jeu de base est nécessaire pour jouer.\nCette extension est compatible avec les autres extensions de 7 Wonders.', 114, '2 à 7 joueurs', '30 min à 1 heure', '', '10', 20, 4);

-- --------------------------------------------------------

--
-- Structure de la table `gamebox`
--

CREATE TABLE `gamebox` (
  `user_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `game_author`
--

CREATE TABLE `game_author` (
  `game_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `game_author`
--

INSERT INTO `game_author` (`game_id`, `author_id`) VALUES
(14, 29),
(14, 30),
(18, 29),
(18, 30),
(28, 29),
(28, 30);

-- --------------------------------------------------------

--
-- Structure de la table `game_category`
--

CREATE TABLE `game_category` (
  `game_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `game_category`
--

INSERT INTO `game_category` (`game_id`, `category_id`) VALUES
(14, 9),
(18, 9),
(28, 9);

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(49);

-- --------------------------------------------------------

--
-- Structure de la table `offer`
--

CREATE TABLE `offer` (
  `id` int(11) NOT NULL,
  `game` int(11) NOT NULL,
  `seller` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `detail` varchar(1000) NOT NULL,
  `price` float NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `offer`
--

INSERT INTO `offer` (`id`, `game`, `seller`, `state`, `detail`, `price`, `date`) VALUES
(34, 14, 2, 3, 'mlijngf', 252, '2020-06-06 15:36:06');

-- --------------------------------------------------------

--
-- Structure de la table `popular_games`
--

CREATE TABLE `popular_games` (
  `id` int(11) NOT NULL,
  `game` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `popular_games`
--

INSERT INTO `popular_games` (`id`, `game`, `date`) VALUES
(1, 14, '2020-06-06 00:00:00'),
(2, 18, '2020-06-06 00:00:00'),
(3, 28, '2020-06-06 00:00:00'),
(5, 28, '2020-06-03 00:00:00'),
(44, 28, '2020-06-06 17:41:24'),
(45, 28, '2020-06-06 17:43:31'),
(46, 28, '2020-06-06 17:46:03'),
(47, 28, '2020-06-06 17:46:30'),
(48, 18, '2020-06-06 17:50:54');

-- --------------------------------------------------------

--
-- Structure de la table `state`
--

CREATE TABLE `state` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `state`
--

INSERT INTO `state` (`id`, `name`) VALUES
(1, 'comme neuf'),
(2, 'utilisé'),
(3, 'abimé'),
(4, 'incomplet');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(128) NOT NULL,
  `mail_address` varchar(32) NOT NULL,
  `firstName` varchar(32) DEFAULT NULL,
  `lastName` varchar(32) DEFAULT NULL,
  `gender` varchar(12) DEFAULT NULL,
  `address` varchar(40) NOT NULL,
  `city` varchar(30) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `avatar` blob,
  `colour` varchar(12) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `banned` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `mail_address`, `firstName`, `lastName`, `gender`, `address`, `city`, `phone`, `avatar`, `colour`, `verified`, `banned`) VALUES
(1, 'youpi', '$2a$10$hpRvEfMWE09DRH5mffRDJeS6XnW6zaK447fiY6YXINTnSx2pbo.qK', 'azariel.malukker@gmail.com', 'Azariel', 'Malukker', NULL, 'zezazea', 'azeae', '0601000000', NULL, NULL, 0, 0),
(2, 'testt', '$2a$10$LQrjuHbTP0c9NCbPWpZRg.tRMcivvCevMtJZys.HIIwtLUbFSjupu', 'andrew.conan1@gmail.com', 'Andrew', 'Conan', NULL, 'Urizael', 'Bruz', '0666473256', NULL, NULL, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `users_categories`
--

CREATE TABLE `users_categories` (
  `id_user` int(11) NOT NULL,
  `id_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users_categories`
--

INSERT INTO `users_categories` (`id_user`, `id_category`) VALUES
(1, 4),
(1, 5),
(1, 6),
(2, 2),
(2, 4),
(2, 5),
(2, 7),
(2, 9);

-- --------------------------------------------------------

--
-- Structure de la table `whishlist`
--

CREATE TABLE `whishlist` (
  `user_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `best_game`
--
ALTER TABLE `best_game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_best_game` (`game`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `editor`
--
ALTER TABLE `editor`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `expansion`
--
ALTER TABLE `expansion`
  ADD PRIMARY KEY (`base_game_id`,`expansion_id`),
  ADD KEY `expansion_fk` (`expansion_id`),
  ADD KEY `base_game_fk` (`base_game_id`) USING BTREE;

--
-- Index pour la table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`,`name`,`editor`,`published`),
  ADD KEY `editor_fk` (`editor`);

--
-- Index pour la table `gamebox`
--
ALTER TABLE `gamebox`
  ADD PRIMARY KEY (`user_id`,`game_id`),
  ADD KEY `game_fk` (`game_id`);

--
-- Index pour la table `game_author`
--
ALTER TABLE `game_author`
  ADD PRIMARY KEY (`game_id`,`author_id`),
  ADD KEY `author_fk` (`author_id`);

--
-- Index pour la table `game_category`
--
ALTER TABLE `game_category`
  ADD PRIMARY KEY (`game_id`,`category_id`),
  ADD KEY `category_fk` (`category_id`);

--
-- Index pour la table `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `offer_game_fk` (`game`) USING BTREE,
  ADD KEY `state_fk` (`state`),
  ADD KEY `user_offer_fk` (`seller`);

--
-- Index pour la table `popular_games`
--
ALTER TABLE `popular_games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_popular_game` (`game`);

--
-- Index pour la table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `mailAdress` (`mail_address`);

--
-- Index pour la table `users_categories`
--
ALTER TABLE `users_categories`
  ADD PRIMARY KEY (`id_user`,`id_category`),
  ADD KEY `category_user_fk` (`id_category`);

--
-- Index pour la table `whishlist`
--
ALTER TABLE `whishlist`
  ADD PRIMARY KEY (`user_id`,`game_id`),
  ADD KEY `game_whishlist_fk` (`game_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `best_game`
--
ALTER TABLE `best_game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `editor`
--
ALTER TABLE `editor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT pour la table `offer`
--
ALTER TABLE `offer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT pour la table `popular_games`
--
ALTER TABLE `popular_games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT pour la table `state`
--
ALTER TABLE `state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `best_game`
--
ALTER TABLE `best_game`
  ADD CONSTRAINT `id_best_game` FOREIGN KEY (`game`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `expansion`
--
ALTER TABLE `expansion`
  ADD CONSTRAINT `base_game_fk` FOREIGN KEY (`base_game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `expansion_fk` FOREIGN KEY (`expansion_id`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `editor_fk` FOREIGN KEY (`editor`) REFERENCES `editor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `gamebox`
--
ALTER TABLE `gamebox`
  ADD CONSTRAINT `game_fk` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `game_author`
--
ALTER TABLE `game_author`
  ADD CONSTRAINT `author_fk` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `game_author_fk` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `game_category`
--
ALTER TABLE `game_category`
  ADD CONSTRAINT `category_fk` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `game_category_fk` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `offer`
--
ALTER TABLE `offer`
  ADD CONSTRAINT `game_offer_fk` FOREIGN KEY (`game`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `state_fk` FOREIGN KEY (`state`) REFERENCES `state` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_offer_fk` FOREIGN KEY (`seller`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `popular_games`
--
ALTER TABLE `popular_games`
  ADD CONSTRAINT `id_popular_game` FOREIGN KEY (`game`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `users_categories`
--
ALTER TABLE `users_categories`
  ADD CONSTRAINT `category_user_fk` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_category_fk` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `whishlist`
--
ALTER TABLE `whishlist`
  ADD CONSTRAINT `game_whishlist_fk` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_whishlist_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
