# 📚 BookSwap — Book Exchange & Wishlist Web Application

BookSwap is a PHP + MySQL web application that allows users to browse available books, search in real-time (AJAX), and manage a personal wishlist using session-based state management. The system was built as part of a modular lab exercise focused on state management, asynchronous interactions, and web security best practices.

---

## 📌 Table of Contents

- [📚 BookSwap — Book Exchange & Wishlist Web Application](#-bookswap--book-exchange--wishlist-web-application)
- [🚀 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🧩 Modules Implemented (Lab Requirements)](#-modules-implemented-lab-requirements)
- [🛠 Tech Stack](#-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation & Setup](#️-installation--setup)
  - [1) Clone the Repository](#1-clone-the-repository)
  - [2) Setup the Database](#2-setup-the-database)
  - [3) Configure the Application](#3-configure-the-application)
  - [4) Run the Project](#4-run-the-project)
- [🔐 Authentication & Session Management](#-authentication--session-management)
- [💾 Database Schema (Core Tables)](#-database-schema-core-tables)
- [📌 Pages & Functional Flow](#-pages--functional-flow)
- [📡 API Endpoints](#-api-endpoints)
- [⚡ AJAX Features (Module 5)](#-ajax-features-module-5)
- [🛡 Security Measures (Module 6)](#-security-measures-module-6)
- [🧪 Testing Checklist](#-testing-checklist)
- [🚀 Deployment (Optional)](#-deployment-optional)
- [📸 Screenshots (Optional)](#-screenshots-optional)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🚀 Project Overview

BookSwap is designed to simulate a simple book exchange system where users can:

- Browse books stored in a MySQL database
- Search books dynamically using AJAX (Fetch API)
- Add books to a wishlist (session-based)
- Remove books from wishlist
- See flash success/error messages
- Work with secure authentication and protected routes

This project focuses heavily on:

✅ Clean application logic  
✅ Session-based state management  
✅ Asynchronous client-server interaction  
✅ Web security hardening  

---

## ✨ Key Features

### 📖 Book Browsing
- Books are fetched from a MySQL database using mysqli
- Books are displayed in a responsive grid layout
- Supports basic filtering UI (genre, condition)

### ❤️ Wishlist (Session-Based)
- Users can add books to a wishlist
- Wishlist persists throughout the session
- Duplicate books are prevented
- Wishlist can be managed (remove books)

### 🔍 Live Search (AJAX)
- Search by title or author without page reload
- Uses Fetch API for asynchronous requests
- Error handling is implemented to prevent UI breaking

### 🔐 Authentication & Protected Pages
- Only logged-in users can access wishlist and actions
- Session-based authentication is used
- Logout functionality clears session data

### 🛡 Security Enhancements
- Output escaping using htmlspecialchars()
- SQL queries prepared statements (Module 6)
- Password hashing using password_hash()
- CSRF protection for forms (Module 6)

---

## 🧩 Modules Implemented (Lab Requirements)

### ✅ Module 4: State Management & Application Logic
- Session-based authentication ($_SESSION['user'])
- Flash messages ($_SESSION['flash_success'], $_SESSION['flash_error'])
- Wishlist state stored in session ($_SESSION['wishlist'])
- Protected routes redirect unauthenticated users

### ✅ Module 5: Asynchronous Interactions & Client-Side Dynamics
- Live search using Fetch API (AJAX)
- Dynamic rendering of results
- Error handling for AJAX failures
- *(Optional extension)* Load More pagination via AJAX

### ✅ Module 6: Web Security & Deployment Best Practices
- Prepared statements for all SQL queries
- Output escaping to prevent XSS
- Password hashing and verification
- CSRF protection for sensitive forms
- Basic performance optimizations

---

## 🛠 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | PHP (procedural) |
| Database | MySQL |
| DB Driver | mysqli (NO PDO) |
| Async Requests | Fetch API (AJAX) |
| Server | Apache (XAMPP / LAMP) |

---

---

## ⚙️ Installation & Setup

### 1) Clone the Repository

`bash
git clone https://github.com/Kanjo-Elkamira-Ndi/Advanced-Web-Programming-24-Hour-Marathon
cd Advanced-Web-Programming-24-Hour-Marathon


---

2) Setup the Database

1. Open phpMyAdmin


2. Create a database:



CREATE DATABASE bookswap_db;

3. Import your SQL file OR create the tables manually.




---

3) Configure the Application

Open:

📌 includes/db.php

Ensure your settings match:

$DB_HOST = "localhost";
$DB_USER = "root";
$DB_PASS = "";
$DB_NAME = "bookswap_db";


---

4) Run the Project

If using XAMPP:

1. Move the project folder to:


C:\xampp\htdocs\bookswap

2. Start Apache + MySQL from XAMPP Control Panel


3. Visit:


http://localhost/bookswap/pages/index.php


---

## 🔐 Authentication & Session Management

Authentication is implemented using PHP sessions.

How it works

After login, the system stores the user object in:


$_SESSION["user"]

Protected pages check:


if (!isset($_SESSION["user"])) {
  header("Location: " . BASE_URL . "/pages/login.php");
  exit;
}

Logout

Logout clears the session and redirects:

📌 api/auth/logout.php


---

### 💾 Database Schema (Core Tables)

books Table (Main Table)

Example fields used:

Field Type Purpose

id INT (PK) Unique identifier
title VARCHAR Book title
author VARCHAR Book author
genre VARCHAR Book category
book_condition VARCHAR Like New / Good / Fair
owner VARCHAR Book owner
location VARCHAR Location
cover_url VARCHAR Cover image
featured TINYINT Featured badge
created_at TIMESTAMP Sorting



---

users Table (Authentication)

Example fields:

Field Type

id INT (PK)
fullname VARCHAR
email VARCHAR
password VARCHAR (hashed)
created_at TIMESTAMP



---

## 📌 Pages & Functional Flow

pages/books.php

Displays all books from DB

Supports live search

Contains “Add to Wishlist” button per book


pages/wishlist.php

Displays books saved in wishlist

Allows selecting books from DB using dropdown

Supports removing books from wishlist


pages/login.php / pages/register.php

User authentication

Secure password hashing



---

# 📡 API Endpoints

## 🔐 Auth Endpoints

### Endpoint Method Description

/api/auth/login.php POST Logs in user
/api/auth/register.php POST Registers user
/api/auth/logout.php GET Logs out user



---

# ❤️ Wishlist Endpoints

Endpoint Method Description

/api/wishlist/add.php POST Adds a book to wishlist
/api/wishlist/remove.php POST Removes a book from wishlist


---

## 📚 Books AJAX Endpoints

### Endpoint Method Description

/api/books/search.php GET Returns matching books in JSON
/api/books/load_more.php GET Pagination (optional)



---

## ⚡ AJAX Features (Module 5)

### 🔍 Live Search

Live search is implemented using:

fetch()

JSON responses from the server

Dynamic DOM updates without reloading the page


Error Handling Strategy

AJAX requests handle errors using:

try/catch

Checking response.ok

Displaying fallback messages when the server fails


This ensures the UI does not break even if the server returns an error.


---

# 🛡 Security Measures (Module 6)

The application was hardened using industry-standard security practices:

✅ SQL Injection Protection

All SQL queries refactored to prepared statements (mysqli->prepare())


✅ XSS Protection

All dynamic output escaped using:


htmlspecialchars($value, ENT_QUOTES, "UTF-8");

✅ Password Security

Passwords hashed using:


password_hash($password, PASSWORD_DEFAULT);

Verified using:


password_verify($password, $hash);

✅ CSRF Protection

CSRF tokens generated in session

Tokens included in forms

Tokens validated in POST endpoints


✅ Session Hardening

Session regeneration on login

Protected routes enforce authentication

---

# 📄 License

This project was developed for academic/lab purposes.
You may modify and reuse it for learning and educational demonstrations.

---

👨‍💻 Author
# Kanjo Elkamira Ndi
