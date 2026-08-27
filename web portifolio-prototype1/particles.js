// -------------------- ParticlesJS --------------------
// -------------------- Menu Responsivo --------------------
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navItems = document.querySelector(".nav-items");
const navLink = document.querySelectorAll(".nav-items a");

// Abrir o menu
menuIcon.addEventListener("click", () => {
    navItems.classList.add("open");
});

// Fechar o menu
closeIcon.addEventListener("click", () => {
    navItems.classList.remove("open");
});

// Fechar o menu ao clicar em um link
navLink.forEach(link => {
  link.addEventListener("click", () => {
    navItems.classList.remove("open");
  });
});


  
//devtitle//
var typed = new Typed('.skillis', {
  strings: ['Programmer', '3D Generalist', 'UX/UI Designer', 'Motion Designer'],
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 1500,
  loop: true
});

// button contact//

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-right form");
  const button = document.querySelector(".formBtn .btn1");

  form.addEventListener("submit", function (e) {
    // Evita o envio real para testes (remova essa linha em produção)
    // e.preventDefault();

    // Adiciona classe 'sent'
    button.classList.add("sent");

    // Altera o texto do botão
    button.innerHTML = `<i class='bx bx-check-circle'></i> Enviado!`;

    // Desativa o botão temporariamente (opcional)
    button.disabled = true;

    // (Opcional) Reativa o botão e restaura texto após alguns segundos
    setTimeout(() => {
      button.classList.remove("sent");
      button.disabled = false;
      button.innerHTML = `<i class='bx bx-mail-send'></i> Send Message`;
    }, 5000); // 5 segundos
  });
});

// Smooth scrolling for anchor links

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// skills bar animation 

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const line = entry.target;
        const percent = line.getAttribute('data-percent');
        line.style.setProperty('--fill-width', percent + '%');
        observer.unobserve(line);
      }
    });
  }, { threshold: 0.5 });

document.querySelectorAll('.bar .line').forEach(line => {
  observer.observe(line);
});

// Modal dinâmico
const modal = document.getElementById('global-portfolio-modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const closeBtn = document.getElementById('bx-exit');

// Abrir o modal ao clicar em um card
document.querySelectorAll('.img-card').forEach((card) => {
  card.addEventListener('click', () => {
    const title = card.dataset.title;
    const desc = card.dataset.desc;
    const img = card.dataset.img;
    const link = card.dataset.link;

    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalImg.src = img;
    modalLink.href = link;

    modal.classList.add('active');
    document.body.classList.add('no-scroll');
  });
});

// Fechar o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.classList.remove('no-scroll');
});

// Fechar o modal ao clicar fora do conteúdo (fundo escuro)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});

// Evitar que o clique no link feche o modal
modalLink.addEventListener('click', (event) => {
  event.stopPropagation(); // Permite o redirecionamento sem fechar o modal
});




// ===== Scroll to Top Button =====
const scrollToTopBtn = document.querySelector('.scrolltoTop-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add('active');
  } else {
    scrollToTopBtn.classList.remove('active');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Navigation Menu Active on Scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-items a');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});




