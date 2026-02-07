<?php
// includes/config.php

// Base URL (useful later when hosting)
// For now, keep it empty because you are running locally.
define("BASE_URL", "/AWP_24_Hour_Marathon");

// Project name
define("APP_NAME", "BookSwap");

// Start session (needed for Module 4 auth)
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}