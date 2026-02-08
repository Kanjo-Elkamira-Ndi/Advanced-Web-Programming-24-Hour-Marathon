<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../includes/db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  echo json_encode(["success" => false, "message" => "Invalid request method"]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$id = (int)($data["id"] ?? 0);

if ($id <= 0) {
  echo json_encode(["success" => false, "message" => "Invalid book ID"]);
  exit;
}

$stmt = $conn->prepare("DELETE FROM books WHERE id=?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
  echo json_encode(["success" => true, "message" => "Book deleted successfully"]);
} else {
  echo json_encode(["success" => false, "message" => "Database delete failed"]);
}