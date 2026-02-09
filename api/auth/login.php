<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../includes/db.php";
require_once __DIR__ . "/../../includes/session.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  echo json_encode(["success" => false, "message" => "Invalid request method"]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$email = trim($data["email"] ?? "");
$password = trim($data["password"] ?? "");

if (!$email || !$password) {
  echo json_encode(["success" => false, "message" => "Email and password are required"]);
  exit;
}

$stmt = $conn->prepare("SELECT id, full_name, email, password FROM users WHERE email=? LIMIT 1");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
  echo json_encode(["success" => false, "message" => "Invalid login credentials"]);
  exit;
}

$user = $result->fetch_assoc();

if (!password_verify($password, $user["password"])) {
  echo json_encode(["success" => false, "message" => "Invalid login credentials"]);
  exit;
}

// store user in session
$_SESSION["user"] = [
  "id" => $user["id"],
  "full_name" => $user["full_name"],
  "email" => $user["email"]
];

echo json_encode(["success" => true, "message" => "Login successful", "user" => $_SESSION["user"]]);