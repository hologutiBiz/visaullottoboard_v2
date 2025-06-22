// Updated Infinite Auto-Slide
const carousel = document.getElementById("lottoCarousel");
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

function scrollCarousel(direction = 1) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const offset = carousel.clientWidth * currentIndex;
  carousel.scrollTo({ left: offset, behavior: "smooth" });
}

// Auto-slide every 7 seconds infinitely
setInterval(() => {
  scrollCarousel(1);
}, 7000);