<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../includes/db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$id = (int)($data["id"] ?? 0);
$title = trim($data["title"] ?? "");
$author = trim($data["author"] ?? "");
$genre = trim($data["genre"] ?? "");
$condition = trim($data["condition"] ?? "");
$owner = trim($data["owner"] ?? "");
$location = trim($data["location"] ?? "");
$description = trim($data["description"] ?? "");
$coverUrl = trim($data["coverUrl"] ?? "");
$featured = isset($data["featured"]) && $data["featured"] ? 1 : 0;

if ($id <= 0) {
    echo json_encode(["success" => false, "message" => "Invalid book ID"]);
    exit;
}

// ✅ Fixed column name from owner_name -> owner
$stmt = $conn->prepare("
    UPDATE books
    SET title=?, author=?, genre=?, book_condition=?, owner=?, location=?, cover_url=?, description=?, featured=?
    WHERE id=?
");

$stmt->bind_param(
    "ssssssssii",
    $title,
    $author,
    $genre,
    $condition,
    $owner,
    $location,
    $coverUrl,
    $description,
    $featured,
    $id
);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Book updated successfully"]);
} else {
    // Return actual SQL error for debugging
    echo json_encode([
        "success" => false,
        "message" => "Database update failed: " . $conn->error
    ]);
}