// Portfolio interactions: current year, email copy, and mobile menu closing.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const copyButton = document.getElementById("copyEmail");
  const copyMessage = document.getElementById("copyMessage");
  const email = "sakthisnet@gmail.com";

  copyButton?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyMessage.textContent = "Email address copied!";
    } catch {
      copyMessage.textContent = `Email: ${email}`;
    }
  });

  // Close the collapsed Bootstrap navigation after selecting a section.
  document.querySelectorAll("#navMenu .nav-link, #navMenu .btn").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navMenu");
      if (menu?.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
