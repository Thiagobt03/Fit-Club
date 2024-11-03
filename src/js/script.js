document.addEventListener("scroll", () => {
  //ANIMAÇÃO DE SCROLL
  const sections = document.querySelectorAll(".section__container");
  sections.forEach((section) => {
    const sectionsTop = section.getBoundingClientRect().top;
    if (sectionsTop < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

window.addEventListener("load", () => {
  //ANIMAÇÃO DE CARREGAMENTO
  const loader = document.getElementById("loader");
  loader.style.display = "none";

  const mainContent = document.getElementById("main-content");
  mainContent.style.display = "block";
});

