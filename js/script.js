document.addEventListener("DOMContentLoaded", () => {
  const dynamicMessage = document.getElementById("dynamic-message");
  if (dynamicMessage) {
    const hour = new Date().getHours();
    let message = "Welcome to Blush & Bloom Beauty Studio.";

    if (hour < 12) {
      message = "Good morning! We’re ready to help you feel refreshed and beautiful.";
    } else if (hour < 17) {
      message = "Good afternoon! Treat yourself to a little beauty and self-care.";
    } else {
      message = "Good evening! Let us help you unwind and feel your best.";
    }

    dynamicMessage.textContent = message;
  }

  const currentDate = document.getElementById("current-date");
  if (currentDate) {
    const today = new Date();
    currentDate.textContent = "Today is " + today.toLocaleDateString("en-ZA", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  const sections = document.querySelectorAll("main section, body > section");
  sections.forEach((section, index) => {
    section.classList.add("fade-in");
    section.style.animationDelay = (index * 0.1) + "s";
  });

  const salonImage = document.querySelector("img[src='images/salon.jpg']");
  if (salonImage) {
    salonImage.addEventListener("click", () => {
      salonImage.classList.toggle("expanded");
    });
  }

  const enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const service = document.getElementById("service").value.trim();
      const message = document.getElementById("message").value.trim();
      const feedback = document.getElementById("form-feedback");

      if (!name || !email || !service || !message) {
        feedback.textContent = "Please complete all fields before submitting.";
        feedback.style.color = "crimson";
        return;
      }

      feedback.textContent = "Thank you, " + name + "! Your enquiry has been sent.";
      feedback.style.color = "green";
      enquiryForm.reset();
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();
      const feedback = document.getElementById("contact-feedback");

      if (!name || !email || !message) {
        feedback.textContent = "Please complete all fields before sending your message.";
        feedback.style.color = "crimson";
        return;
      }

      feedback.textContent = "Thanks, " + name + "! Your message has been sent successfully.";
      feedback.style.color = "green";
      contactForm.reset();
    });
  }
});
