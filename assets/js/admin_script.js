// assets/js/admin_script.js

document.addEventListener("DOMContentLoaded", () => {
  // ==============================
  // DOM ELEMENTS
  // ==============================
  const booksTableBody = document.getElementById("books-table-body");

  const totalBooksEl = document.getElementById("total-books");
  const likeNewCountEl = document.getElementById("like-new-count");
  const goodCountEl = document.getElementById("good-count");
  const fairCountEl = document.getElementById("fair-count");

  const searchInput = document.getElementById("search-input");

  const modal = document.getElementById("book-modal");
  const deleteModal = document.getElementById("delete-modal");

  const openModalBtn = document.getElementById("add-book-btn");
  const openModalBtnTop = document.getElementById("add-book-btn-top");

  const closeModalBtn = document.getElementById("close-modal");
  const cancelModalBtn = document.getElementById("cancel-modal-btn");

  const bookForm = document.getElementById("book-form");

  const modalTitle = document.getElementById("modal-title");
  const submitBtn = document.getElementById("submit-btn");

  const bookIdInput = document.getElementById("book-id");
  const titleInput = document.getElementById("book-title");
  const authorInput = document.getElementById("book-author");
  const genreInput = document.getElementById("book-genre");
  const conditionInput = document.getElementById("book-condition");
  const ownerInput = document.getElementById("book-owner");
  const locationInput = document.getElementById("book-location");
  const coverInput = document.getElementById("book-cover");
  const descriptionInput = document.getElementById("book-description");
  const featuredInput = document.getElementById("book-featured");

  const deleteBookTitleEl = document.getElementById("delete-book-title");
  const cancelDeleteBtn = document.getElementById("cancel-delete");
  const confirmDeleteBtn = document.getElementById("confirm-delete");

  const toastContainer = document.getElementById("toast-container");

  // ==============================
  // API PATHS
  // ==============================
  // Your admin page is inside /admin/
  // so api files are inside /admin/api/
  const API = {
    getBooks: "./api/books_list.php",
    addBook: "./api/books_create.php",
    updateBook: "./api/books_update.php",
    deleteBook: "./api/books_delete.php",
  };

  // ==============================
  // STATE
  // ==============================
  let allBooks = [];
  let filteredBooks = [];
  let deleteTargetId = null;

  // ==============================
  // HELPERS
  // ==============================
  function showToast(message, type = "success") {
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <strong>${type === "success" ? "Success" : "Error"}</strong>
        <p>${escapeHTML(message)}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("hide");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Null safe + prevents crash
  function escapeHTML(value) {
    if (value === null || value === undefined) return "";
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Normalize book object no matter what backend returns
  function normalizeBook(book) {
    return {
      id: Number(book.id || 0),
      title: book.title ?? "",
      author: book.author ?? "",
      genre: book.genre ?? "",
      condition: book.condition ?? book.book_condition ?? "",
      owner: book.owner ?? book.owner_name ?? "",
      location: book.location ?? "",
      description: book.description ?? "",
      coverUrl: book.coverUrl ?? book.cover_url ?? "",
      featured: book.featured == 1 || book.featured === true,
    };
  }

  function getConditionBadge(condition) {
    if (condition === "Like New") return `<span class="badge success">Like New</span>`;
    if (condition === "Good") return `<span class="badge info">Good</span>`;
    if (condition === "Fair") return `<span class="badge warning">Fair</span>`;
    return `<span class="badge">${escapeHTML(condition)}</span>`;
  }

  function updateStats(books) {
    if (!totalBooksEl) return;

    totalBooksEl.textContent = books.length;

    let likeNew = 0;
    let good = 0;
    let fair = 0;

    books.forEach((b) => {
      if (b.condition === "Like New") likeNew++;
      if (b.condition === "Good") good++;
      if (b.condition === "Fair") fair++;
    });

    if (likeNewCountEl) likeNewCountEl.textContent = likeNew;
    if (goodCountEl) goodCountEl.textContent = good;
    if (fairCountEl) fairCountEl.textContent = fair;
  }

  function openModal(mode = "add") {
    if (!modal) return;

    modal.classList.add("active");

    if (mode === "add") {
      modalTitle.textContent = "Add New Book";
      submitBtn.textContent = "Add Book";
      bookForm.reset();
      bookIdInput.value = "";
      featuredInput.checked = false;
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
  }

  function openDeleteModal(book) {
    if (!deleteModal) return;

    deleteModal.classList.add("active");
    deleteBookTitleEl.textContent = book.title;
    deleteTargetId = book.id;
  }

  function closeDeleteModal() {
    if (!deleteModal) return;

    deleteModal.classList.remove("active");
    deleteTargetId = null;
  }

  // ==============================
  // RENDER
  // ==============================
  function renderBooksTable(books) {
    if (!booksTableBody) return;

    booksTableBody.innerHTML = "";

    if (!books.length) {
      booksTableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding:20px; opacity:0.7;">
            No books found.
          </td>
        </tr>
      `;
      return;
    }

    books.forEach((rawBook) => {
      const book = normalizeBook(rawBook);

      const row = document.createElement("tr");

      const cover = book.coverUrl
        ? escapeHTML(book.coverUrl)
        : "https://via.placeholder.com/50x70?text=No+Cover";

      row.innerHTML = `
        <td>
          <div class="book-cell">
            <img 
              class="book-cover"
              src="${cover}"
              alt="${escapeHTML(book.title)}"
              onerror="this.src='https://via.placeholder.com/50x70?text=No+Cover';"
            />
            <div class="book-info">
              <div class="book-title">
                ${escapeHTML(book.title)}
                ${book.featured ? `<span class="featured-tag">Featured</span>` : ""}
              </div>
              <div class="book-author">by ${escapeHTML(book.author)}</div>
            </div>
          </div>
        </td>

        <td>${escapeHTML(book.genre)}</td>
        <td>${getConditionBadge(book.condition)}</td>
        <td>${escapeHTML(book.owner)}</td>
        <td>${escapeHTML(book.location)}</td>

        <td>
          <div class="action-buttons">
            <button class="btn-icon edit" data-id="${book.id}" title="Edit">
              ✏️
            </button>
            <button class="btn-icon delete" data-id="${book.id}" title="Delete">
              🗑️
            </button>
          </div>
        </td>
      `;

      booksTableBody.appendChild(row);
    });

    attachRowEvents();
  }

  function attachRowEvents() {
    document.querySelectorAll(".btn-icon.edit").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id);
        const rawBook = allBooks.find((b) => Number(b.id) === id);
        if (!rawBook) return;

        const book = normalizeBook(rawBook);

        modalTitle.textContent = "Edit Book";
        submitBtn.textContent = "Update Book";

        bookIdInput.value = book.id;
        titleInput.value = book.title;
        authorInput.value = book.author;
        genreInput.value = book.genre;
        conditionInput.value = book.condition;
        ownerInput.value = book.owner;
        locationInput.value = book.location;
        coverInput.value = book.coverUrl || "";
        descriptionInput.value = book.description;
        featuredInput.checked = !!book.featured;

        openModal("edit");
      });
    });

    document.querySelectorAll(".btn-icon.delete").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id);
        const rawBook = allBooks.find((b) => Number(b.id) === id);
        if (!rawBook) return;

        const book = normalizeBook(rawBook);
        openDeleteModal(book);
      });
    });
  }

  // ==============================
  // FETCH BOOKS
  // ==============================
  async function loadBooks() {
    try {
      const res = await fetch(API.getBooks);
      const text = await res.text();

      // Helps debugging if PHP returns HTML error
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Books list API did not return JSON:", text);
        throw new Error("Books list API did not return JSON");
      }

      allBooks = Array.isArray(data) ? data : [];
      filteredBooks = [...allBooks];

      updateStats(allBooks);
      renderBooksTable(filteredBooks);
    } catch (err) {
      console.error(err);
      showToast("Could not load books. Check API path and PHP errors.", "error");
    }
  }

  // ==============================
  // ADD / UPDATE BOOK
  // ==============================
  async function saveBook(payload, mode = "add") {
    const endpoint = mode === "edit" ? API.updateBook : API.addBook;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Save API did not return JSON:", text);
        showToast("PHP error: API did not return JSON. Check XAMPP error logs.", "error");
        return false;
      }

      if (!data.success) {
        showToast(data.message || "Operation failed", "error");
        return false;
      }

      showToast(data.message || "Saved successfully", "success");
      return true;
    } catch (err) {
      console.error(err);
      showToast("Server error while saving book", "error");
      return false;
    }
  }

  // ==============================
  // DELETE BOOK
  // ==============================
  async function deleteBook(id) {
    try {
      const res = await fetch(API.deleteBook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Delete API did not return JSON:", text);
        showToast("PHP error: delete did not return JSON. Check logs.", "error");
        return false;
      }

      if (!data.success) {
        showToast(data.message || "Delete failed", "error");
        return false;
      }

      showToast(data.message || "Book deleted", "success");
      return true;
    } catch (err) {
      console.error(err);
      showToast("Server error while deleting book", "error");
      return false;
    }
  }

  // ==============================
  // EVENTS
  // ==============================
  if (openModalBtn) openModalBtn.addEventListener("click", () => openModal("add"));
  if (openModalBtnTop) openModalBtnTop.addEventListener("click", () => openModal("add"));

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeModal);

  // Click outside modal to close
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (deleteModal) {
    deleteModal.addEventListener("click", (e) => {
      if (e.target === deleteModal) closeDeleteModal();
    });
  }

  if (cancelDeleteBtn) cancelDeleteBtn.addEventListener("click", closeDeleteModal);

  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener("click", async () => {
      if (!deleteTargetId) return;

      const ok = await deleteBook(deleteTargetId);
      if (ok) {
        closeDeleteModal();
        loadBooks();
      }
    });
  }

  // Search filter
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.toLowerCase().trim();

      filteredBooks = allBooks.filter((rawBook) => {
        const b = normalizeBook(rawBook);

        return (
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.genre.toLowerCase().includes(q) ||
          b.owner.toLowerCase().includes(q) ||
          b.location.toLowerCase().includes(q)
        );
      });

      renderBooksTable(filteredBooks);
    });
  }

  // Submit add/edit form
  if (bookForm) {
    bookForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const id = parseInt(bookIdInput.value || "0");

      const payload = {
        id: id,
        title: titleInput.value.trim(),
        author: authorInput.value.trim(),
        genre: genreInput.value.trim(),
        condition: conditionInput.value.trim(),
        owner: ownerInput.value.trim(),
        location: locationInput.value.trim(),
        coverUrl: coverInput.value.trim(),
        description: descriptionInput.value.trim(),
        featured: featuredInput.checked,
      };

      // Basic validation
      if (
        !payload.title ||
        !payload.author ||
        !payload.genre ||
        !payload.condition ||
        !payload.owner ||
        !payload.location ||
        !payload.description
      ) {
        showToast("Please fill all required fields (*)", "error");
        return;
      }

      const mode = id > 0 ? "edit" : "add";

      const ok = await saveBook(payload, mode);
      if (ok) {
        closeModal();
        loadBooks();
      }
    });
  }

  // ==============================
  // INIT
  // ==============================
  loadBooks();
});