/* ==========================
   Module 4 - Auth Pages JS (PHP Sessions)
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
  const toggles = document.querySelectorAll(".toggle-pass");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const wrapper = toggle.closest(".input-wrapper");
      if (!wrapper) return;

      const input = wrapper.querySelector("input");
      if (!input) return;

      const isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";
      toggle.textContent = isHidden ? "Hide" : "Show";
    });
  });
}

async function safeJson(res) {
  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (e) {
    console.error("API did not return JSON:", text);
    return null;
  }
}

/* ==========================
   LOGIN
   ========================== */
function bindLoginForm() {
  const form = $("#loginForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = $("#email")?.value?.trim() || "";
    const password = $("#password")?.value || "";

    if (!validateEmail(email)) {
      showAlert("error", "Please enter a valid email address.");
      return;
    }

    if (password.trim().length < 6) {
      showAlert("error", "Password must be at least 6 characters.");
      return;
    }

    try {
      const res = await fetch("../api/auth/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await safeJson(res);

      if (!data) {
        showAlert("error", "PHP error: API did not return JSON. Check XAMPP logs.");
        return;
      }

      if (!data.success) {
        showAlert("error", data.message || "Login failed.");
        return;
      }

      showAlert("success", data.message || "Login successful!");

      // PRG redirect
      setTimeout(() => {
        window.location.href = "../index.php";
      }, 700);
    } catch (err) {
      console.error(err);
      showAlert("error", "Network/server error.");
    }
  });
}

/* ==========================
   REGISTER
   ========================== */
function bindRegisterForm() {
  const form = $("#registerForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = $("#fullName")?.value?.trim() || "";
    const email = $("#email")?.value?.trim() || "";
    const password = $("#password")?.value || "";
    const confirmPassword = $("#confirmPassword")?.value || "";

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

    try {
      const res = await fetch("../api/auth/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email,
          password,
        }),
      });

      const data = await safeJson(res);

      if (!data) {
        showAlert("error", "PHP error: API did not return JSON. Check XAMPP logs.");
        return;
      }

      if (!data.success) {
        showAlert("error", data.message || "Registration failed.");
        return;
      }

      showAlert("success", data.message || "Account created successfully!");

      // PRG redirect to login
      setTimeout(() => {
        window.location.href = "./login.php";
      }, 900);
    } catch (err) {
      console.error(err);
      showAlert("error", "Network/server error.");
    }
  });
}

/* ==========================
   INIT
   ========================== */
document.addEventListener("DOMContentLoaded", () => {
  bindPasswordToggle();
  bindLoginForm();
  bindRegisterForm();
});