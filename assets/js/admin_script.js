// Admin Panel JavaScript - CRUD Operations for Books

// Initial books data (shared with main site)
let books = [
  {
    id: 1,
    title: "The Midnight Garden",
    author: "Elizabeth Harper",
    genre: "Literary Fiction",
    condition: "Like New",
    owner: "Sarah M.",
    location: "Brooklyn, NY",
    description: "A captivating tale of mystery and romance set in a Victorian estate. The pages are pristine, spine uncreased.",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Echoes of the Forgotten",
    author: "James Whitmore",
    genre: "Historical Fiction",
    condition: "Good",
    owner: "Michael R.",
    location: "Austin, TX",
    description: "An epic historical saga spanning three generations. Minor wear on corners, otherwise in excellent condition.",
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Silent Waters",
    author: "Catherine Brooks",
    genre: "Mystery",
    condition: "Like New",
    owner: "Emma L.",
    location: "Seattle, WA",
    description: "A psychological thriller that keeps you guessing until the very last page. No markings or damage.",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    featured: true,
  },
  {
    id: 4,
    title: "The Art of Simple Living",
    author: "David Chen",
    genre: "Self-Help",
    condition: "Good",
    owner: "Lisa K.",
    location: "Portland, OR",
    description: "A beautifully illustrated guide to mindful living and decluttering your space and mind.",
    coverUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=400&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Where the Light Falls",
    author: "Amelia Rose",
    genre: "Romance",
    condition: "Fair",
    owner: "Jennifer P.",
    location: "Denver, CO",
    description: "A sweeping romance set against the backdrop of 1920s Paris. Cover shows some wear.",
    coverUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Code of the Cosmos",
    author: "Marcus Webb",
    genre: "Science Fiction",
    condition: "Like New",
    owner: "Alex T.",
    location: "San Francisco, CA",
    description: "A mind-bending sci-fi adventure about humanity's first contact with an alien civilization.",
    coverUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
    featured: false,
  },
];

// Load books from localStorage if available
function loadBooks() {
  const storedBooks = localStorage.getItem('bookswap-books');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
}

// Save books to localStorage
function saveBooks() {
  localStorage.setItem('bookswap-books', JSON.stringify(books));
}

// Current state
let currentBookId = null;
let deleteBookId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadBooks();
  renderBooks();
  updateStats();
});

// Render books table
function renderBooks(filteredBooks = null) {
  const tbody = document.getElementById('books-table-body');
  const booksToRender = filteredBooks || books;
  
  if (booksToRender.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 2rem; color: var(--color-warm-gray);">
          No books found
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = booksToRender.map(book => `
    <tr>
      <td>
        <div class="book-info">
          <img src="${book.coverUrl || 'https://via.placeholder.com/48x64?text=No+Cover'}" alt="${book.title}" class="book-cover-thumb">
          <div>
            <div class="book-title">${escapeHtml(book.title)}</div>
            <div class="book-author">by ${escapeHtml(book.author)}</div>
          </div>
        </div>
      </td>
      <td>${escapeHtml(book.genre)}</td>
      <td>
        <span class="badge ${getConditionBadgeClass(book.condition)}">${book.condition}</span>
      </td>
      <td>${escapeHtml(book.owner)}</td>
      <td>${escapeHtml(book.location)}</td>
      <td>
        <div class="action-buttons">
          <button class="btn btn-secondary btn-sm btn-icon" onclick="openEditModal(${book.id})" title="Edit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
            </svg>
          </button>
          <button class="btn btn-danger btn-sm btn-icon" onclick="openDeleteModal(${book.id})" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Get condition badge class
function getConditionBadgeClass(condition) {
  switch (condition) {
    case 'Like New': return 'badge-success';
    case 'Good': return 'badge-info';
    case 'Fair': return 'badge-warning';
    default: return '';
  }
}

// Update stats
function updateStats() {
  document.getElementById('total-books').textContent = books.length;
  document.getElementById('like-new-count').textContent = books.filter(b => b.condition === 'Like New').length;
  document.getElementById('good-count').textContent = books.filter(b => b.condition === 'Good').length;
  document.getElementById('fair-count').textContent = books.filter(b => b.condition === 'Fair').length;
}

// Filter books
function filterBooks() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  
  if (!searchTerm) {
    renderBooks();
    return;
  }
  
  const filtered = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.genre.toLowerCase().includes(searchTerm) ||
    book.owner.toLowerCase().includes(searchTerm) ||
    book.location.toLowerCase().includes(searchTerm)
  );
  
  renderBooks(filtered);
}

// Open add modal
function openAddModal() {
  currentBookId = null;
  document.getElementById('modal-title').textContent = 'Add New Book';
  document.getElementById('submit-btn').textContent = 'Add Book';
  document.getElementById('book-form').reset();
  document.getElementById('book-modal').classList.add('active');
}

// Open edit modal
function openEditModal(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;
  
  currentBookId = id;
  document.getElementById('modal-title').textContent = 'Edit Book';
  document.getElementById('submit-btn').textContent = 'Save Changes';
  
  // Populate form
  document.getElementById('book-id').value = book.id;
  document.getElementById('book-title').value = book.title;
  document.getElementById('book-author').value = book.author;
  document.getElementById('book-genre').value = book.genre;
  document.getElementById('book-condition').value = book.condition;
  document.getElementById('book-owner').value = book.owner;
  document.getElementById('book-location').value = book.location;
  document.getElementById('book-cover').value = book.coverUrl || '';
  document.getElementById('book-description').value = book.description;
  document.getElementById('book-featured').checked = book.featured || false;
  
  document.getElementById('book-modal').classList.add('active');
}

// Close modal
function closeModal() {
  document.getElementById('book-modal').classList.remove('active');
  currentBookId = null;
}

// Handle form submit
function handleSubmit(event) {
  event.preventDefault();
  
  const bookData = {
    title: document.getElementById('book-title').value.trim(),
    author: document.getElementById('book-author').value.trim(),
    genre: document.getElementById('book-genre').value,
    condition: document.getElementById('book-condition').value,
    owner: document.getElementById('book-owner').value.trim(),
    location: document.getElementById('book-location').value.trim(),
    coverUrl: document.getElementById('book-cover').value.trim() || 'https://via.placeholder.com/300x400?text=No+Cover',
    description: document.getElementById('book-description').value.trim(),
    featured: document.getElementById('book-featured').checked,
  };
  
  if (currentBookId) {
    // Update existing book
    const index = books.findIndex(b => b.id === currentBookId);
    if (index !== -1) {
      books[index] = { ...books[index], ...bookData };
      showToast('Book updated successfully!', 'success');
    }
  } else {
    // Add new book
    const newId = Math.max(...books.map(b => b.id), 0) + 1;
    books.push({ id: newId, ...bookData });
    showToast('Book added successfully!', 'success');
  }
  
  saveBooks();
  renderBooks();
  updateStats();
  closeModal();
}

// Open delete modal
function openDeleteModal(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;
  
  deleteBookId = id;
  document.getElementById('delete-book-title').textContent = book.title;
  document.getElementById('delete-modal').classList.add('active');
}

// Close delete modal
function closeDeleteModal() {
  document.getElementById('delete-modal').classList.remove('active');
  deleteBookId = null;
}

// Confirm delete
function confirmDelete() {
  if (deleteBookId) {
    books = books.filter(b => b.id !== deleteBookId);
    saveBooks();
    renderBooks();
    updateStats();
    showToast('Book deleted successfully!', 'success');
    closeDeleteModal();
  }
}

// Show toast notification
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = type === 'success' 
    ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
  
  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Close modals on overlay click
document.getElementById('book-modal').addEventListener('click', (e) => {
  if (e.target.id === 'book-modal') closeModal();
});

document.getElementById('delete-modal').addEventListener('click', (e) => {
  if (e.target.id === 'delete-modal') closeDeleteModal();
});

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeDeleteModal();
  }
});