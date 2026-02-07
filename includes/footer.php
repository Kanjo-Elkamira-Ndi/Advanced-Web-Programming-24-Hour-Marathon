<?php
// includes/footer.php
?>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <a href="<?php echo BASE_URL; ?>/index.php" class="nav-logo">
          <div class="nav-logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
          </div>
          <span class="nav-logo-text"><?php echo APP_NAME; ?></span>
        </a>
        <p>Building a community of book lovers who share their stories, one exchange at a time.</p>
      </div>

      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="<?php echo BASE_URL; ?>/index.php">Home</a></li>
          <li><a href="<?php echo BASE_URL; ?>/pages/books.php">Browse Books</a></li>
          <li><a href="<?php echo BASE_URL; ?>/pages/about.php">About Us</a></li>
          <li><a href="<?php echo BASE_URL; ?>/pages/contact.php">Contact</a></li>
        </ul>
      </div>

      <div class="footer-community">
        <h4>Join Our Community</h4>
        <p>Over 5,000 book lovers exchanging stories every day.</p>
        <a href="<?php echo BASE_URL; ?>/pages/contact.php" class="btn btn-outline">Get In Touch</a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2024 <?php echo APP_NAME; ?>. All rights reserved.</p>
      <p>
        Made with
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path
            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        for book lovers
      </p>
    </div>
  </div>
</footer>

<!-- Main JS -->
<script src="<?php echo BASE_URL; ?>/assets/js/script.js"></script>
</div>
</body>
</html>