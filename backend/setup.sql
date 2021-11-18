CREATE TABLE IF NOT EXISTS `boats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `boats` (`color`, `brand`, `name`) VALUES
('hotpink', 'Brabus', 'Die wilde Luzy'),
('red', 'Yamaha', 'Boaty McBoatface'),
('green', 'Kawasaki', 'The Boat');