<?php
require_once __DIR__ . "/../../includes/session.php";
require_once __DIR__ . "/../../includes/db.php";

$offset = isset($_GET["offset"]) ? (int) $_GET["offset"] : 0;
$limit  = isset($_GET["limit"]) ? (int) $_GET["limit"] : 6;

if ($limit <= 0 || $limit > 50) {
  $limit = 6;
}

$sql = "SELECT * FROM books ORDER BY created_at DESC LIMIT $offset, $limit";
$result = $conn->query($sql);

$books = [];

if ($result) {
  while ($row = $result->fetch_assoc()) {
    $books[] = $row;
  }
}

header("Content-Type: application/json; charset=utf-8");
echo json_encode($books);
exit;