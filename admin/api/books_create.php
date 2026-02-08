<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../includes/db.php";

try {
    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        echo json_encode(["success" => false, "message" => "Invalid request method"]);
        exit;
    }

    $data = json_decode(file_get_contents("php://input"), true);

    $title = trim($data["title"] ?? "");
    $author = trim($data["author"] ?? "");
    $genre = trim($data["genre"] ?? "");
    $condition = trim($data["condition"] ?? "");
    $owner = trim($data["owner"] ?? "");
    $location = trim($data["location"] ?? "");
    $description = trim($data["description"] ?? "");
    $coverUrl = trim($data["coverUrl"] ?? "");
    $featured = isset($data["featured"]) && $data["featured"] ? 1 : 0;

    if ($title === "" || $author === "" || $genre === "" || $condition === "" || $owner === "" || $location === "" || $description === "") {
        echo json_encode(["success" => false, "message" => "All fields are required"]);
        exit;
    }

    // Prepare statement
    $stmt = $conn->prepare("
        INSERT INTO books (title, author, genre, book_condition, owner, location, cover_url, description, featured)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    if (!$stmt) {
        throw new Exception("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param(
        "ssssssssi",
        $title,
        $author,
        $genre,
        $condition,
        $owner, 
        $location,
        $coverUrl,
        $description,
        $featured
    );

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Book added successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to add book: " . $stmt->error]);
    }

} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
}