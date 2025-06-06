const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  origin: "bottom",
  distance: "40px",
  duration: 900,
  interval: 120,
  opacity: 0,
  easing: "ease-in-out",
  reset: false,
});

const typedText = ["User Interface Designer", "Web Developer", "Creative Coder"];
let typedIdx = 0,
  charIdx = 0,
  typing = true;
function typeEffect() {
  const el = document.getElementById("typed");
  if (typing) {
    if (charIdx < typedText[typedIdx].length) {
      el.textContent += typedText[typedIdx][charIdx++];
      setTimeout(typeEffect, 80);
    } else {
      typing = false;
      setTimeout(typeEffect, 1200);
    }
  } else {
    if (charIdx > 0) {
      el.textContent = el.textContent.slice(0, --charIdx);
      setTimeout(typeEffect, 40);
    } else {
      typing = true;
      typedIdx = (typedIdx + 1) % typedText.length;
      setTimeout(typeEffect, 400);
    }
  }
}
typeEffect();

// Add to your existing script
document.querySelectorAll('.portfolio__card img').forEach((img, idx) => {
  img.addEventListener('click', () => {
    document.getElementById('modal-img').src = img.src;
    document.getElementById('modal-title').textContent = `Project ${idx + 1}`;
    document.getElementById('modal-desc').textContent = "Project description goes here.";
    document.getElementById('project-modal').style.display = 'flex';
  });
});
document.querySelector('.project-modal-close').onclick = () => {
  document.getElementById('project-modal').style.display = 'none';
};
window.onclick = (e) => {
  if (e.target.id === 'project-modal') document.getElementById('project-modal').style.display = 'none';
};

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
});
backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

