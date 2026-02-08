<?php
$page_title = "Browse Books";
require_once __DIR__ . "/../includes/header.php";
require_once __DIR__ . "/../includes/navbar.php";
?>

<!-- Page Header -->
<header class="page-header">
  <div class="container">
    <h1 class="section-title">Browse Books</h1>
    <p>
      Explore our collection of books available for exchange. Use the filters to find exactly what you're looking for.
    </p>
  </div>
</header>

<!-- Filters Section -->
<section class="filters-section">
  <div class="container">
    <div class="filters-container">
      <!-- Search Input -->
      <div class="search-input-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input type="text" id="search-input" class="search-input" placeholder="Search by title or author...">
      </div>

      <!-- Desktop Filters -->
      <div class="filter-selects">
        <select id="genre-select" class="filter-select">
          <option value="All Genres">All Genres</option>
          <option value="Literary Fiction">Literary Fiction</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Biography">Biography</option>
          <option value="Non-Fiction">Non-Fiction</option>
        </select>

        <select id="condition-select" class="filter-select">
          <option value="All Conditions">All Conditions</option>
          <option value="Like New">Like New</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>

        <button id="clear-filters" class="clear-filters" style="display: none;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          Clear
        </button>
      </div>

      <!-- Mobile Filter Toggle -->
      <button id="mobile-filter-toggle" class="btn btn-outline mobile-filter-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
        Filters
      </button>
    </div>

    <!-- Mobile Filters Dropdown -->
    <div id="mobile-filters" class="mobile-filters">
      <label for="mobile-genre-select">Genre</label>
      <select id="mobile-genre-select" class="filter-select">
        <option value="All Genres">All Genres</option>
        <option value="Literary Fiction">Literary Fiction</option>
        <option value="Historical Fiction">Historical Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Self-Help">Self-Help</option>
        <option value="Romance">Romance</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Biography">Biography</option>
        <option value="Non-Fiction">Non-Fiction</option>
      </select>

      <label for="mobile-condition-select">Condition</label>
      <select id="mobile-condition-select" class="filter-select">
        <option value="All Conditions">All Conditions</option>
        <option value="Like New">Like New</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
      </select>

      <button id="mobile-clear-filters" class="clear-filters" style="width: 100%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        Clear All Filters
      </button>
    </div>
  </div>
</section>

<!-- Books Grid Section -->
<section class="books-section" style="flex: 1;">
  <div class="container">
    <p id="results-count" class="results-count">Showing 6 books</p>

    <div class="books-grid full-grid" id="books-grid">
      <!-- Books will be inserted by JavaScript -->
    </div>
  </div>
</section>

<?php
require_once __DIR__ . "/../includes/footer.php";
?>