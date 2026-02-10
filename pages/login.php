<?php
$page_title = "Login";
require_once __DIR__ . "/../includes/session.php";

if (isset($_SESSION["user"])) {
  header("Location: " . BASE_URL . "/index.php");
  exit;
}

require_once __DIR__ . "/../includes/header.php";
require_once __DIR__ . "/../includes/navbar.php";
?>

<section style="min-height:75vh; display:flex; align-items:center; justify-content:center; padding:50px 15px;">
  <div style="
    width:100%;
    max-width:520px;
    background:#fff;
    border-radius:18px;
    padding:35px 28px;
    box-shadow:0 10px 35px rgba(0,0,0,0.08);
    border:1px solid rgba(0,0,0,0.06);
  ">

    <div style="text-align:center; margin-bottom:25px;">
      <h1 style="margin:0; font-size:28px;">Welcome Back 👋</h1>
      <p style="margin-top:10px; opacity:0.75;">
        Login to access your wishlist and features.
      </p>
    </div>

    <!-- Alert box -->
    <div class="alert" style="display:block; margin-bottom:15px;"></div>

    <form id="loginForm" autocomplete="off">
      <div style="margin-bottom:14px;">
        <label for="email" style="display:block; margin-bottom:7px; font-weight:600;">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          required
          style="
            width:100%;
            padding:12px 14px;
            border-radius:12px;
            border:1px solid rgba(0,0,0,0.15);
            outline:none;
          "
        />
      </div>

      <div style="margin-bottom:18px;">
        <label for="password" style="display:block; margin-bottom:7px; font-weight:600;">Password</label>

        <div style="display:flex; gap:10px; align-items:center;">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            style="
              flex:1;
              padding:12px 14px;
              border-radius:12px;
              border:1px solid rgba(0,0,0,0.15);
              outline:none;
            "
          />
          <button
            type="button"
            class="toggle-pass"
            style="
              padding:11px 14px;
              border-radius:12px;
              border:1px solid rgba(0,0,0,0.15);
              background:#f7f7f7;
              cursor:pointer;
              font-weight:600;
            "
          >
            Show
          </button>
        </div>
      </div>

      <button
        type="submit"
        class="btn"
        style="
          width:100%;
          padding:12px 16px;
          border-radius:14px;
          font-size:16px;
          font-weight:700;
        "
      >
        Login
      </button>
    </form>

    <p style="margin-top:18px; opacity:0.85; text-align:center;">
      Don’t have an account?
      <a href="./register.php" style="font-weight:700;">Create one</a>
    </p>

  </div>
</section>

<script src="../assets/js/auth.js"></script>
<?php require_once __DIR__ . "/../includes/footer.php"; ?>