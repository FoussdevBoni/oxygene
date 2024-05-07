-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 28 avr. 2023 à 12:57
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `presta`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_categorie` int(11) NOT NULL,
  `nom_categorie` varchar(255) DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id_categorie`, `nom_categorie`, `icone`) VALUES
(1, 'AGRICULTURE ET AGROALIMENTAIRE', 'files/categories/agro.jpeg'),
(2, 'MINES ET CONSTRUCTION', 'files/categories/construction.jpeg'),
(3, 'METAUX ET ELECTROMECANIQUE', 'files/categories/metaux.jpeg'),
(4, 'BOIS ET MOBILIER', 'files/categories/bois.jpeg'),
(5, 'TEXTILE ET HABILLEMENT', 'files/categories/textile.jpg'),
(6, 'COMMUNICATION AUDIOVISUEL', 'files/categories/communication.jpeg'),
(7, 'HYGIENE ET SOINS', 'files/categories/hygiene.jpeg'),
(8, 'ART ET DECORATION', 'files/categories/art.jpeg'),
(9, 'TRANSPORT ET LOGISTIQUE', 'files/categories/transport.jpg'),
(10, 'EVENEMENTS', 'files/categories/evennement.jpeg'),
(11, 'EDUCATION', 'files/categories/education.jpeg');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `id_commentaire` int(11) NOT NULL,
  `id_photo` int(11) DEFAULT NULL,
  `id_personne` int(11) DEFAULT NULL,
  `commentaire` text DEFAULT NULL,
  `heure_commentaire` time NOT NULL,
  `date_commentaire` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`id_commentaire`, `id_photo`, `id_personne`, `commentaire`, `heure_commentaire`, `date_commentaire`) VALUES
(1, 66, 29, 'waooo c&#039;est vraiment chic', '17:04:05', '2023-04-27'),
(2, 66, 29, 'waooo c&#039;est vraiment chic', '17:06:23', '2023-04-27'),
(3, 61, 29, 'c&#039;est bon j&#039;ai kiffé ta réalisation', '17:07:41', '2023-04-27'),
(4, 61, 29, 'c&#039;est bon j&#039;ai kiffé ta réalisation', '17:09:51', '2023-04-27'),
(5, 61, 24, 'cool', '17:11:36', '2023-04-27'),
(6, 61, 24, 'cool', '17:12:09', '2023-04-27');

-- --------------------------------------------------------

--
-- Structure de la table `demande`
--

CREATE TABLE `demande` (
  `id_demande` int(11) NOT NULL,
  `id_metier` int(11) NOT NULL,
  `descriptio` text CHARACTER SET utf8 DEFAULT NULL,
  `departement` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `commune` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `arrondissement` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `id_auteur` int(11) NOT NULL,
  `id_recepteur` int(11) DEFAULT NULL,
  `date_demande` date DEFAULT current_timestamp(),
  `heure_demande` time NOT NULL DEFAULT current_timestamp(),
  `statut_demande` varchar(30) NOT NULL DEFAULT 'EN ATTENTE'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `demande`
--

INSERT INTO `demande` (`id_demande`, `id_metier`, `descriptio`, `departement`, `commune`, `arrondissement`, `id_auteur`, `id_recepteur`, `date_demande`, `heure_demande`, `statut_demande`) VALUES
(3, 3, 'oknnjnjn', 'MONO', 'ATHIEME', 'ADOHOUN', 27, NULL, '2023-04-21', '01:04:27', 'EN ATTENTE'),
(4, 3, 'J\'ai besoin d\'un jarginer c\'est vraiment urgent pour moi.', 'BORGOU', 'PARAKOU', 'IER ARRONDISSEMENT', 27, 9, '2023-04-21', '01:04:48', 'REGLEE'),
(5, 3, 'okheu', 'OUEME', 'AVRANKOU', 'SADO', 25, NULL, '2023-04-21', '01:05:43', 'EN ATTENTE'),
(20, 3, 'okkkkkkk  kkkkkkkkkkkkk kkkkkkkkkk kkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkk kkkkkkkk  kkkkkkkk kkkkk kkkk', 'ATACORA', 'KEROU', 'BRIGNAMARO', 29, NULL, '2023-04-21', '17:07:21', 'EN ATTENTE'),
(21, 2, 'Jai besoin dun service dagricuteur', 'PLATEAU', 'IFANGNI', 'LAGBA', 29, NULL, '2023-04-22', '11:24:41', 'EN ATTENTE'),
(23, 14, 'j\'ai beaucoup à vous offrir ', 'COUFFO', 'DJAKOTOMEY', 'GOHOMEY', 29, NULL, '2023-04-22', '12:16:08', 'EN ATTENTE'),
(24, 9, 'j\'ai beaucoup à vous offrir , beaucoup je vous dit', 'PLATEAU', 'IFANGNI', 'BANIGBE', 29, NULL, '2023-04-22', '12:58:09', 'EN ATTENTE'),
(26, 3, 'je veux demander quelques chose', 'BORGOU', 'PARAKOU', 'IER ARRONDISSEMENT', 29, NULL, '2023-04-22', '14:23:30', 'ANNULEE'),
(27, 3, 'J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client ', 'BORGOU', 'PARAKOU', 'IER ARRONDISSEMENT', 24, 14, '2023-04-22', '14:42:19', 'REGLEE'),
(28, 3, 'J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client  J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client J\'ai besoin d\'un coup de main dans mon boulot pour vite libérer un client ', 'BORGOU', 'PARAKOU', '2EME ARRONDISSEMENT', 24, 14, '2023-04-22', '14:44:56', 'REGLEE'),
(29, 1, 'mes demande', 'MONO', 'COME', 'OUMAKO', 27, NULL, '2023-04-22', '15:12:14', 'EN ATTENTE'),
(30, 3, 'quelqu\'un pour m\'arroser mon jardin', 'BORGOU', 'PARAKOU', '3EME ARRONDISSEMENT', 29, 9, '2023-04-22', '15:15:15', 'REGLEE'),
(31, 3, 'grggffgfgfgdggv  bcgd ', 'BORGOU', 'PARAKOU', '2EME ARRONDISSEMENT', 27, 9, '2023-04-22', '15:17:23', 'REGLEE'),
(32, 49, 'j\'ai besoin d\'un brodeur rapidement', 'PLATEAU', 'IFANGNI', 'DAAGBA', 27, NULL, '2023-04-23', '01:10:28', 'EN ATTENTE'),
(40, 3, 'j\'ai besoin d\'aide', 'BORGOU', 'PARAKOU', '2EME ARRONDISSEMENT', 25, 9, '2023-04-24', '12:54:13', 'REGLEE'),
(41, 3, 'Quelqu\'un peut m\'aider?', 'BORGOU', 'PARAKOU', 'IER ARRONDISSEMENT', 25, 9, '2023-04-24', '12:54:58', 'REGLEE'),
(42, 3, 'j\'ai besoin d\'aide, j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide', 'BORGOU', 'PARAKOU', '2EME ARRONDISSEMENT', 25, 9, '2023-04-24', '12:54:13', 'REGLEE'),
(43, 3, 'Quelqu\'un peut m\'aider?\r\nQuelqu\'un peut m\'aider?\r\nQuelqu\'un peut m\'aider?', 'BORGOU', 'PARAKOU', 'IER ARRONDISSEMENT', 25, 9, '2023-04-24', '12:54:58', 'REGLEE'),
(44, 3, 'j\'ai besoin d\'aide', 'BORGOU', 'PARAKOU', '2EME ARRONDISSEMENT', 12, 9, '2023-04-24', '12:54:13', 'REGLEE'),
(45, 3, 'Quelqu\'un peut m\'aider?', 'BORGOU', 'PARAKOU', 'IER ARRONDISSEMENT', 11, 9, '2023-04-24', '12:54:58', 'REGLEE'),
(46, 3, 'j\'ai besoin d\'aide, j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide j\'ai besoin d\'aide', 'BORGOU', 'PARAKOU', '2EME ARRONDISSEMENT', 23, 9, '2023-04-24', '12:54:13', 'REGLEE'),
(47, 3, 'Quelqu\'un peut m\'aider?\r\nQuelqu\'un peut m\'aider?\r\nQuelqu\'un peut m\'aider?', 'BORGOU', 'PARAKOU', 'IER ARRONDISSEMENT', 24, 14, '2023-04-24', '12:54:58', 'REGLEE'),
(48, 3, 'j\'ai b', 'BORGOU', 'PARAKOU', '2EME ARRONDISSEMENT', 25, 14, '2023-04-25', '12:56:44', 'REGLEE'),
(49, 3, 'je lance une demande', 'LITTORAL', 'COTONOU', '11EME ARRONDISSEMENT', 24, NULL, '2023-04-26', '04:57:39', 'EN ATTENTE'),
(50, 3, 'Besoin d\'un jardin ', 'BORGOU', 'SINENDE', 'SEKERE', 29, NULL, '2023-04-26', '04:58:47', 'ANNULEE'),
(51, 18, 'je demande encore un service', 'PLATEAU', 'KETOU', 'KETOU', 29, NULL, '2023-04-26', '05:34:26', 'EN ATTENTE'),
(52, 1, 'je suis encore au top', 'MONO', 'COME', 'OUMAKO', 29, NULL, '2023-04-26', '05:53:18', 'EN ATTENTE'),
(53, 14, 'je demande ', 'ATACORA', 'NATITINGOU', 'PEPORIYAKOU', 29, NULL, '2023-04-26', '17:43:31', 'EN ATTENTE'),
(54, 16, 'ok', 'ATACORA', 'TOUKOUNTOUNA', 'KOUARFA', 29, NULL, '2023-04-26', '18:35:11', 'EN ATTENTE'),
(55, 13, 'je veux ', 'LITTORAL', 'COTONOU', '8EME ARRONDISSEMENT', 29, NULL, '2023-04-26', '23:44:34', 'EN ATTENTE'),
(57, 1, 'salut youssofa, moi c\'est Donné', 'DONGA', 'BASSILA', 'PENESSOULOU', 29, 12, '2023-04-27', '01:05:39', 'EN ATTENTE'),
(58, 3, 'Salut Richard. Je suis intéressé ? ', 'DONGA', 'BASSILA', 'BASSILA CENTRE', 29, 9, '2023-04-27', '01:07:09', 'REGLEE'),
(59, 1, 'Salut youssouf j\'ai besoin de ? ', 'ZOU', 'AGBANGNIZOUN', 'TANVE', 24, 12, '2023-04-27', '12:49:52', 'ANNULEE'),
(60, 3, 'je demande un service', 'BORGOU', 'PARAKOU', 'IER ARRONDISSEMENT', 24, 14, '2023-04-27', '16:03:47', 'REGLEE'),
(61, 3, 'j\'ai besoin de ', 'ATLANTIQUE', 'OUIDAH', 'OUIDAH II', 24, NULL, '2023-04-27', '16:27:23', 'EN ATTENTE'),
(62, 3, 'Salut donné', 'COLLINES', 'GLAZOUE', 'ZAFFE', 24, 14, '2023-04-27', '16:28:01', 'REGLEE'),
(63, 3, 'Salut donné broo ', 'ZOU', 'BOHICON', 'SACLO', 24, 14, '2023-04-27', '16:28:21', 'REGLEE');

-- --------------------------------------------------------

--
-- Structure de la table `demandes`
--

CREATE TABLE `demandes` (
  `id_demande` int(11) NOT NULL,
  `id_personne` int(11) DEFAULT NULL,
  `id_prestataire` int(11) DEFAULT NULL,
  `description` text NOT NULL,
  `metier_demande` varchar(255) NOT NULL,
  `departement` varchar(255) NOT NULL,
  `commune` varchar(255) NOT NULL,
  `arrondissement` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `heure_demande` time NOT NULL,
  `date_demande` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id_message` int(11) NOT NULL,
  `message_envoye` text DEFAULT NULL,
  `id_destinateur` int(11) NOT NULL,
  `id_destinataire` int(11) NOT NULL,
  `date_message` date NOT NULL,
  `heure_message` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id_message`, `message_envoye`, `id_destinateur`, `id_destinataire`, `date_message`, `heure_message`) VALUES
(1, 'SALUT 🤝 à toute et à tous', 29, 27, '2023-04-25', '04:00:58'),
(2, 'ok actuellement ', 29, 27, '2023-04-25', '04:01:16'),
(3, 'ohh c&#039;est cool 😎 😎😎', 29, 27, '2023-04-25', '04:01:42'),
(4, 'now', 27, 29, '2023-04-25', '04:03:48'),
(5, 'au nom c&#039;est cool', 29, 27, '2023-04-25', '04:05:55'),
(6, 'Les gars je suis là', 29, 27, '2023-04-25', '04:06:34'),
(7, 'salut boss c&#039;est comment ? lunette de soleil ☀ ☀ ☀ ', 29, 24, '2023-04-25', '04:07:48'),
(8, 'cool 😎 cool 🆒 ', 29, 24, '2023-04-25', '04:08:07'),
(9, 'ok cool', 27, 29, '2023-04-25', '04:09:29'),
(10, 'salut rich c&#039;est comment', 27, 24, '2023-04-25', '04:09:54'),
(11, 'salut Alain et les cours ça avance?', 27, 12, '2023-04-25', '04:11:36'),
(12, 'salut Alain et les cours ça avance?', 24, 12, '2023-04-25', '04:18:16'),
(13, 'merci bro', 24, 29, '2023-04-25', '04:18:48'),
(14, 'ok compris', 24, 27, '2023-04-25', '04:24:10'),
(15, 'oui oui', 24, 29, '2023-04-25', '04:24:27'),
(16, 'ok', 29, 24, '2023-04-25', '04:25:24'),
(17, 'non', 29, 27, '2023-04-25', '04:25:36'),
(18, 'salut ', 29, 12, '2023-04-25', '04:26:19'),
(19, 'non', 24, 29, '2023-04-25', '04:36:05'),
(20, 'ok', 24, 27, '2023-04-25', '04:36:21'),
(21, 'donne moi ça', 24, 29, '2023-04-25', '04:36:45'),
(22, 'comment ', 24, 12, '2023-04-25', '04:37:09'),
(23, 'cc chef', 29, 25, '2023-04-25', '12:59:42'),
(24, 'oui _ok 👍  cool 😎 ', 29, 25, '2023-04-25', '13:00:11'),
(25, 'bon ok', 25, 29, '2023-04-25', '13:01:43'),
(26, 'pas la peine', 29, 25, '2023-04-25', '13:10:02'),
(27, 'ok', 29, 25, '2023-04-25', '13:16:28'),
(28, 'plus de détails ', 29, 27, '2023-04-25', '13:21:45'),
(29, 'non', 29, 27, '2023-04-25', '13:21:58'),
(30, 'non', 29, 24, '2023-04-25', '14:29:14'),
(31, 'bon ok', 29, 27, '2023-04-25', '14:29:26'),
(32, 'non', 29, 24, '2023-04-25', '14:31:19'),
(33, 'non', 29, 24, '2023-04-25', '14:33:41'),
(34, 'oui bro', 29, 25, '2023-04-25', '16:07:18'),
(35, 'oui bro', 29, 12, '2023-04-25', '16:07:47'),
(36, 'd&#039;accord 👍 ', 24, 29, '2023-04-25', '16:11:29'),
(37, 'salut bro', 24, 9, '2023-04-25', '16:12:01'),
(38, 'non je m&#039;en fou', 29, 27, '2023-04-25', '16:12:56'),
(39, 'ok compris', 29, 25, '2023-04-25', '16:17:35'),
(40, 'cool', 29, 24, '2023-04-25', '16:17:48'),
(41, 'Je suis d&#039;accord 👍 👍 👍 👍 h😂 ', 29, 27, '2023-04-25', '16:19:14'),
(42, 'NON', 29, 25, '2023-04-25', '16:19:26'),
(43, 'ok', 29, 24, '2023-04-25', '16:19:39'),
(44, 'voilà ', 29, 25, '2023-04-25', '16:20:49'),
(45, 'cool', 29, 27, '2023-04-25', '16:21:02'),
(46, 'non non non', 29, 24, '2023-04-25', '16:21:21'),
(47, 'Je suis d&#039;accord 👍 👍 👍 👍 h😂 ', 29, 27, '2023-04-25', '16:23:12'),
(48, 'Paul je suis là', 24, 27, '2023-04-25', '16:40:49'),
(49, 'ok cool', 29, 24, '2023-04-25', '16:42:51'),
(50, 'bon pas mal', 24, 9, '2023-04-25', '16:55:43'),
(51, 'Je suis d&#039;accord 👍 👍 👍 👍 ', 24, 29, '2023-04-25', '17:00:00'),
(52, 'NON', 24, 29, '2023-04-25', '17:00:25'),
(53, 'cool', 24, 12, '2023-04-25', '17:00:47'),
(54, 'ok compris', 29, 24, '2023-04-26', '05:01:31'),
(55, 'viens', 29, 27, '2023-04-26', '05:03:14'),
(56, 'cool on avance ', 29, 24, '2023-04-26', '05:04:13'),
(57, 'non c&#039;est bon', 29, 25, '2023-04-26', '05:07:40'),
(58, 'cool', 29, 27, '2023-04-26', '05:29:45'),
(59, 'Je suis d&#039;accord 👍 👍 👍 👍 h😂 ', 29, 27, '2023-04-26', '17:08:45'),
(60, 'non je m&#039;en fou', 29, 27, '2023-04-26', '17:08:52'),
(61, 'non je m&#039;en fou', 29, 27, '2023-04-26', '17:09:48'),
(62, 'Je suis d&#039;accord 👍 👍 👍 👍 ', 29, 24, '2023-04-27', '16:42:12');

-- --------------------------------------------------------

--
-- Structure de la table `metiers`
--

CREATE TABLE `metiers` (
  `id_metier` int(11) NOT NULL,
  `nom_metier` varchar(255) NOT NULL,
  `image_metier` varchar(255) DEFAULT NULL,
  `descriptio` text NOT NULL,
  `id_categorie` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `metiers`
--

INSERT INTO `metiers` (`id_metier`, `nom_metier`, `image_metier`, `descriptio`, `id_categorie`) VALUES
(1, 'Agriculteurs', NULL, 'travaillent sur des exploitations agricoles pour cultiver et récolter des produits tels que les fruits, les légumes, les céréales et les viandes', 1),
(2, 'Pepinineristes', NULL, 'cultivent des plantes en serre ou en pepinineristes, notamment des arbres, des arbustes, des fleurs, des legumes et des plantes ornementales', 1),
(3, 'Jardiniers', NULL, 'entretiennent et embellissent les jardins, les parcs, les terrains de golf et les espaces publics en plantant et en entretenant des fleurs, des arbres et des arbustes', 1),
(4, 'Cuisiniers', NULL, 'préparent des plats et des menus en utilisant des ingrédients frais et divers pour répondre aux demandes des clients ou des consommateurs ', 1),
(5, 'Restaurateurs', NULL, 'exploitent des restaurants, des cafés et des établissements de restauration en proposant des plats, des menus et des boissons à  la clientèle', 1),
(6, 'Pâtissiers', NULL, 'préparent et cuisent des desserts, des pâtisseries et des viennoiseries en utilisant des ingrédients tels que le sucre, la farine, les oeufs et le beurre   ', 1),
(7, 'Maçons', NULL, 'construisent des bâtiments ou des maisons en utilisant des matériaux tels que la brique, la pierre, le béton et le mortier ', 2),
(8, 'Architectes', NULL, 'conçoivent des plans pour des bâtiments et des structures en utilisant des logiciels de conception assistée par ordinateur(CAO) et en travaillant en collaboration avec les clients et ingénieurs', 2),
(9, 'Tailleurs de pierre', NULL, 'découpent et taillent des pierres pour les utiliser dans la construction de bâtiments et de monuments ', 2),
(10, 'Fabricants de brique en ciment', NULL, 'produisent des briques et des blocs de construction en ciment en utilisant des moules et des machines spéciales ', 2),
(11, 'Carreleurs', NULL, 'posent des carreaux de céramique, de porcelaine ou de pierre sur des murs, des sols et des surfaces pour créer des motifs et des designs attrayants', 2),
(12, 'Charpentiers', NULL, 'construisent des structures en bois telles que des charpentes, des poutres, des planchers, des portes et des fenêtres', 2),
(13, 'Coffreurs', NULL, 'construisent des moules en bois pour le béton armé dans le cadre de projets de construction ', 2),
(14, 'Crépisseurs', NULL, 'appliquent des couches de plâtre ou de crépi sur des murs et des plafonds pour créer des surfaces lisses et uniformes', 2),
(15, 'Dessinateurs-bâtiments', NULL, 'ils créent des plans pour la construction de bâtiments', 2),
(16, 'Electriciens bâtiment', NULL, 'ils installent, entretiennent et réparent les installations électriques dans les bâtiments', 2),
(17, 'Ferrailleurs', NULL, 'ils collectent, trient et recyclent les métaux', 2),
(18, 'Peintres-bâtiments', NULL, 'ils peignent les surfaces intérieures et extérieures des bâtiments', 2),
(19, 'Plombiers', NULL, 'ils installent, entretiennent et réparent les installations de plomberie dans les bâtiments', 2),
(20, 'Poseurs de serrures', NULL, 'ils installent et réparent les serrures sur les portes et les fenêtres', 2),
(21, 'Staffeurs', NULL, 'ils créent des décors en plâtre pour les bâtiments', 2),
(22, 'Vitriers', NULL, 'ils installent et réparent les vitres des bâtiments', 2),
(23, 'Forgeron', NULL, 'ils fabriquent et réparent des objets en métal', 3),
(24, 'Charpentiers métalliers', NULL, 'ils fabriquent et installent des structures en métal', 3),
(25, 'Soudeurs', NULL, 'ils joignent des métaux en utilisant un processus de fusion', 3),
(26, 'Tailliers', NULL, 'ils travaillent sur des surfaces en métal pour créer des formes et des designs', 3),
(27, 'Chargeurs de batterie', NULL, 'ils chargent les batteries pour les véhicules et autres équipements', 3),
(28, 'Electriciens auto moto', NULL, 'ils installent, entretiennent et réparent les systèmes électriques des véhicules', 3),
(29, 'Peintres auto moto', NULL, 'ils peignent les surfaces des voitures et des motos', 3),
(30, 'Réparateurs de pare-brise et de phare', NULL, 'ils réparent les pare-brise et les phares des véhicules', 3),
(31, 'Réparateurs de plastiques de véhicules et de cyclomoteurs', NULL, 'ils réparent les plastiques des véhicules et des cyclomoteurs', 3),
(32, 'Réparateurs de vélos', NULL, 'ils réparent les vélos', 3),
(33, 'Réparateurs et mécaniciens de véhicules', NULL, 'ils réparent et entretiennent les véhicules', 3),
(34, 'Spécialistes de casse-auto ', NULL, 'ils démontent les voitures pour récupérer les pièces', 3),
(35, 'Spécialistes de pompes injection', NULL, 'ils réparent et entretiennent les pompes à  injection', 3),
(36, 'Vulcanisteurs', NULL, 'ils réparent les pneus en utilisant une méthode de réparation appelée vulcanisation', 3),
(37, 'Horlogers', NULL, 'ils réparent et entretiennent les montres et les horloges', 3),
(38, 'Installations de matériels de sécurité et de télésurveillance ', NULL, 'ils installent des systèmes de sécurité et de télésurveillance', 3),
(39, 'Installateurs et maintenanciers de matériels  informatiques', NULL, 'ils installent et réparent les ordinateurs et les équipements informatiques', 3),
(40, 'Installateurs et maintenanciers de panneaux solaires', NULL, 'ils installent et entretiennent les panneaux solaires', 3),
(41, 'Laveurs autos, motos, moquettes', NULL, 'ils lavent les voitures, les motos et les moquettes', 3),
(42, 'Poseurs et réparateurs de serrure électroniques', NULL, 'ces professionnels installent et réparent des serrures électroniques pour les portes et autres ouvertures, utilisant des outils spécialisés  et des compétences techniques pour assurer la sécurité et la fonctionnalité des serrures', 3),
(43, 'Réparateurs de gazinià¨res ', NULL, 'Ils réparent les gazinières, les fours et les autres appareils de cuisson, diagnostiquant et résolvant les problèmes de fonctionnement et de sécurité.', 3),
(44, 'Réparateurs de machines à  coudre, à  broder et à  surfiler', NULL, 'Ils réparent les machines à  coudre, les machines à  broder et les machines à  surfiler, assurant leur bon fonctionnement et leur performance.', 3),
(45, 'Réparateurs de machines diverses ', NULL, 'Ils réparent différents types de machines, telles que les machines à  laver, les séchoirs, les réfrigérateurs, les climatiseurs, les pompes et autres équipements industriels.', 3),
(46, 'Frigoristes', NULL, 'Ils installent, entretiennent et réparent les systèmes de climatisation et de réfrigération, tels que les congélateurs, les réfrigérateurs et les climatiseurs, utilisant des outils et des compétences techniques spécialisés', 3),
(47, 'Rebobineurs', NULL, 'Ils réparent les moteurs électriques et les générateurs, en remplaçant les pièces défectueuses et en diagnostiquant les problèmes de performance', 3),
(48, 'Charbonniers', NULL, 'Ils fabriquent et vendent du charbon de bois, en utilisant des techniques de carbonisation pour transformer le bois en charbon de bois', 4),
(49, 'Brodeurs', NULL, 'Les brodeurs sont des artisans qui créent des motifs décoratifs sur différents types de tissus en utilisant des fils de différentes couleurs. Ils peuvent travailler à  la main ou avec des machines à  broder', 5),
(50, 'Modélistes/Stylistes', NULL, 'Les modélistes ou stylistes sont des professionnels de la mode qui conçoivent des vêtements et des accessoires. Ils peuvent dessiner des croquis, travailler avec des tissus et superviser la production de leurs créations', 5),
(51, 'Tapissiers', NULL, 'Les tapissiers sont des artisans qui travaillent avec des tissus et des matériaux pour créer et réparer des meubles rembourrés, tels que des canapés, des fauteuils et des chaises', 5),
(52, 'Graveurs', NULL, 'Les graveurs sont des artisans qui utilisent des outils pour graver des motifs sur différents types de surfaces, tels que le métal, le bois, le verre et le plastique', 6),
(53, 'Imprimeurs Photographes', NULL, 'Les imprimeurs photographes sont des professionnels qui impriment des images sur différents types de supports, tels que le papier, le tissu et le métal.', 6),
(54, 'Tresseurs modernes', NULL, 'Les tresseurs modernes sont des coiffeurs spécialisés dans la création de tresses pour les cheveux afro. Ils utilisent des techniques modernes et des outils pour créer une variété de styles de tresses, allant des tresses simples aux tresses complexes avec des motifs géométriques. Ils peuvent travailler dans des salons de coiffure ou des studios spécialisés dans la coiffure afro', 7),
(55, 'Tresseurs traditionnels', NULL, 'Les tresseurs traditionnels sont des coiffeurs qui utilisent des techniques de tressage traditionnelles pour créer des styles de tresses pour les cheveux afro. Ils peuvent travailler dans des salons de coiffure ou des studios spécialisés dans la coiffure afro, et utilisent souvent des matériaux naturels tels que le fil ou la corde pour créer des tresses durables.', 7),
(56, 'Fabricants de savons', NULL, 'Les fabricants de savons sont des professionnels qui produisent des savons, qui sont des produits utilisés pour se laver et se nettoyer. Ils utilisent des huiles, des graisses et des produits chimiques pour créer des savons qui sont doux pour la peau et qui ont une odeur agréable', 7),
(57, 'Circonciseurs', NULL, 'Les circonciseurs sont des professionnels qui pratiquent la circoncision, qui est une opération chirurgicale qui consiste à  enlever le prépuce chez les hommes. Cette procédure est généralement effectuée pour des raisons religieuses ou culturelles, ou pour des raisons médicales', 7),
(58, 'Esthéticiens ', NULL, 'Les esthéticiens sont des professionnels de la beauté qui prodiguent des soins esthétiques, comme des soins du visage, des massages, des épilations, des manucures et des pédicures. Ils travaillent généralement dans des salons de beauté ou des spas', 7),
(59, 'Spécialistes de soins de beauté', NULL, 'Les spécialistes de soins de beauté sont des professionnels qui prodiguent des soins esthétiques avancés, comme des traitements anti-âge, des soins du corps, des traitements capillaires et des soins de la peau.', 7),
(60, 'Spécialiste de pressing ', NULL, 'Les spécialistes de pressing sont des professionnels qui nettoient et pressent les vêtements et autres articles en tissu tels que les draps, les couvertures, les nappes et les rideaux. Ils peuvent également effectuer des réparations mineures, comme le remplacement de boutons', 7),
(61, 'Fabricants de jeux et jouets ', NULL, 'Les fabricants de jeux et jouets sont des professionnels qui créent et vendent des jeux et des jouets pour enfants et adultes, tels que des poupées, des peluches, des jeux de société, des puzzles et des jouets éducatifs.', 8),
(62, 'Sculpteurs et décorateurs sur tous matériaux', NULL, 'ces professionnels créent des sculptures et des décorations sur divers matériaux, comme la pierre, le bois, le métal, la céramique, etc.', 8),
(63, 'Teinturiers', NULL, 'ce métier consiste à  colorer les tissus, les fibres et autres matériaux', 8),
(64, 'Armuriers (fabricants de fusils traditionnels) ', NULL, 'ce métier consiste à  fabriquer et réparer des armes à  feu, en particulier des fusils.', 8),
(65, 'Restaurateurs de murailles des palais royaux ', NULL, 'ce métier consiste à  réparer et restaurer les murs des palais historiques et des autres bâtiments anciens', 8),
(66, 'Décorateurs des véhicules et de lieux ', NULL, 'ce métier consiste à  décorer et aménager des véhicules, des bateaux, des avions, des bâtiments, des événements, etc.', 8),
(67, 'Décorateurs sur vitre', NULL, 'ce métier consiste à  décorer des vitres de bâtiments, de voitures, de trains, etc.', 8),
(68, 'Dessinateurs', NULL, 'ce métier consiste à  dessiner des plans, des croquis, des illustrations, des personnages, des graphismes, etc', 8),
(69, 'Fleuristes', NULL, 'ce métier consiste à  créer des compositions florales pour des occasions spéciales ou pour la décoration', 8),
(70, 'Peintre-calligraphes et peintre-dessinateurs', NULL, 'ces professionnels réalisent des peintures à  la main, que ce soit des paysages, des portraits, des motifs décoratifs ou des calligraphies.', 8),
(71, 'Transporteurs (gros porteurs)', NULL, 'Les transporteurs (gros porteurs) sont des entreprises spécialisées dans le transport de marchandises à  grande échelle. Ils utilisent des camions, des remorques et des autres équipements lourds pour transporter des marchandises sur de longues distances. Les transporteurs peuvent offrir des services nationaux ou internationaux.', 9),
(72, 'Humoriste', NULL, 'Un humoriste est un artiste dont le métier est de faire rire son public en utilisant diverses techniques comiques, telles que des blagues, des jeux de mots, des imitations, des sketches, des parodies ou des personnages humoristiques. Les humoristes peuvent se produire sur scène, à  la télévision, à  la radio ou sur les réseaux sociaux. Ils doivent souvent écrire et répéter leur matériel pour améliorer leur performance', 10),
(73, 'Animateur', NULL, 'Un animateur est une personne qui dirige et organise les activité de loisir, de divertissement, d\'éducation ou d\'information pour un public. Les animateurs peuvent travailler dans une variété de domaines tels que  l\'animation socioculturelle, l\'animation touristique, l\'animation sportive, l\'animation périscolaire ou l\'animation en entreprise. Ils doivent être capable de communiquer efficacement avec les gens, d\'organiser des évènements, de planifier  des activités et de travailler en équipe.', 10);

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
  `id_notification` int(11) NOT NULL,
  `id_personne` int(11) NOT NULL,
  `image_notifiction` varchar(255) NOT NULL,
  `objet` text NOT NULL,
  `detail` text NOT NULL,
  `lien_notification` varchar(250) NOT NULL,
  `heure_notification` time NOT NULL DEFAULT current_timestamp(),
  `date_notification` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `notifications`
--

INSERT INTO `notifications` (`id_notification`, `id_personne`, `image_notifiction`, `objet`, `detail`, `lien_notification`, `heure_notification`, `date_notification`) VALUES
(1, 24, 'files/identite/profil.jpg', 'Donné DOUHOU', ' est disponible pour répondre à votre demande : \"Jardiniers...\"Vous pouvez le contacter pour être satisfait', '../profil_prestataire.php?personne=29&metier=3', '16:42:05', '2023-04-27'),
(2, 24, 'files/identite/profil.jpg', 'Donné DOUHOU', ' est disponible pour répondre à votre demande : \"Jardiniers...\"Vous pouvez le contacter pour être satisfait', '../profil_prestataire.php?personne=29&metier=3', '16:42:33', '2023-04-27'),
(3, 24, 'files/identite/profil.jpg', 'Donné DOUHOU', ' est disponible pour répondre à votre demande : \"Jardiniers...\" Vous pouvez le contacter pour être satisfait', '../profil_prestataire.php?personne=29&metier=3', '16:46:39', '2023-04-27'),
(4, 9, 'files/identite/profil.jpg', 'Donné DOUHOU', 'a commenter votre réalisation : \"Au boulot\"', '../realisation.php?realisation=66&personne=9&metier=1', '17:06:23', '2023-04-27'),
(5, 24, 'files/identite/profil.jpg', 'Donné DOUHOU', 'a commenter votre réalisation : \"Au boulot\"', '../realisation.php?realisation=61&personne=24&metier=3', '17:07:41', '2023-04-27'),
(6, 24, 'files/identite/profil.jpg', 'Donné DOUHOU', 'a commenter votre réalisation : \"Au boulot\"', '../realisation.php?realisation=61&personne=24&metier=3', '17:09:51', '2023-04-27');

-- --------------------------------------------------------

--
-- Structure de la table `prestataire`
--

CREATE TABLE `prestataire` (
  `id_prestataire` int(11) NOT NULL,
  `id_metier` int(11) DEFAULT NULL,
  `id_personne` int(11) DEFAULT NULL,
  `typepiece` varchar(255) NOT NULL,
  `piece_url` varchar(255) NOT NULL,
  `statut_presta` varchar(100) NOT NULL DEFAULT 'EN ATTENTE',
  `date_fonction` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `prestataire`
--

INSERT INTO `prestataire` (`id_prestataire`, `id_metier`, `id_personne`, `typepiece`, `piece_url`, `statut_presta`, `date_fonction`) VALUES
(8, 1, 12, 'CNI', 'files/piecesSituation geographique 2.png', 'EN ATTENTE', '2023-04-16 17:42:37'),
(9, 3, 24, 'CNI', 'files/piecessituation geographique.png', 'EN FONCTION', '2023-04-16 17:42:37'),
(10, 1, 9, 'CNI', 'files/piecesSituation geographique 2.png', 'EN FONCTION', '2023-04-16 17:42:37'),
(11, 3, 8, 'CNI', 'files/piecessituation geographique.png', 'EN FONCTION', '2023-04-16 17:42:37'),
(12, 1, 23, 'CNI', 'files/piecesSituation geographique 2.png', 'EN FONCTION', '2023-04-16 17:42:37'),
(13, 4, 25, 'CNI', 'files/piecesagent-1.jpg', 'EN FONCTION', '2023-04-18 22:22:17'),
(14, 3, 29, 'CNI', 'files/piecesportfolio-8.jpg', 'EN FONCTION', '2023-04-21 01:27:21'),
(15, 4, 27, 'CNI', 'files/piecesCapture.PNG', 'EN ATTENTE', '2023-04-28 12:55:45'),
(16, 4, 27, 'CNI', 'files/piecesCapture.PNG', 'EN ATTENTE', '2023-04-28 12:56:26');

-- --------------------------------------------------------

--
-- Structure de la table `realisations`
--

CREATE TABLE `realisations` (
  `id_photo` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `descriptio` text NOT NULL,
  `id_personne` int(11) DEFAULT NULL,
  `id_metier` int(11) DEFAULT NULL,
  `date_realisation` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `realisations`
--

INSERT INTO `realisations` (`id_photo`, `photo`, `descriptio`, `id_personne`, `id_metier`, `date_realisation`) VALUES
(59, 'files/property-4.jpg', 'toujours disponible                                   ', 24, 3, '2023-04-16 03:00:50'),
(60, 'files/property-9.jpg', 'veillez me contacter                                   ', 24, 3, '2023-04-16 03:04:08'),
(61, 'files/about-1.jpg', 'Au boulot', 24, 3, '2023-04-16 03:20:28'),
(62, 'files/about-1.jpg', 'Au boulot', 24, 1, '2023-04-16 03:20:28'),
(63, 'files/property-4.jpg', 'Disponible pour vos demamdes                                  ', 8, 1, '2023-04-16 03:00:50'),
(64, 'files/property-9.jpg', 'Je suis disponible ohh                               ', 12, 1, '2023-04-16 03:04:08'),
(65, 'files/about-1.jpg', 'Je suis toujours disponibles  pour vous satisfaire, je suis un professionnel dans mon domaine', 23, 1, '2023-04-16 03:20:28'),
(66, 'files/about-1.jpg', 'Au boulot', 9, 1, '2023-04-16 03:20:28'),
(67, 'files/post-3.jpg', 'A l\'aise dans vos jardin                                   ', 24, 1, '2023-04-16 03:20:28'),
(70, 'files/post-4.jpg', 'De quoi avez-vous besoin                                   ', 9, 3, '2023-04-16 18:53:26'),
(72, 'files/portfolio-9.jpg', 'Je peux vous cuisiner des plats exceptionnels', 25, 4, '2023-04-18 23:09:20'),
(73, 'files/portfolio-2.jpg', 'j\'ai beaucoup de chose à vous montrer', 29, 3, '2023-04-22 11:28:29'),
(74, 'files/portfolio-2.jpg', 'j\'ai beaucoup de chose à vous montrer', 29, 3, '2023-04-22 11:29:58'),
(75, 'files/portfolio-2.jpg', 'j\'ai beaucoup de chose à vous montrer', 29, 3, '2023-04-22 11:30:46'),
(76, 'files/portfolio-5.jpg', 'je vous propose le meilleur', 29, 3, '2023-04-22 11:43:30'),
(77, 'files/portfolio-5.jpg', 'je vous propose le meilleur', 29, 3, '2023-04-22 11:44:12'),
(78, 'files/portfolio-5.jpg', 'je vous propose le meilleur', 29, 3, '2023-04-22 11:44:34'),
(79, 'files/slide-2.jpg', 'Et puis c\'est partie pour tous', 24, 3, '2023-04-28 02:41:13'),
(80, 'files/slide-2.jpg', 'Et puis c\'est partie pour tous', 24, 3, '2023-04-28 02:43:10'),
(81, 'files/property-1.jpg', 'une réalisation ajouter avec succès ', 24, 3, '2023-04-28 02:44:23'),
(82, 'files/about-2.jpg', 'Bon ?\r\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odio nostrum in? In libero magnam quas? Ullam aspernatur, magnam autem culpa exercitationem nostrum soluta reiciendis optio quos adipisci rem alias facere, laboriosam laudantium. Consectetur error fuga quae vel saepe dolores. Asperiores quia officiis hic nisi modi culpa dolorum voluptates sapiente?\r\n', 24, 3, '2023-04-28 02:47:30'),
(83, 'files/agent-5.jpg', 'OK c\'est partie', 24, 3, '2023-04-28 02:51:19');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id_personne` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(256) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `departement` varchar(255) DEFAULT NULL,
  `commune` varchar(255) DEFAULT NULL,
  `arrondissement` varchar(255) DEFAULT NULL,
  `mp` varchar(255) DEFAULT NULL,
  `mpConfirm` varchar(255) DEFAULT NULL,
  `is_presta` tinyint(1) NOT NULL,
  `profil` varchar(200) NOT NULL DEFAULT 'files/identite/profil.jpg',
  `biographie` varchar(300) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `date_inscription` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id_personne`, `nom`, `prenom`, `contact`, `departement`, `commune`, `arrondissement`, `mp`, `mpConfirm`, `is_presta`, `profil`, `biographie`, `status`, `date_inscription`) VALUES
(8, 'SOULE', 'Younoussa', '344444444', 'alibori', 'Banikoara', 'Toura', '$2y$10$Razc.FF4DWwNwjlKzhUc4.GvcZTRAe.1LfX2Yf1MSEHnE36QYRx0y', NULL, 1, 'files/identite/profil.jpg', '', NULL, '2023-04-01 14:44:58'),
(9, 'DIALLO', 'SOumaïla', '2324534545', 'alibori', 'Banikoara', 'Gomparou', '$2y$10$dWw8dVnexEZGKdKSvW8l0uyU4jfkriM5EwB4NPykesO05Ixw1WuKC', '$2y$10$4kxGX7CPbuvuqL/bDcqxo.PJV01bIOjCc.QY5Dmt3oqMiyQVfUxzu', 1, 'files/identite/profil.jpg', '', NULL, '2023-04-25 14:44:58'),
(11, 'SOULE', 'Simon', '355667778', 'alibori', 'Banikoara', 'Gomparou', '$2y$10$r5qANXeGmHjD3zKR/KGn2ex2ID2sNWNPVwi1uI/YHlzdDcXJ7friy', '$2y$10$FnZx/oe3Svbrq62TTv2gUOGu.HDuemGLswkfvbhdIDzMNKD10m1Em', 0, 'files/identite/profil.jpg', '', NULL, '2023-04-04 14:44:58'),
(12, 'Ntcha', 'Alain', '55667788', 'alibori', 'Malanville', 'Malanville', '$2y$10$H0l0qjx0g0UpAYuIiu44GePWgXoWmCiqesvXmNMvifflmYHW737Bq', '$2y$10$p6KA0gQLoX/LLqH2ja6Lque5TvgT4iS17Ez28h8h4XvfnZ6O3PMr6', 1, 'files/identite/profil.jpg', '', NULL, '2023-04-11 14:44:58'),
(19, 'SOULE', 'Diallo', '4535353554434454', 'alibori', 'BANIKOARA', 'Toura', '$2y$10$vNVyrAIP27PFY20Q8.G0xOgwftqQwVFGAUWyv9wzie1TCt.sMq3eu', '$2y$10$FGh2DEqGHyyy0mHNMohkJupybgjNlLto6vi8U3hZ5un08sEa8VkFC', 0, 'files/identite/profil.jpg', '', NULL, '2023-04-05 14:44:58'),
(20, 'SOULE', 'Diallo', '4535353554434454', 'alibori', 'BANIKOARA', 'Toura', '$2y$10$sXtCV0F9rtU60H2YDYbUcObHiW8.zQggN2i1OVhsxYWnUY.plYinS', '$2y$10$sQfVQ/NOBQDEaIqyZ13qjuDe.DHupZWn6D0YdH2jsCk5gHz7EiTIW', 0, 'files/identite/profil.jpg', '', NULL, '2023-04-27 14:44:58'),
(21, 'SESSOU', 'Richard', '53962757', 'alibori', 'BANIKOARA', 'Goumori', '$2y$10$mD8D6f.KYeUYrSWgv87ZnOr/Dg0Z4fyu1IrtnNrMwa88jpKZtL4f.', '$2y$10$SWyvIcLmih7r./i86VE9cuCYyt1esis0HJRRaWKx7TG2sThXtEoEO', 0, 'files/identite/profil.jpg', '', NULL, '2023-04-30 14:44:58'),
(22, 'DIALLO', 'SOumaïla', '44556677', 'LITTORAL', 'COTONOU', '4EME ARRONDISSEMENT', '$2y$10$c/LzPB5Pgmk57qgHahHynOUUVTjq9uMcYdZC8UtkqKDMtI7KwHfda', '$2y$10$Fl7F0hZkt9S55yLBwrSKMu8u9i6uE3vZ0.Uu7O/BEVWOSFVKTtiCi', 0, 'files/identite/profil.jpg', '', NULL, '2023-04-18 14:44:58'),
(23, 'HAMADOU', 'Younoussa', '445533', 'LITTORAL', 'COTONOU', '2EME ARRONDISSEMENT', '$2y$10$DE2lyPI54O7lVMkAnEXl7OES.GxrkBU3PyvZ9S1wD4kEMZXDZB6DW', '$2y$10$1eHJwjSvpJrymuOsC4z1P.AZn.NAnCfW1jkTxPuZg2d6E9hsWL.zi', 1, 'files/identite/profil.jpg', '', NULL, '2023-04-11 14:44:58'),
(24, 'SESSOU', 'Richard', '67027672', 'BORGOU', 'PARAKOU', 'IER ARRONDISSEMENT', '$2y$10$AkxqmL8n/fhiC9xgoiazcexP4LnhyR4C9BDMOsN61MvwF.Y61fyQ2', '$2y$10$kZ0CtHYshvJOAqEJTlHKwOksAJabFDmLghF3pdkA482mAQ54Vx.pe', 1, 'files/identite/profil.jpg', '???? je suis un pro dans mon domaine, je taille bien les fleurs ????', NULL, '2023-04-18 14:44:58'),
(25, 'DANSOU', 'Albert', '97493514', 'ATLANTIQUE', 'ABOMEY-CALAVI', 'OUEDO', '$2y$10$U6OTOWCgODEIBmOHW.BNXeuJTFy/WzBmi03Bf0ARfFAKfIn.tgQB.', '$2y$10$o0vGWBwpjzBf0snhMGe0KuBmRRRMsuWW6IB62dh6A6.e4W2kO9.lS', 1, 'files/identite/profil.jpg', '', NULL, '0000-00-00 00:00:00'),
(26, 'BONOU', 'Paul', '97493514', 'ALIBORI', 'BANIKOARA', 'OUNET', '$2y$10$puzlagBcXwwr0uryKeEjEurUwdK4kgHZ5hzU2x1EYR4yokb5XAInK', '$2y$10$4u/WeExTQwjfin2evfx3Q..8tEar/.HDXTg7n/oc1f8WoOpiEWMFO', 0, 'files/identite/profil.jpg', '', NULL, '0000-00-00 00:00:00'),
(27, 'BONOU', 'Paul', '97493515', 'OUEME', 'ADJOHOUN', 'ADJOHOUN', '$2y$10$owqE7z0ZWOypgzkHllVsNO7PdmlgxuxdGidbPFJ9t4w.us4.Dt6IS', '$2y$10$MEj9c6Hl5zQjhKiCs8I1K.hxgmxZYpYgDsp0STmdHJSR/iwxf3USO', 1, 'files/identite/profil.jpg', '', NULL, '0000-00-00 00:00:00'),
(28, 'DOHOU', 'Dieu-Donné', '67027672', 'LITTORAL', 'COTONOU', '2EME ARRONDISSEMENT', '$2y$10$3QGFAVzvMyBUjD7AYhqCO.3k5QEw5Y0499oysDIdG.4MxLX3nRU1K', '$2y$10$aBtmlCw8YAuSiTBwrRvU3.UdqocQdRJsGl766.f6hXQa3ubTWj/Ga', 0, 'files/identite/profil.jpg', '', NULL, '0000-00-00 00:00:00'),
(29, 'DOUHOU', 'Donné', '97493516', 'MONO', 'COME', 'OUEDEME-PEDAH', '$2y$10$AvQCNiepA7.OzWX/xuXzS.O47QnazhZQkNusbPf10mQ77VIybSc/m', '$2y$10$PkhIeNI8vUIt8xZMhuxn9OLuh4lTPXtcccf.VMHgcGPTmgDqRPOEy', 1, 'files/identite/profil.jpg', 'Je suis un vrai jardinier', NULL, '0000-00-00 00:00:00');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id_commentaire`),
  ADD KEY `fk_commentaires_realisations` (`id_photo`),
  ADD KEY `fk_commentaires_utilisateurs` (`id_personne`);

--
-- Index pour la table `demande`
--
ALTER TABLE `demande`
  ADD PRIMARY KEY (`id_demande`),
  ADD KEY `fk_demandes_metier` (`id_metier`),
  ADD KEY `fk_demandes_utilisateur` (`id_auteur`),
  ADD KEY `fk_demandes_prestataire` (`id_recepteur`);

--
-- Index pour la table `demandes`
--
ALTER TABLE `demandes`
  ADD PRIMARY KEY (`id_demande`),
  ADD KEY `fk_demandes_utilisateurs` (`id_personne`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id_message`),
  ADD KEY `fk_messages_utilisateurs` (`id_destinateur`);

--
-- Index pour la table `metiers`
--
ALTER TABLE `metiers`
  ADD PRIMARY KEY (`id_metier`),
  ADD KEY `fk_metiers_categories` (`id_categorie`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id_notification`),
  ADD KEY `fk_notifications_utilisateurs` (`id_personne`);

--
-- Index pour la table `prestataire`
--
ALTER TABLE `prestataire`
  ADD PRIMARY KEY (`id_prestataire`),
  ADD KEY `fk_prestataire_utilisateurs` (`id_personne`),
  ADD KEY `fk_perstataire_metiers` (`id_metier`);

--
-- Index pour la table `realisations`
--
ALTER TABLE `realisations`
  ADD PRIMARY KEY (`id_photo`),
  ADD KEY `fk_metier_realisations` (`id_metier`),
  ADD KEY `fk_utilisateurs_realisations` (`id_personne`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id_personne`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id_commentaire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `demande`
--
ALTER TABLE `demande`
  MODIFY `id_demande` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id_message` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT pour la table `metiers`
--
ALTER TABLE `metiers`
  MODIFY `id_metier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id_notification` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `prestataire`
--
ALTER TABLE `prestataire`
  MODIFY `id_prestataire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `realisations`
--
ALTER TABLE `realisations`
  MODIFY `id_photo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id_personne` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD CONSTRAINT `fk_commentaires_realisations` FOREIGN KEY (`id_photo`) REFERENCES `realisations` (`id_photo`),
  ADD CONSTRAINT `fk_commentaires_utilisateurs` FOREIGN KEY (`id_personne`) REFERENCES `utilisateurs` (`id_personne`);

--
-- Contraintes pour la table `demande`
--
ALTER TABLE `demande`
  ADD CONSTRAINT `fk_demandes_metier` FOREIGN KEY (`id_metier`) REFERENCES `metiers` (`id_metier`),
  ADD CONSTRAINT `fk_demandes_prestataire` FOREIGN KEY (`id_recepteur`) REFERENCES `prestataire` (`id_prestataire`),
  ADD CONSTRAINT `fk_demandes_utilisateur` FOREIGN KEY (`id_auteur`) REFERENCES `utilisateurs` (`id_personne`);

--
-- Contraintes pour la table `demandes`
--
ALTER TABLE `demandes`
  ADD CONSTRAINT `fk_demandes_utilisateurs` FOREIGN KEY (`id_personne`) REFERENCES `utilisateurs` (`id_personne`);

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `fk_messages_utilisateurs` FOREIGN KEY (`id_destinateur`) REFERENCES `utilisateurs` (`id_personne`);

--
-- Contraintes pour la table `metiers`
--
ALTER TABLE `metiers`
  ADD CONSTRAINT `fk_metiers_categories` FOREIGN KEY (`id_categorie`) REFERENCES `categories` (`id_categorie`);

--
-- Contraintes pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `fk_notifications_utilisateurs` FOREIGN KEY (`id_personne`) REFERENCES `utilisateurs` (`id_personne`);

--
-- Contraintes pour la table `prestataire`
--
ALTER TABLE `prestataire`
  ADD CONSTRAINT `fk_perstataire_metiers` FOREIGN KEY (`id_metier`) REFERENCES `metiers` (`id_metier`),
  ADD CONSTRAINT `fk_prestataire_utilisateurs` FOREIGN KEY (`id_personne`) REFERENCES `utilisateurs` (`id_personne`);

--
-- Contraintes pour la table `realisations`
--
ALTER TABLE `realisations`
  ADD CONSTRAINT `fk_metier_realisations` FOREIGN KEY (`id_metier`) REFERENCES `metiers` (`id_metier`),
  ADD CONSTRAINT `fk_utilisateurs_realisations` FOREIGN KEY (`id_personne`) REFERENCES `utilisateurs` (`id_personne`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
