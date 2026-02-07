/* ==========================
   Module 1 - Auth Pages JS
   ========================== */

function $(selector) {
  return document.querySelector(selector);
}

function showAlert(type, message) {
  const alertBox = $(".alert");
  if (!alertBox) return;

  alertBox.classList.remove("success", "error", "show");
  alertBox.classList.add("show", type);
  alertBox.textContent = message;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function bindPasswordToggle() {
  const toggle = $(".toggle-pass");
  const input = $("#password");

  if (!toggle || !input) return;

  toggle.addEventListener("click", () => {
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    toggle.textContent = isHidden ? "Hide" : "Show";
  });
}

function bindLoginForm() {
  const form = $("#loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = $("#email").value;
    const password = $("#password").value;

    if (!validateEmail(email)) {
      showAlert("error", "Please enter a valid email address.");
      return;
    }

    if (password.trim().length < 6) {
      showAlert("error", "Password must be at least 6 characters.");
      return;
    }

    showAlert("success", "Login successful (demo). Module 2 will connect this to PHP.");
    form.reset();
  });
}

function bindRegisterForm() {
  const form = $("#registerForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = $("#fullName").value.trim();
    const email = $("#email").value.trim();
    const password = $("#password").value;
    const confirmPassword = $("#confirmPassword").value;

    if (fullName.length < 3) {
      showAlert("error", "Please enter your full name.");
      return;
    }

    if (!validateEmail(email)) {
      showAlert("error", "Please enter a valid email address.");
      return;
    }

    if (password.trim().length < 6) {
      showAlert("error", "Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      showAlert("error", "Passwords do not match.");
      return;
    }

    showAlert("success", "Account created successfully (demo). Module 4 will store users.");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindPasswordToggle();
  bindLoginForm();
  bindRegisterForm();
});