const navbar = document.getElementById("navbar");

const colors = ["color-1", "color-2", "color-3", "color-4"];

window.addEventListener("scroll", () => {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollFraction = window.scrollY / maxScroll;

  const index = Math.min(
    colors.length - 1,
    Math.floor(scrollFraction * colors.length)
  );

  navbar.classList.remove("color-1", "color-2", "color-3", "color-4");
  navbar.classList.add(colors[index]);
});

// ================= ACTIVE LINK + SMOOTH SCROLL =================
const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {

        // Remove active from all
        navLinks.forEach(nav => nav.classList.remove("active"));

        // Add active to clicked
        this.classList.add("active");
    });
});