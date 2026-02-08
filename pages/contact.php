<?php
$page_title = "Contact Us";
require_once __DIR__ . "/../includes/header.php";
require_once __DIR__ . "/../includes/navbar.php";

?>
<?php

$success_message = "";
$error_message = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = trim($_POST["name"] ?? "");
  $email = trim($_POST["email"] ?? "");
  $subject = trim($_POST["subject"] ?? "");
  $message = trim($_POST["message"] ?? "");

  // Basic validation
  if ($name === "" || $email === "" || $subject === "" || $message === "") {
    $error_message = "Please fill in all required fields.";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error_message = "Please enter a valid email address.";
  } elseif (strlen($message) < 10) {
    $error_message = "Your message is too short. Please provide more details.";
  } else {
    // Saved to DB later or send email later.
    $success_message = "Thanks, " . htmlspecialchars($name) . "! Your message has been received. We'll get back to you within 24-48 hours.";

    // Clear form after success
    $_POST = [];
  }
}
?>
    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1 class="section-title">Contact Us</h1>
        <p>We're building a community where books find new readers and stories continue to inspire. Founded in 2020, BookSwap connects book lovers across neighborhoods, making it easy to share your favorite reads and discover new ones.</p>
      </div>
    </header>

   <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2 class="section-title">Get In Touch</h2>
            <p>Have questions, feedback, or want to partner with us? We'd love to hear from you. Fill out the form and we'll get back to you within 24-48 hours.</p>
            
            <div class="contact-details">
              <article class="contact-item">
                <div class="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@bookswap.community</p>
                </div>
              </article>
              
              <article class="contact-item">
                <div class="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Our Office</h4>
                  <p>YIBS, Carrefour Simbock<br>Yaounde</p>
                </div>
              </article>
              
              <article class="contact-item">
                <div class="contact-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h4>Response Time</h4>
                  <p>We typically respond within 24-48 business hours</p>
                </div>
              </article>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="contact-form-wrapper" id="contact-form-wrapper">
            <?php if (!empty($success_message)): ?>
              <div class="alert success">
                <?php echo $success_message; ?>
              </div>
            <?php endif; ?>

            <?php if (!empty($error_message)): ?>
              <div class="alert error">
                <?php echo htmlspecialchars($error_message); ?>
              </div>
            <?php endif; ?>
            <h3>Send Us a Message</h3>
            
            <form id="contact-form" method="POST" action="<?php echo BASE_URL; ?>/pages/about.php#contact" novalidate>
              <div class="form-group">
                <label for="name">Full Name <span class="required">*</span></label>
                <input type="text" id="name" name="name" class="form-input"
                  value="<?php echo htmlspecialchars($_POST["name"] ?? ""); ?>"
                  placeholder="Alchemy Codes">
                <p class="error-message" style="display: none;"></p>
              </div>
              
              <div class="form-group">
                <label for="email">Email Address <span class="required">*</span></label>
                <input type="email" id="email" name="email" class="form-input"
                value="<?php echo htmlspecialchars($_POST["email"] ?? ""); ?>"
                placeholder="alchemy@gmail.com">
                <p class="error-message" style="display: none;"></p>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject <span class="required">*</span></label>
                <select id="subject" name="subject" class="form-select">
                  <option value="">Select a subject</option>
                  <option value="General Inquiry" <?php echo (($_POST["subject"] ?? "") === "General Inquiry") ? "selected" : ""; ?>>
                    General Inquiry
                  </option>
                   <option value="Book Exchange" <?php echo (($_POST["subject"] ?? "") === "Book Exchange") ? "selected" : ""; ?>>
                  Book Exchange
                </option>
                  <option value="Report an Issue" <?php echo (($_POST["subject"] ?? "") === "Report an Issue") ? "selected" : ""; ?>>
                    Report an Issue
                  </option>
                  <option value="Partnership" <?php echo (($_POST["subject"] ?? "") === "Partnership") ? "selected" : ""; ?>>
                    Partnership Opportunity
                  </option>
                  <option value="Feedback" <?php echo (($_POST["subject"] ?? "") === "Feedback") ? "selected" : ""; ?>>
                    Feedback & Suggestions
                  </option>
                </select>
                <p class="error-message" style="display: none;"></p>
              </div>
              
              <div class="form-group">
                <label for="message">Message <span class="required">*</span></label>
                <textarea id="message" name="message" class="form-textarea"
                  placeholder="Tell us how we can help you..."><?php echo htmlspecialchars($_POST["message"] ?? ""); ?></textarea>
                <p class="error-message" style="display: none;"></p>
                <p id="char-count" class="char-count">0/500 characters</p>
              </div>
              
              <button type="submit" class="btn btn-primary form-submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
<!-- Footer -->
<?php
require_once __DIR__ . "/../includes/footer.php";
?>