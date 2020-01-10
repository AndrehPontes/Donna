<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'donna cinta');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'root');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', '');

/** Nome do host do MySQL */
define('DB_HOST', 'localhost');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'u=n2u*k} fzWktu: c=fa,u<xpJ!g423nvqG/a!1.6^jyQj,nt7&iG>Sic;8#G/?');
define('SECURE_AUTH_KEY',  ')PY`?fQ?P$0$.W(>,e5br5dk/]/r tL7o(u{CI|[eI{D6TZ_ 2K^xyP-#nK-`81R');
define('LOGGED_IN_KEY',    '#:iFt<J[tbvT:.)Dy~n}~p|NOwmvNZ$UIGQ73@X0mFNdE=~V#?nMxffvkc1j}KU^');
define('NONCE_KEY',        '^lB#GTT7)x5L/o8:-yK9w4=(c mg3eL^`$`,$;q}MW8`H(:__{*_>PF2)O,L!k%T');
define('AUTH_SALT',        'vZOZ/aG#J;{6U65k1-u((:7@;r;lgeD#D#8}H?&hL02(+):{4V-VfZ6TNDkKR|O=');
define('SECURE_AUTH_SALT', 'cmc~IEVhzQwv_JyHRh:6>b110K#b|S$Y#jd!nN=T1eg*)5o:8czTTY17xE%q1%]Y');
define('LOGGED_IN_SALT',   'vq{Sq8^&OS`r:d>DzoIBoG<_x{D^_X6 &H%*&F#Ko]OSvsVT@|4d)8^O>eUM2q[l');
define('NONCE_SALT',       'fEW,l HP#TR&/>j8sqlvqY+f;S%k+&q;Ek^9(%e]Mts*s^J5$%TL%c^>:6m6j&B]');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
