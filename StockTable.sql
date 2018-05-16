 CREATE TABLE `Stock` (
  `id` int(10) unsigned NOT NULL,
  `Quota` int(10) unsigned NOT NULL DEFAULT 0,
  `Sale` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  CONSTRAINT `CONSTRAINT_QuotabigthanSale` CHECK (`Quota` >= `Sale`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ; 
