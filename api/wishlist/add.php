<?php
require_once __DIR__ . "/../../includes/session.php";

// Only logged-in users
if (!isset($_SESSION["user"])) {
  header("Location: " . BASE_URL . "/pages/login.php");
  exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: " . BASE_URL . "/pages/books.php");
  exit;
}

$book_id = isset($_POST["book_id"]) ? (int) $_POST["book_id"] : 0;

if ($book_id <= 0) {
  $_SESSION["flash_error"] = "Invalid book selected.";
  header("Location: " . BASE_URL . "/pages/wishlist.php");
  exit;
}

// Ensure wishlist is an array
if (!isset($_SESSION["wishlist"]) || !is_array($_SESSION["wishlist"])) {
  $_SESSION["wishlist"] = [];
}

// Add if not already in wishlist
if (!in_array($book_id, $_SESSION["wishlist"])) {
  $_SESSION["wishlist"][] = $book_id;
  $_SESSION["flash_success"] = "Book added to wishlist!";
} else {
  $_SESSION["flash_error"] = "This book is already in your wishlist.";
}

// Redirect back
$redirect = $_SERVER["HTTP_REFERER"] ?? (BASE_URL . "/pages/wishlist.php");
header("Location: " . $redirect);
exit;