<?php
$page_title = "Login";
require_once __DIR__ . "/../includes/header.php";
require_once __DIR__ . "/../includes/navbar.php";
?>
  <main class="auth-page">
    <!-- LEFT -->
    <section class="auth-left">
      <div class="brand-card">
        <div class="brand-top">
          <div class="brand-logo">CBE</div>
          <div>
            <h3 class="brand-title">Community Book Exchange</h3>
            <p class="brand-subtitle">Swap books, share knowledge, build community.</p>
          </div>
        </div>

        <div class="brand-body">
          <h2>Join the community ✨</h2>
          <p>
            Create your free account to list books for exchange, build your wishlist, and explore
            new books.
          </p>

          <ul class="feature-list">
            <li><span class="check">✓</span> List your books for exchange</li>
            <li><span class="check">✓</span> Save favorites in your wishlist</li>
            <li><span class="check">✓</span> Connect with local book lovers</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- RIGHT -->
    <section class="auth-right">
      <div class="form-card">
        <header class="form-header">
          <h1>Create Account</h1>
          <p>Fill in your details to get started.</p>
        </header>

        <div class="alert"></div>

        <form id="registerForm" class="form" novalidate>
          <div class="field">
            <label for="fullName">Full Name</label>
            <input
              class="input"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g. John Doe"
              required
            />
          </div>

          <div class="field">
            <label for="email">Email Address</label>
            <input
              class="input"
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div class="field">
            <label for="password">Password</label>
            <div class="password-wrap">
              <input
                class="input"
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                required
              />
              <button type="button" class="toggle-pass">Show</button>
            </div>
          </div>

          <div class="field">
            <label for="confirmPassword">Confirm Password</label>
            <input
              class="input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter password"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">Create Account</button>

          <p class="form-footer">
            Already have an account?
            <a class="link" href="./login.html">Log in</a>
          </p>
        </form>
      </div>
    </section>
  </main>

<?php
require_once __DIR__ . "/../includes/footer.php";
?>