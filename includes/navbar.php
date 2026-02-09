<?php
// includes/navbar.php
require_once __DIR__ . "/session.php";

// Detect current page for active link highlighting
$current_page = basename($_SERVER["PHP_SELF"]);
?>

<nav class="navbar">
  <div class="container">
    <a href="<?php echo BASE_URL; ?>/index.php" class="nav-logo">
      <div class="nav-logo-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      </div>
      <span class="nav-logo-text"><?php echo APP_NAME; ?></span>
    </a>

    <div class="nav-links">
      <a href="<?php echo BASE_URL; ?>/index.php"
        class="nav-link <?php echo ($current_page === 'index.php') ? 'active' : ''; ?>">Home</a>

      <a href="<?php echo BASE_URL; ?>/pages/books.php"
        class="nav-link <?php echo ($current_page === 'books.php') ? 'active' : ''; ?>">Browse Books</a>

      <a href="<?php echo BASE_URL; ?>/pages/about.php"
        class="nav-link <?php echo ($current_page === 'about.php') ? 'active' : ''; ?>">About</a>

      <a href="<?php echo BASE_URL; ?>/pages/contact.php"
        class="nav-link <?php echo ($current_page === 'contact.php') ? 'active' : ''; ?>">Contact</a>
    </div>

    <div class="nav-cta">
      <?php if (isset($_SESSION["user"])): ?>
        <a href="<?php echo BASE_URL; ?>/pages/wishlist.php" class="btn btn-outline">My Wishlist ❤️</a>
        <a href="<?php echo BASE_URL; ?>/pages/logout.php" class="btn btn-outline">Logout</a>
      <?php else: ?>
        <a href="<?php echo BASE_URL; ?>/pages/register.php" class="btn btn-outline">Register</a>
        <a href="<?php echo BASE_URL; ?>/pages/login.php" class="btn btn-outline">Login</a>
      <?php endif; ?>
    </div>

    <button class="nav-mobile-toggle" id="mobile-nav-toggle" aria-label="Toggle menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </button>
  </div>

  <div class="nav-mobile" id="mobile-nav">
    <div class="container">
      <div class="nav-mobile-links">
        <a href="<?php echo BASE_URL; ?>/index.php"
          class="nav-mobile-link <?php echo ($current_page === 'index.php') ? 'active' : ''; ?>">Home</a>

        <a href="<?php echo BASE_URL; ?>/pages/books.php"
          class="nav-mobile-link <?php echo ($current_page === 'books.php') ? 'active' : ''; ?>">Browse Books</a>

        <a href="<?php echo BASE_URL; ?>/pages/about.php"
          class="nav-mobile-link <?php echo ($current_page === 'about.php') ? 'active' : ''; ?>">About</a>

        <a href="<?php echo BASE_URL; ?>/pages/contact.php"
          class="nav-mobile-link <?php echo ($current_page === 'contact.php') ? 'active' : ''; ?>">Contact</a>

        <?php if (isset($_SESSION["user"])): ?>
          <a href="<?php echo BASE_URL; ?>/pages/wishlist.php"
            class="nav-mobile-link <?php echo ($current_page === 'wishlist.php') ? 'active' : ''; ?>">My Wishlist ❤️</a>

          <a href="<?php echo BASE_URL; ?>/pages/logout.php"
            class="nav-mobile-link <?php echo ($current_page === 'logout.php') ? 'active' : ''; ?>">Logout</a>
        <?php else: ?>
          <a href="<?php echo BASE_URL; ?>/pages/login.php"
            class="nav-mobile-link <?php echo ($current_page === 'login.php') ? 'active' : ''; ?>">Login</a>

          <a href="<?php echo BASE_URL; ?>/pages/register.php"
            class="nav-mobile-link <?php echo ($current_page === 'register.php') ? 'active' : ''; ?>">Register</a>
        <?php endif; ?>
      </div>
    </div>
  </div>
</nav>