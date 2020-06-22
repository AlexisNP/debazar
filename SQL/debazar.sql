-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 22 juin 2020 à 10:19
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
(30, 'Miguel Coïmbra'),
(31, 'Kramer Wolfgang'),
(32, 'Vohwinkel Franz'),
(33, 'Cathala Bruno'),
(34, 'Lalet Michel'),
(35, 'Lévi Laurent'),
(36, 'Chevallier Charles'),
(37, 'Collette Xavier'),
(38, 'Rosenberg Uwe'),
(39, 'Franz Klemens'),
(40, 'Henn Dirk'),
(41, 'Tisch Christof'),
(42, 'Asselborn Jorg'),
(43, 'Menzel Michael'),
(44, 'Boelinger Christophe'),
(45, 'Quilliams Chris'),
(46, 'Ismaël'),
(47, 'Boulanger Vincent'),
(48, 'Mori Paolo'),
(49, 'Dutrait Vincent'),
(50, 'Moon Alan R.'),
(51, 'Delvel Julien'),
(52, 'Kiesling Michael'),
(53, 'Caplanne Jérémie'),
(54, 'Joubert Vincent'),
(55, 'Sciarra Emiliano'),
(56, 'Bleasdale Sebastian'),
(57, 'Zilber Denis'),
(58, 'Tavitian Bernard'),
(59, 'Demaeged Cyril'),
(60, 'Poinsot Stéphane'),
(61, 'Paul J. Gruen'),
(62, 'Koltze Rüdiger'),
(63, 'Bittler Bernard'),
(64, 'Oliver Grégory'),
(65, 'Maublanc Ludovic'),
(66, 'Mathieu Gérard'),
(67, 'Bogen Steffen'),
(68, 'Lohausen Denis'),
(69, 'Knizia Reiner'),
(70, 'Bruel François'),
(71, 'Fraga Roberto'),
(72, 'Lemonnier Yohan'),
(73, 'Tobal Ervin'),
(74, 'Tobal Sabrina'),
(75, 'Wrede Klaus-Jürgen'),
(76, 'Matthaüs Doris'),
(77, 'Attia William'),
(78, 'Weissblum Aaron'),
(79, 'Noir Gaetan'),
(80, 'Aouidad Karim'),
(81, 'Roussel Johan'),
(82, 'Bonneterre Marie-Ann'),
(83, 'Laget Serge'),
(84, 'Levet Yohan'),
(85, 'Naïade'),
(86, 'Faidutti Bruno'),
(87, 'Magnin Florence'),
(88, 'Mourier Jean-Louis'),
(89, 'Eising Jesper'),
(90, 'Stephan Claus'),
(91, 'Dennen Paul'),
(92, 'Croc'),
(93, 'Briclot Alexis'),
(94, 'Chvtil Vlaada'),
(95, 'Gantiez Stépphane'),
(96, 'Kucerovsky Tomas'),
(97, 'Teuber Klaus'),
(98, 'Donner Tanja'),
(99, 'Schelk Machaela');

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
(126, 'Ystari Games');

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
(14, 28),
(14, 31),
(14, 32),
(14, 33),
(34, 35),
(37, 38),
(40, 41),
(43, 44),
(47, 48),
(47, 49),
(65, 66),
(78, 79),
(78, 80);

-- --------------------------------------------------------

--
-- Structure de la table `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `image` text,
  `description` text,
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
(28, '7 Wonders : Babel', 'https://www.7wonders.net/wp-content/themes/seven-wonders/css/babel/boite-box-7-wonders-babel.png', 'Toutes les civilisations ont le regard tourné vers l’horizon où la somptueuse Tour de Babel \ns’érige lentement vers les cieux. Chaque joueur peut décider d’apporter ou non son aide à \ncette merveille commune en participant à sa construction et en finançant de prestigieux \nprojets annexes.\nBabel est composée de deux extensions qui peuvent être jouées ensemble ou séparément.\nLe jeu de base est nécessaire pour jouer.\nCette extension est compatible avec les autres extensions de 7 Wonders.', 114, '2 à 7 joueurs', '30 min à 1 heure', '', '10', 20, 4),
(30, '6 qui prend !', 'https://www.gigamic.com/files/catalog/products/images/homehightlight/gigamic_amsixq_six-qui-prend_facing.webp', 'Ces drôles de cartes valent de 1 à 7 «têtes de boeufs» chacune. \r\nVotre but : en récolter le moins possible.\r\nEn début de manche vous recevez 10 cartes. À chaque tour, les joueurs choisissent une \r\ncarte et la révèlent à tous en même temps : ces cartes sont ajoutées à l’une des 4 séries \r\nqui se forment sur la table. Celui qui doit jouer la sixième carte d’une série «récolte» les \r\n5 premières... et toutes leurs têtes de boeufs ! Quand les 10 cartes sont jouées, chacun\r\ncompte ses boeufs et les additionne à son total précédent. Après plusieurs manches, le \r\nplus petit troupeau gagnera la partie.', 51, '2 à 10 joueurs', '30 min', 'septembre 2001', '10', 15, 3),
(31, '7 Wonders : Cities', 'https://www.7wonders.net/wp-content/themes/seven-wonders/css/cities/7-wonders-cities-box-boite.png', 'Cette extension propose 27 nouveaux bâtiments, tous dotés d’effets inédits.\r\nOn trouve également 3 Guildes, 6 Leaders et 2 Merveilles. 7 Wonders Cities permet de jouer jusqu’à 8 simultanément et propose un mode de jeu par équipe.\r\nLes cartes Cities sont des cartes à fond noir et à chaque âge il y a autant de cartes Cities que de joueurs. On joue donc 7 cartes par âge et non plus 6.\r\nCes cartes sont prises aléatoirement parmi les neuf de chaque période, on ne connait donc pas les cartes en jeu. Si ces cartes ont des effets variés, on peut en distinguer trois majeurs : la paix qui permet de ne pas participer à la guerre à la fin de l\'âge, la perte d\'argent pour les autres joueurs et la copie de symboles scientifiques chez ses voisins lors du décompte final.\r\nCities peut se combiner avec l\'autre extension de 7 Wonders, Leaders, pour des parties toujours plus acharnées.', 114, '2 à 7 joueurs', '30 min à 1 heure', '', '10', 20, 3),
(32, '7 Wonders : Leaders', 'https://www.7wonders.net/wp-content/themes/seven-wonders/css/leaders/box-leaders.png', 'Leaders vous propose une nouvelle merveille et 36 cartes Leader déclenchant une nouvelle phase de jeu au début de chaque âge et qui amènent de nouvelles façons de jouer. \r\nCette extension de 7 Wonders vous offre la possibilité de placer de grandes personnalités à la tête de votre civilisation: les leaders.\r\nReprésentés par 36 nouvelles cartes, ils vont influencer, chacun à leur manière, le développement de votre cité. Le déroulement de la partie est légèrement modifié, mais les conditions de victoire restent identiques à celles du jeu de base.\r\nAu début de chaque âge, chaque joueur sélectionne un de ses leaders pour le poser devant lui (en payant son coût), pour le défausser afin de gagner 3 pièces ou pour construire un niveau de sa merveille. Ces leaders apportent des points de victoire, des symboles militaires ou scientifiques, des réductions pour jouer des cartes, des pièces, etc.', 114, '2 à 7 joueurs', '30 min à 1 heure', '', '10', 20, 3),
(33, '7 Wonders : Wonder pack', '', 'Bâtissez la Grande Muraille, dressez les pierres sacrées de Stonehenge, embaumez vos Leaders dans la pénombre d’Abu Simbel et redécouvrez une splendeur belge : Le Manneken Pis.\r\nCette extension de 7 Wonders vous propose 4 nouvelles merveilles.\r\nLa Grande Muraille vous permet une grande flexibilité car vous pouvez construire les étapes de cette merveille dans l\'ordre de votre choix.\r\nStonehenge va vous permettre de transformer vos pierres en points de victoire.\r\nAvec Abu Sibmel, vous pourrez enterrer vos Leaders pour gagner des points de victoire.\r\nEt le Manneken Pis est la version révisée du goodies sorti lors du salon d\'Essen 2010.', 114, '2 à 7 joueurs', '30 min à 1 heure', 'janvier 2013', '10', 20, 3),
(34, '7 Wonders Duel', 'https://www.7wondersduel.com/images/layout/box-boite-7-wonders-duel.png', 'Développez votre science et votre armée, construisez de prestigieux bâtiments et menez votre civilisation à la victoire.\r\n7 Wonders Duel est un jeu autonome dans l’univers de 7 Wonders, spécialement conçu pour 2 joueurs.', 114, '2 joueurs', '30 min', 'novembre 2015', '10', 25, 3),
(35, '7 Wonders Duel - Pantheon', 'https://www.7wondersduel.com/images/pantheon/box-7wonders-pantheon.png', 'Renouvelez vos parties de 7 Wonders Duel avec cette première extension.\r\nPeuplez le Panthéon composé de différentes Mythologies et utilisez la puissance des Divinités pour amener votre civilisation à son apogée. 7 Wonders Duel : Panthéon vous permettra d’utiliser des effets d’une puissance jamais égalée !\r\nAttirez-vous les faveurs des Divinités à l’aide d’offrandes ou subissez leur courroux !', 114, '2 joueurs', '30 min', '2016', '10', 25, 3),
(36, 'Abalone', 'https://images-fr-cdn.asmodee.com/eu-central-1/filer_public/51/90/5190d2ff-0d8e-4523-a014-31ef027aa723/ab02frn_plateau_72dpi_210617.png', 'Grand classique du jeu abstrait pour deux, Abalone vous invite à tenter d\'éjecter d\'un\r\n plateau hexagonal six billes de votre adversaire en les poussant avec les vôtres.', 9, '2 joueurs', '20 min', '1990', '7', 0, 3),
(37, 'Abyss', 'https://studiobombyx.com/assets/AbyssBox_3D-600x600.png', 'Depuis des siècles, des créatures règnent sans partage dans les profondeurs des océans. Leur Royaume, Abyss, est respecté par tous les peuples alliés, heureux d’y trouver une protection contre les redoutables monstres sous-marins.\r\nBientôt le Trône sera vacant… Et si c’était le moment de vous en emparer ?\r\nLe temps presse ! Plus que quelques jours avant la nomination du futur monarque. Pour étendre votre influence et apparaître comme le seul et unique recours, explorez, recrutez, contrôlez…', 14, '2 à 4 joueurs', '45 min', 'août 2014', '10', 40, 3),
(38, 'Abyss Kraken', 'https://studiobombyx.com/assets/Kraken_3Dbox-600x600.png', 'Le royaume d’Abyss est plus que jamais en proie aux conflits de pouvoir tandis que la corruption ne cesse d’étendre ses ramifications. La Guilde des contrebandiers, retirée au cœur d’un cimetière d’animaux titanesques, s’est alliée au Kraken pour développer le trafic des Nebulis. Ces précieuses perles noires peuvent asseoir votre puissance comme causer votre perte.\r\nVous pourrez choisir de vous corrompre pour accéder à de nouveaux pouvoirs et de nouveaux lieux, mais vous\r\nen paierez le prix en fin de partie. Si vous décidez de rester intègre, sachez que vos adversaires n’hésiteront\r\npas à écouler leurs Nebulis lors des transactions.', 14, '2 à 4 joueurs', '45 min', '2015', '10', 20, 3),
(39, 'Agricola', '', '', 126, '1 à 5 joueur', '120 min', 'juillet 2008', '12', 50, 3),
(40, 'Agricola- Terres d\'élevage', '', '', 126, '2 joueurs', '45 min', 'mai 2012', '12', 25, 3),
(41, 'Agricola- Terres d\'élevage : Extension bâtiments de ferme', '', '', 37, '2 joueurs', '30 min', 'octobre 2012', '12', 11, 3),
(42, 'Alhambra', '', '', 111, '2 à 6 joueurs', '45 min', '2003', '10', 32, 3),
(43, 'Andor', '', '', 70, '2 à 4 joueurs', '90 min', '2013', '10', 45, 3),
(44, 'Andor- Voyage vers le nord', '', '', 70, '2 à 4 joueurs', '90 min', '2014', '10', 45, 3),
(45, 'Archipelago', '', '', 76, '2 à 5 joueurs', '90 min', '2012', '14', 60, 3),
(46, 'Augustus', '', '', 89, '2 à 6 joueurs', '30 min', '2013', '8', 18, 3),
(47, 'Aventuriers du rail (les)', 'https://ncdn0.daysofwonder.com/tickettoride/fr/img/tt-box-296.png', 'Les Aventuriers du Rail est une série de jeux de trains emplis de choix cornéliens. Des règles tellement simples qu’elles tiennent sur un ticket de train, un matériel superbe et des illustrations remarquables contribuent tous à l’appel de l’aventure…', 31, '2 à 5 joueurs', '40 min', 'mars 2004', '8', 40, 3),
(48, 'Aventuriers du rail (les) : Europe', 'https://ncdn1.daysofwonder.com/tickettoride/fr/img/te-box-462.png', 'Parcourez les voies ferrées du continent européen dans cette extension du jeu Les aventuriers du rail.', 31, '2 à 5 joueurs', '40 min', 'mars 2004', '8', 40, 3),
(49, 'Aventuriers du rail (les) : Scandinavie', 'https://ncdn1.daysofwonder.com/tickettoride/fr/img/tn-box-462.png', 'Parcourez les voies ferrées de la péninsule scandinave dans cette extension du jeu Les aventuriers du rail.', 31, '2 à 5 joueurs', '40 min', 'septembre 2008', '8', 40, 3),
(50, 'Azul', '', '', 109, '2 à 4 joueurs', '30 min', '2017', '8', 0, 3),
(51, 'Baba Yaga', '', '', 110, '2 à 5 joueurs', '15 min', 'novembre 2013', '6', 23, 3),
(52, 'Bang !', '', '', 122, '4 à 7 joueurs', '30 min', 'octobre 2003', '10', 20, 3),
(53, 'Black Fleet', '', '', 118, '3 à 4 joueurs', '60 min', 'septembre 2014', '10', 50, 3),
(54, 'Blokus', '', '', 82, '2 à 4 joueurs', '20 min', '2000', '8', 38, 3),
(55, 'Bohnanza : le bizness des haricots', '', '', 51, '2 à 7 joueurs', '60 min', 'octobre 2003', '12', 16, 3),
(56, 'Bombay', '', '', 126, '2 à 5 joueurs', '45 min', 'mars 2009', '10', 40, 3),
(57, 'Bonne paie (la)', '', '', 83, '2 à 6 joueurs', '90 min', '1996', '8', 29, 3),
(58, 'Boursicocotte', '', 'Il fait beau temps ce matin, tant mieux, la foire aux bestiaux va pouvoir commencer sous\r\n les meilleurs auspices. Chacun est arrivé de bonne heure, et a déchargé de sa \r\ncamionnette les animaux qu\'il va mettre en vente. Déjà, les pastagas remplissent les \r\nverres, et le fumet des saucisses grillées excite les papilles et ce n\'est pas parce que \r\nvous êtes tout endimanché qu\'il ne faudra pas parier, enchérir, bluffer, et tenter de lire la \r\ntactique des autres maquignons sur leur visage chafouin!', 11, '3 à 5 joueurs', '45 min', 'juillet 2003', '10', 15, 3),
(59, 'Bubblee Pop', 'https://bankiiiz.com/wordpress/wp-content/uploads/2016/08/boite-%C3%A9clat%C3%A9-1024x768.png', 'Ce monde merveilleux, aux planètes figées dans des saisons éternelles, est le lieu de vie des bubblees.\r\nLes Bubblees sont de petites créatures rondes et colorées aux pouvoirs étranges.\r\nElles flottent dans le Ciel, tout autour des Planètes et finissent par tomber de bulle en bulle, attirées par la pesanteur.\r\nLe hasard faisant, lors de leur arrivée sur les Planètes les Bubblees égarent souvent leurs semblables…\r\nVous devrez les rassembler, les aligner par couleurs, etvous assurer de faire atterrir le plus de Bubblees possible sur le sol', 12, '1 à 2 joueurs', '30 min', 'septembre 2016', '8', 20, 3),
(60, 'Burger Quizz', '', '', 74, '2 à 10 joueurs', '60 min', '2002', '15', 0, 3),
(61, 'Ca$h and Gun$', '', '', 114, '4 à 6 joueurs', '30 min', 'octobre 2005', '10', 40, 3),
(62, 'Camel Up', '', '', 37, '2 à 8 joueurs', '30 min', '2014', '8', 0, 3),
(63, 'Camelot', 'https://images-fr-cdn.asmodee.com/eu-central-1/filer_public/ce/92/ce9200b1-4ee5-4c66-bf16-1110e0e523d9/cam01n_box3d_web_211015.png', 'Gérez votre jeu de carte pour remporter une victoire dans cinq combats de chevaliers: \r\nà cheval, à l\'épée, à la hache, au fléau et à main nue! Tandis que les partisans et les \r\ndames vous soutiennent, jouez les meilleurs cartes de combats pour charger, esquiver,\r\nfeinter, désarçonner...', 11, '2 à 5 joueurs', '30 min', 'novembre 2010', '10', 0, 3),
(64, 'Captain Sonar', '', '', 80, '2 à 8 joueurs', '45 min', '2016', '14', 40, 3),
(65, 'Carcassonne', 'http://www.edgeent.com/home/check_public_big_img/carc01n_right_amf?timestamp=1590758924787', 'Cité du sud de la France, Carcassonne est célèbre pour ses extraordinaires fortifications de l’époque romaine et du Moyen  ge. Avec leurs partisans qui tentent de s’approprier des routes, villes, abbayes et prés, les joueurs se disputent le contrôle de la région de Carcassonne.\r\n\r\nMaîtrisez le développement du territoire en étant le plus malin dans le placement de vos partisans !\r\n\r\nVos brigands, chevaliers, moines et paysans vous mèneront à la victoire ! ', 33, '2 à 5 joueurs', '40 min', 'mars 2001', '8', 23, 3),
(66, 'Carcassonne : Marchands et Bâtisseurs', '', '', 37, '2 à 5 joueurs', '40 min', '2010', '8', 13, 3),
(67, 'Caylus', '', '', 126, '2 à 5 joueurs', '120 min', 'octobre 2005', '12', 35, 3),
(68, 'Celestia', '', '', 57, '2 à 6 joueurs', '30 min', '2015', '8', 0, 3),
(69, 'Chasse aux gigamons (la)', '', '', 34, '2 à 4 joueurs', '15 min', 'août 2014', '5', 20, 3),
(70, 'Chevaliers de la table ronde (les)', 'https://ncdn1.daysofwonder.com/shadowsovercamelot/fr/img/SoC-home_picture1.jpg', 'Les Chevaliers de la Table Ronde, le jeu coopératif... avec un félon !\r\n\r\nIncarnez l\'un des célèbres Chevaliers de la Table Ronde et tentez de protéger Camelot des forces du mal !\r\n\r\nPour cela, il vous faudra accomplir de nombreuses quêtes telles que la recherche d\'Excalibur, du Saint Graal ou de l\'armure de Lancelot , le tournoi contre le Chevalier Noir , les guerres contre les Pictes ou les Saxons et le combat contre le dragon.\r\n\r\nSoyez prudents, cependant... L\'un de vous pourrait en effet se révéler être un redoutable traître, véritable félon au service du mal, sous ses apparences trompeuses de preux chevalier!', 31, '3 à 7 joueurs', '90 min', 'mai 2005', '10', 50, 3),
(71, 'Cigale et la fourmis (la)', '', '', 110, '2 à 4 joueurs', '25 min', 'mars 2015', '8', 0, 3),
(72, 'Citadelles', '', '', 123, '2 à 8 joueurs', '60 min', 'décembre 2003', '14', 20, 3),
(73, 'Cités perdues (les)', '', '', 37, '1 à 2 joueurs', '30 min', 'mai 2007', '10', 25, 3),
(74, 'Clank !', '', '', 113, '2 à 4 joueurs', '60 min', '2017', '12', 50, 3),
(75, 'Claustrophobia', 'https://images-fr-cdn.asmodee.com/eu-central-1/filer_public/92/17/92173d99-c072-41bd-920b-5f3570bf75ab/boites_versions_1644.jpg', 'Dans ce jeu de survie tactique, l\'un des joueurs dirige le groupe d\'humains qui explore les lugubres couloirs infernaux et affronte un flot incessant de troglodytes, alors que son adversaire incarne les démons qui prennent d\'assaut ces aventuriers.\r\n\r\nFort d\'un matériel prêt à jouer et de figurines peintes, Claustrophobia est un jeu de plateau facile d\'accès à la mise en place plus rapide que le Millenium Falcon. \r\nNé d\'un subtil mélange entre mécanismes allemands (gestion des caractéristiques des personnages) et américains (aspect aléatoire de la résolution des combats), Claustrophobia ravira les amateurs d\'affrontements tactiques.\r\n\r\nLes six scénarios inclus dans le jeu vous permettront d\'explorer des heures durant les sous-sols de l\'enfer dans une ambiance délicieusement lugubre ! ', 11, '2 joueurs', '60 min', 'décembre 2009', '14', 50, 3),
(76, 'Cochon qui rit (le)', 'https://www.jeuxdujardin.fr/sites/dujardin/files/images/CQR-Jabouzzi-Pack-png_0.png', 'Comment jouer au Cochon Qui Rit ?\r\nLa construction du cochon qui rit se fait pièce par pièce (membre par membre !).\r\nLes dés affichant 6 donnent le droit au joueur de commencer à assembler son cochon, les as lui permettent de placer les \" attributs\" : pattes, oreilles, yeux...\r\nPour avoir le droit de placer la queue, il faut faire deux as.\r\nLe gagnant est celui qui est le premier à avoir reconstitué son cochon !', 32, '', '', '1932', '', 0, 3),
(77, 'Codenames', '', '', 70, '2 à 8 joueurs', '15 min', '2016', '12', 20, 3),
(78, 'Colons de Catane (les)', 'http://www.edgeent.com/sisimg/public/images/ficat01_catan_base_right_fr.png', 'À la conquête de nouvelles terres !\r\n\r\nIncarnez l’un des premiers colons de l’île de CATAN. Explorez des territoires riches en ressources, commercez, construisez des routes et fondez des colonies qui deviendront par la suite de somptueuses villes. Mais vous n’êtes pas seul sur l’île. D’autres  colons cherchent également à s’approprier les meilleures terres afin de développer leurs propres domaines. À chaque partie, vous découvrirez une toute nouvelle île pleine de surprises !\r\n\r\nDes millions de joueurs à travers le monde ont déjà foulé le sol de CATAN. C’est désormais à votre tour d’embarquer pour CATAN !', 33, '3 à 4 joueurs', '75 min', 'mai 2001', '10', 39, 3),
(79, 'Colons de Catane (les)  : Les marins de Catane', '', '', 122, '3 à 4 joueurs', '90 min', '1997', '12', 34, 3),
(80, 'Colons de Catane (les)  : Villes et chevaliers', '', '', 122, '3 à 4 joueurs', '120 min', 'novembre 2003', '10', 36, 3);

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
(28, 30),
(30, 31),
(30, 32),
(31, 29),
(31, 30),
(32, 29),
(32, 30),
(33, 29),
(33, 30),
(34, 29),
(34, 33),
(35, 29),
(35, 33),
(36, 34),
(36, 35),
(37, 33),
(37, 36),
(37, 37),
(38, 33),
(38, 36),
(38, 37),
(39, 38),
(39, 39),
(40, 38),
(40, 39),
(41, 38),
(41, 39),
(42, 40),
(42, 41),
(42, 42),
(43, 43),
(44, 43),
(45, 44),
(45, 45),
(45, 46),
(45, 47),
(46, 48),
(46, 49),
(47, 50),
(47, 51),
(48, 50),
(48, 51),
(49, 50),
(49, 51),
(50, 45),
(50, 52),
(51, 53),
(51, 54),
(52, 55),
(53, 56),
(53, 57),
(54, 58),
(55, 38),
(56, 59),
(56, 60),
(57, 61),
(58, 62),
(58, 63),
(59, 64),
(61, 65),
(61, 66),
(62, 67),
(62, 68),
(63, 69),
(63, 70),
(64, 71),
(64, 72),
(64, 73),
(64, 74),
(65, 75),
(65, 76),
(66, 75),
(66, 76),
(67, 77),
(68, 78),
(68, 79),
(69, 80),
(69, 81),
(69, 82),
(70, 33),
(70, 83),
(71, 84),
(71, 85),
(72, 51),
(72, 86),
(72, 87),
(72, 88),
(72, 89),
(73, 69),
(73, 90),
(74, 91),
(75, 92),
(75, 93),
(77, 94),
(77, 95),
(77, 96),
(78, 32),
(78, 97),
(79, 32),
(79, 97),
(80, 97),
(80, 98),
(80, 99);

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
(28, 9),
(30, 9),
(31, 9),
(32, 9),
(33, 9),
(34, 8),
(34, 9),
(35, 8),
(35, 9),
(36, 5),
(37, 8),
(38, 8),
(39, 8),
(40, 5),
(41, 5),
(42, 8),
(43, 8),
(44, 8),
(45, 8),
(46, 8),
(47, 8),
(48, 8),
(49, 8),
(50, 8),
(51, 2),
(52, 9),
(53, 8),
(54, 4),
(55, 9),
(56, 8),
(57, 8),
(58, 2),
(59, 2),
(59, 5),
(60, 9),
(61, 8),
(62, 8),
(63, 9),
(64, 8),
(65, 8),
(66, 8),
(67, 8),
(68, 2),
(68, 8),
(69, 2),
(70, 8),
(71, 2),
(72, 9),
(73, 8),
(73, 9),
(74, 9),
(75, 8),
(77, 9),
(78, 8),
(79, 8),
(80, 8);

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
(54);

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
(34, 14, 2, 3, 'mlijngf', 252, '2020-06-06 15:36:06'),
(50, 18, 2, 1, 'hgfbdvw', 12, '2020-06-07 11:34:05'),
(51, 28, 2, 2, 'lkjhgfdsq', 12, '2020-06-07 17:38:24');

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
(48, 18, '2020-06-06 17:50:54'),
(53, 48, '2020-06-19 12:35:08');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT pour la table `popular_games`
--
ALTER TABLE `popular_games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

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
