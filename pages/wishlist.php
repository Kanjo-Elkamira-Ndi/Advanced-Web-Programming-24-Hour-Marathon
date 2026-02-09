<?php
$page_title = "My Wishlist";

require_once __DIR__ . "/../includes/session.php";
require_once __DIR__ . "/../includes/db.php";
require_once __DIR__ . "/../includes/header.php";
require_once __DIR__ . "/../includes/navbar.php";

// Only logged-in users
if (!isset($_SESSION["user"])) {
  header("Location: " . BASE_URL . "/pages/login.php");
  exit;
}

// Fetch all books (for selection dropdown)
$allBooks = [];
$sqlAll = "SELECT id, title, author, cover_url FROM books ORDER BY created_at DESC";
$resAll = $conn->query($sqlAll);

if ($resAll) {
  while ($row = $resAll->fetch_assoc()) {
    $allBooks[] = $row;
  }
}

// Fetch wishlist books from DB using session wishlist IDs
$wishlistBooks = [];

if (!empty($_SESSION["wishlist"])) {
  $ids = array_map("intval", $_SESSION["wishlist"]);
  $idsList = implode(",", $ids);

  $sqlWish = "SELECT * FROM books WHERE id IN ($idsList)";
  $resWish = $conn->query($sqlWish);

  if ($resWish) {
    while ($row = $resWish->fetch_assoc()) {
      $wishlistBooks[] = $row;
    }
  }
}
?>

<!-- Flash Messages -->
<div class="container" style="margin-top: 15px;">
  <?php if (!empty($_SESSION["flash_success"])): ?>
    <div class="alert alert-success">
      <?= htmlspecialchars($_SESSION["flash_success"]) ?>
    </div>
    <?php unset($_SESSION["flash_success"]); ?>
  <?php endif; ?>

  <?php if (!empty($_SESSION["flash_error"])): ?>
    <div class="alert alert-danger">
      <?= htmlspecialchars($_SESSION["flash_error"]) ?>
    </div>
    <?php unset($_SESSION["flash_error"]); ?>
  <?php endif; ?>
</div>

<header class="page-header">
  <div class="container">
    <h1 class="section-title">My Wishlist</h1>
    <p>Select books you want to save for later exchange.</p>
  </div>
</header>

<section style="padding: 20px 0;">
  <div class="container">

    <!-- Add to Wishlist Button + Dropdown -->
    <div class="card" style="padding: 18px; border-radius: 12px; margin-bottom: 25px;">
      <h3 style="margin-bottom: 12px;">Add a Book to Wishlist</h3>

      <form action="<?= BASE_URL ?>/api/wishlist/add.php" method="POST" style="display:flex; gap:10px; flex-wrap:wrap;">
        <select name="book_id" class="form-control" required style="max-width: 500px;">
          <option value="">-- Select a Book --</option>

          <?php foreach ($allBooks as $b): ?>
            <?php
              $id = (int)$b["id"];
              $title = htmlspecialchars($b["title"]);
              $author = htmlspecialchars($b["author"]);

              $disabled = in_array($id, $_SESSION["wishlist"]) ? "disabled" : "";
              $label = $title . " — " . $author;

              if ($disabled) {
                $label .= " (Already Added)";
              }
            ?>
            <option value="<?= $id ?>" <?= $disabled ?>>
              <?= $label ?>
            </option>
          <?php endforeach; ?>
        </select>

        <button type="submit" class="btn btn-primary">
          Add to Wishlist
        </button>
      </form>
    </div>

    <!-- Wishlist Display -->
    <h2 style="margin-bottom: 15px;">Saved Books</h2>

    <?php if (empty($wishlistBooks)): ?>
      <p style="opacity:0.8;">Your wishlist is empty. Add some books above.</p>
    <?php else: ?>

      <div class="books-grid full-grid">

        <?php foreach ($wishlistBooks as $book): ?>
          <?php
            $bookId = (int)$book["id"];

            $cover = $book["cover_url"] ?? "";
            if (!$cover) {
              $cover = BASE_URL . "/assets/images/default-book.jpg";
            }

            $title = htmlspecialchars($book["title"]);
            $author = htmlspecialchars($book["author"]);
            $genre = htmlspecialchars($book["genre"]);
            $condition = htmlspecialchars($book["book_condition"]);
          ?>

          <div class="book-card">
            <div class="book-cover">
              <img src="<?= $cover ?>" alt="<?= $title ?>">
            </div>

            <div class="book-info">
              <h3 class="book-title"><?= $title ?></h3>
              <p class="book-author">by <?= $author ?></p>

              <div class="book-meta">
                <span class="tag"><?= $genre ?></span>
                <span class="tag"><?= $condition ?></span>
              </div>

              <div style="margin-top:12px;">
                <form action="<?= BASE_URL ?>/api/wishlist/remove.php" method="POST">
                  <input type="hidden" name="book_id" value="<?= $bookId ?>">
                  <button type="submit" class="btn btn-danger" style="width:100%;">
                    Remove
                  </button>
                </form>
              </div>

            </div>
          </div>

        <?php endforeach; ?>

      </div>

    <?php endif; ?>

  </div>
</section>

<?php require_once __DIR__ . "/../includes/footer.php"; ?>