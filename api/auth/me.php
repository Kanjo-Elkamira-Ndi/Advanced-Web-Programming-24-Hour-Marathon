<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../includes/session.php";

if (!isset($_SESSION["user"])) {
  echo json_encode(["loggedIn" => false]);
  exit;
}

echo json_encode(["loggedIn" => true, "user" => $_SESSION["user"]]);