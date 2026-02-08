<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../includes/db.php";

try {
    $sql = "SELECT * FROM books ORDER BY id DESC";
    $result = $conn->query($sql);

    if (!$result) {
        throw new Exception("Query failed: " . $conn->error);
    }

    $books = [];

    while ($row = $result->fetch_assoc()) {
      $books[] = [
        "id" => (int)$row["id"],
        "title" => $row["title"] ?? "",
        "author" => $row["author"] ?? "",
        "genre" => $row["genre"] ?? "",
        "condition" => $row["book_condition"] ?? "",
        "owner" => $row["owner"] ?? "",      // <-- match your table column
        "location" => $row["location"] ?? "",
        "description" => $row["description"] ?? "",
        "coverUrl" => $row["cover_url"] ?? "",
        "featured" => (bool)$row["featured"],
    ];
    }

    echo json_encode($books);

} catch (Exception $e) {
    echo json_encode([]);
    error_log("Books list error: " . $e->getMessage());
}