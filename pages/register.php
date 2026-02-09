<?php
$page_title = "Register";
require_once __DIR__ . "/../includes/session.php";

// If already logged in, redirect away
if (isset($_SESSION["user"])) {
  header("Location: " . BASE_URL . "/index.php");
  exit;
}

require_once __DIR__ . "/../includes/header.php";
require_once __DIR__ . "/../includes/navbar.php";
?>

<section class="container" style="padding:50px 0; max-width:500px;">
  <h1 style="margin-bottom:10px;">Create Account ✨</h1>
  <p style="opacity:0.8; margin-bottom:25px;">Register to save books to your wishlist.</p>

  <!-- Alert box -->
  <div class="alert" style="display:block;"></div>

  <form id="registerForm" autocomplete="off">
    <div class="form-group" style="margin-bottom:15px;">
      <label for="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Your full name"
        required
      />
    </div>

    <div class="form-group" style="margin-bottom:15px;">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@gmail.com"
        required
      />
    </div>

    <div class="form-group" style="margin-bottom:15px;">
      <label for="password">Password</label>

      <div class="input-wrapper" style="display:flex; gap:10px; align-items:center;">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Minimum 6 characters"
          required
        />
        <button type="button" class="toggle-pass">Show</button>
      </div>
    </div>

    <div class="form-group" style="margin-bottom:15px;">
      <label for="confirmPassword">Confirm Password</label>

      <div class="input-wrapper" style="display:flex; gap:10px; align-items:center;">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Re-enter password"
          required
        />
        <button type="button" class="toggle-pass">Show</button>
      </div>
    </div>

    <button type="submit" class="btn" style="width:100%; margin-top:10px;">
      Register
    </button>
  </form>

  <p style="margin-top:20px; opacity:0.85;">
    Already have an account?
    <a href="./login.php">Login</a>
  </p>
</section>

<script src="../assets/js/auth.js"></script>

<?php require_once __DIR__ . "/../includes/footer.php"; ?>