<?php
require_once __DIR__ . "/config.php";

if (!isset($page_title)) {
  $page_title = "Community Book Exchange";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Share stories and exchange books with fellow readers in your community. Join BookSwap today!">

  <title><?php echo htmlspecialchars($page_title); ?> - <?php echo APP_NAME; ?></title>

  <!-- Main Styles -->
  <link rel="stylesheet" href="<?php echo BASE_URL; ?>/assets/css/styles.css">

  <!-- Optional Page CSS -->
  <?php if (!empty($page_css)): ?>
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>/assets/css/<?php echo htmlspecialchars($page_css); ?>">
  <?php endif; ?>

  <!-- Favicon -->
  <link rel="icon" href="<?php echo BASE_URL; ?>/favicon.ico">
</head>
<body>
  <div class="page-wrapper">