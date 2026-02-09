<?php
// api/auth/logout.php

require_once __DIR__ . "/../../includes/session.php";

// Clear all session variables
session_unset();

// Destroy session
session_destroy();

// Redirect user back to homepage (PRG pattern)
header("Location: " . BASE_URL . "/index.php");
exit;