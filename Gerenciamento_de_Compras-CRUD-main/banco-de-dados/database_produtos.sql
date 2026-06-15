
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "-03:00";


--
-- Banco de dados: `tungtungtungsahur`
--
CREATE DATABASE IF NOT EXISTS `tungtungtungsahur` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tungtungtungsahur`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `alunos`
--

CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` char(120) NOT NULL,
  `descricao` text,
  `preco` decimal(10,2) NOT NULL,
  `data_inclusao` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` ( `nome`, `descricao`, `preco`, `data_inclusao`) VALUES
('Café', 'Cafeína pura!', 30.00, '2026-01-01 00:00:00'),
('Arroz', 'Grão nutritivo!', 5.00, '2026-01-01 00:00:00'),
('Feijão', 'Grão nutritivo!', 7.00, '2026-01-01 00:00:00');
COMMIT;
