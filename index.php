<?php
$page_title = "Home";
require_once __DIR__ . "/includes/header.php";
require_once __DIR__ . "/includes/navbar.php";
?>

<!-- Hero Section -->
<section class="hero">
  <div class="hero-bg">
    <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920&h=1080&fit=crop"
      alt="Cozy library with books">
    <div class="hero-overlay"></div>
  </div>
  <div class="container">
    <div class="hero-content animate-slide-up">
      <span class="hero-badge">Join 5,000+ Book Lovers</span>
      <h1 class="hero-title">
        Share Stories,<br>
        <span class="hero-title-accent">Exchange Worlds</span>
      </h1>
      <p class="hero-description">
        Connect with fellow readers in your community. List your books, discover new stories, and give your favorite
        reads a second life.
      </p>
      <div class="hero-buttons">
        <a href="<?php echo BASE_URL; ?>/pages/books.php" class="btn btn-primary">
          Browse Books
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
        <a href="<?php echo BASE_URL; ?>/pages/about.php" class="btn btn-outline">Learn More</a>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="features">
  <div class="container">
    <div class="features-header">
      <h2 class="section-title">How It Works</h2>
      <p>Join our community in three simple steps and start exchanging books today.</p>
    </div>

    <div class="features-grid">
      <article class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
        </div>
        <h3>List Your Books</h3>
        <p>Add books you're ready to share with detailed descriptions and condition ratings.</p>
      </article>

      <article class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <h3>Find & Connect</h3>
        <p>Browse listings from local readers and find books that interest you.</p>
      </article>

      <article class="feature-card">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M3 21v-5h5" />
          </svg>
        </div>
        <h3>Exchange & Enjoy</h3>
        <p>Arrange exchanges, meet fellow readers, and discover your next favorite story.</p>
      </article>
    </div>
  </div>
</section>

<!-- Featured Books Section -->
<section class="books-section">
  <div class="container">
    <div class="books-header">
      <div>
        <h2 class="section-title">Featured Books</h2>
        <p>Discover popular books available for exchange</p>
      </div>
      <a href="<?php echo BASE_URL; ?>/pages/books.php" class="btn btn-outline">
        View All Books
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>

    <div class="books-grid" id="featured-books">
      <!-- Books will be inserted by JavaScript -->
    </div>
  </div>
</section>

<!-- Trust Banner -->
<section class="trust-banner">
  <div class="container">
    <div class="trust-content">
      <div class="trust-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
        <div class="trust-item-text">
          <h4>Trusted Community</h4>
          <p>Verified members & secure exchanges</p>
        </div>
      </div>

      <div class="trust-divider"></div>

      <div class="trust-stat">
        <p class="trust-stat-value">12,500+</p>
        <p class="trust-stat-label">Books exchanged this year</p>
      </div>

      <div class="trust-divider"></div>

      <div class="trust-stat">
        <p class="trust-stat-value">98%</p>
        <p class="trust-stat-label">Member satisfaction rate</p>
      </div>
    </div>
  </div>
</section>

<?php
require_once __DIR__ . "/includes/footer.php";
?>