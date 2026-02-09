<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../includes/session.php";

if (!isset($_SESSION["user"])) {
  echo json_encode(["success" => false, "message" => "Login required"]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$bookId = (int)($data["bookId"] ?? 0);

if ($bookId <= 0) {
  echo json_encode(["success" => false, "message" => "Invalid book ID"]);
  exit;
}

if (!isset($_SESSION["wishlist"])) {
  $_SESSION["wishlist"] = [];
}

$_SESSION["wishlist"] = array_values(array_filter($_SESSION["wishlist"], function($id) use ($bookId) {
  return (int)$id !== $bookId;
}));

echo json_encode([
  "success" => true,
  "message" => "Book removed from wishlist",
  "wishlist" => $_SESSION["wishlist"]
]);