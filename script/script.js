// script
const burgers = document.querySelector('nav .burgers input');
const nav = document.querySelector('.menu');
const bContact = document.querySelector('nav .menu ul .contact')
const contact = document.querySelector('.img-c #contact')
burgers.addEventListener('click', function () {
    nav.classList.toggle('slide');
});
bContact.addEventListener('click', function (){
    contact.classList.toggle('show');
})

const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-inner img');
let currentIndex = 0;
const slideCount = slides.length;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateCarousel();
}

setInterval(nextSlide, 10000);
