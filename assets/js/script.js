// ===== BOOK DATA =====
const books = [
  {
    id: 1,
    title: "The Midnight Garden",
    author: "Elizabeth Harper",
    genre: "Literary Fiction",
    condition: "Like New",
    owner: "Sarah M.",
    location: "Brooklyn, NY",
    description: "A captivating tale of mystery and romance set in a Victorian estate. The pages are pristine, spine uncreased. This first edition includes the author's original foreword and has been lovingly stored in a smoke-free home.",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
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
    description: "An epic historical saga spanning three generations. Minor wear on corners, otherwise in excellent condition. A gripping read that I couldn't put down - now ready to find its next appreciative reader.",
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
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
    description: "A psychological thriller that keeps you guessing until the very last page. No markings or damage. Perfect for fans of Agatha Christie and modern noir. Includes bonus short story in the back.",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
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
    description: "A beautifully illustrated guide to mindful living and decluttering your space and mind. Some highlighting on key passages that previous readers found meaningful. A transformative read.",
    coverUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop",
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
    description: "A sweeping romance set against the backdrop of 1920s Paris. Cover shows some wear and pages have slight yellowing, but the story inside is as beautiful as ever. A classic love story.",
    coverUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop",
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
    description: "A mind-bending sci-fi adventure about humanity's first contact with an alien civilization. Hardcover edition with dust jacket intact. Winner of the Nebula Award. Absolutely pristine condition.",
    coverUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    featured: false,
  },
];

const genres = [
  "All Genres",
  "Literary Fiction",
  "Historical Fiction",
  "Mystery",
  "Self-Help",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Biography",
  "Non-Fiction",
];

const conditions = ["All Conditions", "Like New", "Good", "Fair"];

// ===== SVG ICONS =====
const icons = {
  book: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  refresh: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  filter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  alertCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`,
};

// ===== MOBILE NAVIGATION =====
function initMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  
  if (!toggle || !mobileNav) return;
  
  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('active');
    mobileNav.classList.toggle('active');
    toggle.innerHTML = isOpen ? icons.menu : icons.close;
  });
}

// ===== BOOK CARDS =====
function createBookCard(book, includeToggle = true) {
  const conditionClass = book.condition.toLowerCase().replace(' ', '-');
  
  return `
    <article class="book-card" data-id="${book.id}" data-genre="${book.genre}" data-condition="${book.condition}">
      <div class="book-cover">
        <img src="${book.coverUrl}" alt="Cover of ${book.title}" loading="lazy">
        <span class="book-condition ${conditionClass}">${book.condition}</span>
      </div>
      <div class="book-info">
        <span class="book-genre">${book.genre}</span>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">by ${book.author}</p>
        <div class="book-meta">
          <span>${icons.user} ${book.owner}</span>
          <span>${icons.mapPin} ${book.location}</span>
        </div>
        ${includeToggle ? `
          <button class="book-toggle" onclick="toggleBookDetails(${book.id})">
            Show Details ${icons.chevronDown}
          </button>
          <div class="book-details" id="book-details-${book.id}">
            <p>${book.description}</p>
            <button class="btn btn-primary">Request Exchange</button>
          </div>
        ` : ''}
      </div>
    </article>
  `;
}

function toggleBookDetails(bookId) {
  const details = document.getElementById(`book-details-${bookId}`);
  const toggle = details.previousElementSibling;
  
  const isExpanded = details.classList.contains('expanded');
  
  details.classList.toggle('expanded');
  toggle.classList.toggle('expanded');
  toggle.innerHTML = isExpanded 
    ? `Show Details ${icons.chevronDown}`
    : `Hide Details ${icons.chevronDown}`;
}

// ===== FEATURED BOOKS (Homepage) =====
function renderFeaturedBooks() {
  const container = document.getElementById('featured-books');
  if (!container) return;
  
  const featuredBooks = books.filter(book => book.featured);
  container.innerHTML = featuredBooks.map(book => createBookCard(book)).join('');
}

// ===== BOOK LISTING PAGE =====
function initBooksPage() {
  const container = document.getElementById('books-grid');
  const searchInput = document.getElementById('search-input');
  const genreSelect = document.getElementById('genre-select');
  const conditionSelect = document.getElementById('condition-select');
  const mobileGenreSelect = document.getElementById('mobile-genre-select');
  const mobileConditionSelect = document.getElementById('mobile-condition-select');
  const clearBtn = document.getElementById('clear-filters');
  const mobileClearBtn = document.getElementById('mobile-clear-filters');
  const mobileFilterToggle = document.getElementById('mobile-filter-toggle');
  const mobileFilters = document.getElementById('mobile-filters');
  const resultsCount = document.getElementById('results-count');
  
  if (!container) return;
  
  let filters = {
    search: '',
    genre: 'All Genres',
    condition: 'All Conditions'
  };
  
  function filterBooks() {
    return books.filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        book.author.toLowerCase().includes(filters.search.toLowerCase());
      const matchesGenre = filters.genre === 'All Genres' || book.genre === filters.genre;
      const matchesCondition = filters.condition === 'All Conditions' || book.condition === filters.condition;
      return matchesSearch && matchesGenre && matchesCondition;
    });
  }
  
  function renderBooks() {
    const filtered = filterBooks();
    
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1;">
          <div class="no-results-icon">${icons.search}</div>
          <h3>No books found</h3>
          <p>Try adjusting your search or filters to find what you're looking for.</p>
          <button class="btn btn-primary" onclick="clearAllFilters()">Clear All Filters</button>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(book => createBookCard(book)).join('');
    }
    
    // Update results count
    const hasFilters = filters.search || filters.genre !== 'All Genres' || filters.condition !== 'All Conditions';
    resultsCount.textContent = `Showing ${filtered.length} book${filtered.length !== 1 ? 's' : ''}${hasFilters ? ' matching your filters' : ''}`;
    
    // Show/hide clear button
    if (clearBtn) clearBtn.style.display = hasFilters ? 'flex' : 'none';
  }
  
  function clearFilters() {
    filters = { search: '', genre: 'All Genres', condition: 'All Conditions' };
    if (searchInput) searchInput.value = '';
    if (genreSelect) genreSelect.value = 'All Genres';
    if (conditionSelect) conditionSelect.value = 'All Conditions';
    if (mobileGenreSelect) mobileGenreSelect.value = 'All Genres';
    if (mobileConditionSelect) mobileConditionSelect.value = 'All Conditions';
    renderBooks();
  }
  
  // Make clearFilters globally accessible
  window.clearAllFilters = clearFilters;
  
  // Event listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filters.search = e.target.value;
      renderBooks();
    });
  }
  
  if (genreSelect) {
    genreSelect.addEventListener('change', (e) => {
      filters.genre = e.target.value;
      if (mobileGenreSelect) mobileGenreSelect.value = e.target.value;
      renderBooks();
    });
  }
  
  if (conditionSelect) {
    conditionSelect.addEventListener('change', (e) => {
      filters.condition = e.target.value;
      if (mobileConditionSelect) mobileConditionSelect.value = e.target.value;
      renderBooks();
    });
  }
  
  if (mobileGenreSelect) {
    mobileGenreSelect.addEventListener('change', (e) => {
      filters.genre = e.target.value;
      if (genreSelect) genreSelect.value = e.target.value;
      renderBooks();
    });
  }
  
  if (mobileConditionSelect) {
    mobileConditionSelect.addEventListener('change', (e) => {
      filters.condition = e.target.value;
      if (conditionSelect) conditionSelect.value = e.target.value;
      renderBooks();
    });
  }
  
  if (clearBtn) clearBtn.addEventListener('click', clearFilters);
  if (mobileClearBtn) mobileClearBtn.addEventListener('click', clearFilters);
  
  if (mobileFilterToggle && mobileFilters) {
    mobileFilterToggle.addEventListener('click', () => {
      mobileFilters.classList.toggle('active');
    });
  }
  
  // Initial render
  renderBooks();
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contact-form');
  const formWrapper = document.getElementById('contact-form-wrapper');
  
  if (!form) return;
  
  const fields = {
    name: { required: true, minLength: 2 },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    subject: { required: true },
    message: { required: true, minLength: 20 }
  };
  
  const touched = {};
  
  function validateField(name, value) {
    const rules = fields[name];
    if (!rules) return null;
    
    if (rules.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    
    if (rules.minLength && value.trim().length < rules.minLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rules.minLength} characters`;
    }
    
    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Please enter a valid email address';
    }
    
    return null;
  }
  
  function showError(input, message) {
    const errorEl = input.parentElement.querySelector('.error-message');
    input.classList.add('error');
    if (errorEl) {
      errorEl.innerHTML = `${icons.alertCircle} ${message}`;
      errorEl.style.display = 'flex';
    }
  }
  
  function clearError(input) {
    const errorEl = input.parentElement.querySelector('.error-message');
    input.classList.remove('error');
    if (errorEl) {
      errorEl.style.display = 'none';
    }
  }
  
  function updateCharCount() {
    const messageInput = form.querySelector('[name="message"]');
    const charCount = document.getElementById('char-count');
    if (messageInput && charCount) {
      charCount.textContent = `${messageInput.value.length}/500 characters`;
    }
  }
  
  // Add event listeners to form fields
  Object.keys(fields).forEach(fieldName => {
    const input = form.querySelector(`[name="${fieldName}"]`);
    if (!input) return;
    
    input.addEventListener('blur', () => {
      touched[fieldName] = true;
      const error = validateField(fieldName, input.value);
      if (error) {
        showError(input, error);
      } else {
        clearError(input);
      }
    });
    
    input.addEventListener('input', () => {
      if (touched[fieldName]) {
        const error = validateField(fieldName, input.value);
        if (error) {
          showError(input, error);
        } else {
          clearError(input);
        }
      }
      if (fieldName === 'message') {
        updateCharCount();
      }
    });
  });
  
  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let hasErrors = false;
    
    Object.keys(fields).forEach(fieldName => {
      touched[fieldName] = true;
      const input = form.querySelector(`[name="${fieldName}"]`);
      const error = validateField(fieldName, input.value);
      if (error) {
        showError(input, error);
        hasErrors = true;
      } else {
        clearError(input);
      }
    });
    
    if (!hasErrors) {
      // Show success message
      formWrapper.innerHTML = `
        <div class="form-success">
          ${icons.check}
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
        </div>
      `;
    }
  });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  renderFeaturedBooks();
  initBooksPage();
  initContactForm();
});

// Make toggleBookDetails globally accessible
window.toggleBookDetails = toggleBookDetails;
