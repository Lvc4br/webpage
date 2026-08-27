//slider

// -------------------- Slider --------------------
let items = document.querySelectorAll('.slider .list .item');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItems = items.length;
let itemActive = 0;
let lastScrollPos = 0; // Variável para armazenar a posição do scroll

// Botão "next"
next.onclick = function () {
    // Salva a posição do scroll antes de mudar o slide
    lastScrollPos = window.scrollY;

    itemActive = (itemActive + 1) % countItems;
    showSlider();
};

// Botão "prev"
prev.onclick = function () {
    // Salva a posição do scroll antes de mudar o slide
    lastScrollPos = window.scrollY;

    itemActive = (itemActive - 1 + countItems) % countItems;
    showSlider();
};

// Auto-play a cada 8 segundos
let refreshInterval = setInterval(() => {
    next.click();
}, 8000);

// Atualiza o slider
function showSlider() {
    // Remove 'active' antigo
    document.querySelector('.slider .list .item.active')?.classList.remove('active');
    document.querySelector('.thumbnail .item.active')?.classList.remove('active');

    // Adiciona 'active' novo
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // Scroll automático da thumbnail ativa
    thumbnails[itemActive].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
    });

    // Volta para a posição do scroll antes de mudar o slide
    window.scrollTo(0, lastScrollPos);

    // Reinicia o autoplay
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 8000);
}

// Evento de clique nas thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        // Salva a posição do scroll antes de mudar o slide
        lastScrollPos = window.scrollY;

        itemActive = index;
        showSlider();
    });
});


// -------------------- Sticky Menu --------------------
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// -------------------- Menu Responsivo --------------------
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navItems = document.querySelector(".nav-items");

// Abrir o menu
menuIcon.addEventListener("click", () => {
    navItems.classList.add("open");
});

// Fechar o menu
closeIcon.addEventListener("click", () => {
    navItems.classList.remove("open");
});

// auto update year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Iluminação
const handleOnMouseMove = e => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
  
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
  
  document.querySelectorAll(".card").forEach(card => {
    card.onmousemove = handleOnMouseMove;
  });
  

// -------------------- MODAL CSS-ONLY (DINÂMICO) --------------------
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.dataset.img;
    const desc = card.dataset.desc;

    document.getElementById("modal-img").src = img;
    document.getElementById("modal-text").textContent = desc;
    document.getElementById("modal-toggle").checked = true;
  });
});

// Filter Projects
// -------------------- Filter Projects (Animação Suave) --------------------
const filterButtons = document.querySelectorAll('.filter-buttons button');
const cards = document.querySelectorAll('#cards .card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Trocar botão ativo
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    cards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        // Mostrar com animação
        card.style.display = 'block';
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        });
      } else {
        // Esconder com animação
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

