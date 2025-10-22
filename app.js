document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const app = document.getElementById("app");

  if (splash && app) {
    setTimeout(() => {
      splash.style.display = "none";
      app.style.display = "block";
    }, 3000);
  }
});

function board(btn) {
  const li = btn.parentElement;
  if (li && document.getElementById("onboard")) {
    btn.remove();
    document.getElementById("onboard").appendChild(li);
  }
}

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const lines = document.querySelectorAll(".menu-btn .line");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && nav && navLinks) {
  menuBtn.addEventListener("click", () => {
   
    nav.classList.toggle("nav-open");
    navLinks.classList.toggle("fade-in");

    lines[0].classList.toggle("line-cross");
    lines[1].classList.toggle("line-fade-out");
    lines[2].classList.toggle("line-cross");
  });
}


const registerForm = document.getElementById("registerr-Form");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contacts").value.trim();
    const errorMsg = document.getElementById("errorMessage");

    if (!name || !contact) {
      errorMsg.textContent = "Please fill in all fields correctly.";
      errorMsg.style.color = "red";
      return;
    }

    errorMsg.textContent = "Registration successful!";
    errorMsg.style.color = "green";

    registerForm.reset();
  });
}


function initMap() {
  if (typeof L !== "undefined" && document.getElementById("map")) {
    const map = L.map("map").setView([-26.2041, 28.0473], 13); // Johannesburgs is the default here
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([-26.2041, 28.0473])
      .addTo(map)
      .bindPopup("Welcome to Mageza Transport")
      .openPopup();
  }
}

window.addEventListener("load", initMap);
