var nav = document.getElementById("nav");
var navToggle = document.getElementById("navToggle");

navToggle.onclick = () => {
  nav.classList.toggle("opened");
};

// Get your form and button
const form = document.querySelector(".contact_form");
const submitBtn = document.querySelector(".contact_form_submit_btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  setTimeout(() => {
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = "Get In Touch";
  }, 1000);
});
