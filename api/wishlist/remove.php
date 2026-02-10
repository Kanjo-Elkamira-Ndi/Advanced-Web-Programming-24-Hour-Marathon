<?php
require_once __DIR__ . "/../../includes/session.php";

// Only logged-in users
if (!isset($_SESSION["user"])) {
  header("Location: " . BASE_URL . "/pages/login.php");
  exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: " . BASE_URL . "/pages/wishlist.php");
  exit;
}

$book_id = isset($_POST["book_id"]) ? (int) $_POST["book_id"] : 0;

if ($book_id > 0 && isset($_SESSION["wishlist"]) && is_array($_SESSION["wishlist"])) {
  $_SESSION["wishlist"] = array_values(array_filter($_SESSION["wishlist"], function ($id) use ($book_id) {
    return (int)$id !== $book_id;
  }));

  $_SESSION["flash_success"] = "Book removed from wishlist.";
}

header("Location: " . BASE_URL . "/pages/wishlist.php");
exit;