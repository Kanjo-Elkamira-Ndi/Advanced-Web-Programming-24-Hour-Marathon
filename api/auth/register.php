<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../includes/db.php";
require_once __DIR__ . "/../../includes/session.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  echo json_encode(["success" => false, "message" => "Invalid request method"]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$full_name = trim($data["full_name"] ?? "");
$email = trim($data["email"] ?? "");
$password = trim($data["password"] ?? "");

if (!$full_name || !$email || !$password) {
  echo json_encode(["success" => false, "message" => "All fields are required"]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo json_encode(["success" => false, "message" => "Invalid email format"]);
  exit;
}

$hashed = password_hash($password, PASSWORD_DEFAULT);

// check if email exists
$check = $conn->prepare("SELECT id FROM users WHERE email=? LIMIT 1");
$check->bind_param("s", $email);
$check->execute();
$res = $check->get_result();

if ($res->num_rows > 0) {
  echo json_encode(["success" => false, "message" => "Email already registered"]);
  exit;
}

$stmt = $conn->prepare("INSERT INTO users(full_name, email, password) VALUES(?,?,?)");
$stmt->bind_param("sss", $full_name, $email, $hashed);

if ($stmt->execute()) {
  echo json_encode(["success" => true, "message" => "Registration successful"]);
} else {
  echo json_encode(["success" => false, "message" => "Registration failed"]);
}