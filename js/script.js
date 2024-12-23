var navbar = document.querySelector(".navbar")
var position = window.scrollY
var buttonFavorito = document.querySelector(".heart-btn")

/*Navbar fixo */
window.addEventListener('scroll', function() {
    // Verifica a posição da rolagem
    if (window.scrollY >= 85) {
        navbar.style.background = "rgba(39, 39, 39, 0.59)"; 
        navbar.style.boxShadow = " 0 2px 5px rgba(0, 0, 0, 0.2)"
    } else {
        navbar.style.background = "transparent" 
        navbar.style.boxShadow = " 0 0px 0px rgba(0, 0, 0, 0)"
    }
});

/*Botão de favorito*/
buttonFavorito.addEventListener("click", ()=>{
    buttonFavorito.classList.toggle('favorito');
})

/* Para ter afuncionalidade de slide
const prevBtn = document.querySelector('.slider-button.prev');
const nextBtn = document.querySelector('.slider-button.next');
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.item-slide');

let currentIndex = 0;
const totalSlides = slideItems.length;

// Função para atualizar a posição do slider
function updateSliderPosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

 Slder
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        // Volta para o último slide
        currentIndex = totalSlides - 1;
    }
    updateSliderPosition();
});

// Evento para o botão próximo
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        // Volta para o primeiro slide
        currentIndex = 0;
    }
    updateSliderPosition();
});

// Configuração inicial
updateSliderPosition();
*/
