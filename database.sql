CREATE DATABASE IF NOT EXISTS bookswap_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE bookswap_db;

-- USERS TABLE
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- BOOKS TABLE
CREATE TABLE IF NOT EXISTS books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  author VARCHAR(150) NOT NULL,
  genre VARCHAR(100) NOT NULL,
  book_condition ENUM('Like New', 'Good', 'Fair') NOT NULL,
  owner_name VARCHAR(100) NOT NULL,
  location VARCHAR(120) NOT NULL,
  cover_url VARCHAR(255) DEFAULT NULL,
  description TEXT NOT NULL,
  featured TINYINT(1) NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- OPTIONAL: Insert sample admin user
-- Password below is "admin123" (you will replace it later with PHP password_hash)
INSERT INTO users (full_name, email, password, role)
VALUES (
  'Admin User',
  'admin@bookswap.com',
  '$2y$10$3j1pJgFQ7FhQdXc7w1hM3uYl3WwOe3GvH3eQXx8a9j1b0JmYtqYpG',
  'admin'
);