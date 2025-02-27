document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".list-link");

  burger.addEventListener("click", () => {
    // Toggle de l'active sur le menu
    nav.classList.toggle("active");

    // Change l'aria-expanded pour refléter l'état du menu
    const isOpen = nav.classList.contains("active");
    burger.setAttribute("aria-expanded", isOpen);

    // Empêche le scroll si le menu est ouvert
    document.body.classList.toggle("no-scroll", isOpen);
  });

  // Ferme le menu si on clique en dehors
  document.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    }
  });
});
