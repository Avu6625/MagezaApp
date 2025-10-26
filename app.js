document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");

  setTimeout(() => {
    splash.style.opacity = 0;
    setTimeout(() => splash.style.display = "none", 600);
  }, 3000);

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  const lines = menuBtn.querySelectorAll(".line");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    navLinks.classList.toggle("fade-in");

    lines[0].classList.toggle("line-cross");
    lines[1].classList.toggle("line-fade-out");
    lines[2].classList.toggle("line-cross");
  });

  const registerForm = document.getElementById("registerr-Form");
  const errorMsg = document.getElementById("errorMessage");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contacts").value.trim();
    const role = document.getElementById("registering-candidate").value;

    if (!name || !contact || !role) {
      errorMsg.textContent = "Please complete all fields.";
      errorMsg.style.color = "red";
      return;
    }
    errorMsg.textContent = "Registration successful!";
    errorMsg.style.color = "green";

    registerForm.reset();
  });
});
