let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let slideContainer = document.querySelector(".slides");
let numOfSlides = slides.length;
let slideWidth = slides[0].getBoundingClientRect().width;
let interval = 5000; // 5 seconds
let moving = false; // Flag to prevent double-clicking

function moveSlides() {
  if (!moving) {
    moving = true;
    slideContainer.style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
    slideIndex++;
  
    if (slideIndex >= numOfSlides) {
      slideIndex = 0;
    }

    setTimeout(() => {
      moving = false;
    }, 500); // Wait for half the transition duration
  }
}

setInterval(moveSlides, interval);

document.querySelector('.prev').addEventListener('click', () => {
  if (slideIndex > 0 && !moving) {
    slideIndex--;
    moveSlides();
  }
});

document.querySelector('.next').addEventListener('click', () => {
  if (slideIndex < numOfSlides - 1 && !moving) {
    moveSlides();
  }
});


let logoIndex = 0;
let logoContainer = document.querySelector('.logo-slide');
let logos = logoContainer.getElementsByTagName('img');
let totalLogos = logos.length;
let visibleLogos = 4; // Number of logos you want to display at a time

function moveLogos(step) {
  logoIndex += step * visibleLogos;
  if (logoIndex < 0) {
    logoIndex = 0;
  } else if (logoIndex >= totalLogos) {
    logoIndex = totalLogos - visibleLogos;
  }
  logoContainer.style.transform = `translateX(-${logoIndex * (100 / visibleLogos)}%)`;
}

// Optional: Auto-move logos every few seconds
setInterval(() => moveLogos(1), 3000);
