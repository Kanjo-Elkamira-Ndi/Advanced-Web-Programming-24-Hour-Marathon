<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../includes/db.php";
require_once __DIR__ . "/../../includes/session.php";

if (!isset($_SESSION["user"])) {
  echo json_encode(["success" => false, "message" => "Login required"]);
  exit;
}

$wishlist = $_SESSION["wishlist"] ?? [];

if (count($wishlist) === 0) {
  echo json_encode(["success" => true, "books" => []]);
  exit;
}

$placeholders = implode(",", array_fill(0, count($wishlist), "?"));
$types = str_repeat("i", count($wishlist));

$sql = "SELECT * FROM books WHERE id IN ($placeholders)";
$stmt = $conn->prepare($sql);
$stmt->bind_param($types, ...$wishlist);
$stmt->execute();

$result = $stmt->get_result();
$books = [];

while ($row = $result->fetch_assoc()) {
  $books[] = $row;
}

echo json_encode(["success" => true, "books" => $books]);