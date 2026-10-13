const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("enquiryForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const fields = [
    ["Name", data.get("name")],
    ["Phone", data.get("phone")],
    ["Service", data.get("service")],
    ["Travel date", data.get("date") || "Not specified"],
    ["People / employees", data.get("people") || "Not specified"],
    ["Pickup / route", data.get("route") || "Not specified"],
    ["Details", data.get("message") || "Not specified"]
  ];
  const subject = encodeURIComponent("Weekend Trip Maker enquiry - " + data.get("service"));
  const body = encodeURIComponent(fields.map(([label, value]) => `${label}: ${value}`).join("\n"));
  // Replace this address with the official business email before publishing.
  const businessEmail = "weekendtripmaker3931@gmail.com";
  status.textContent = "Opening your email app with the enquiry details…";
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
