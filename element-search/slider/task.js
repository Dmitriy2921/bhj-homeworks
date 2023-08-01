const arrSlides = Array.from(document.querySelectorAll(".slider__item"));
const arrSlidesDot = Array.from(document.querySelectorAll(".slider__dot"));
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");

sliderArrowNext.onclick = function() {
  slideIndex = arrSlides.findIndex(value => value === document.querySelector(".slider__item_active"));
  showSlides(slideIndex += 1);
};

sliderArrowPrev.onclick = function() {   
  slideIndex = arrSlides.findIndex(value => value === document.querySelector(".slider__item_active"));
  showSlides(slideIndex -= 1);
};

function showSlides(n) {
  const slideIndex = arrSlides.findIndex(value => value === document.querySelector(".slider__item_active"));
  arrSlides[slideIndex].className = "slider__item";

  if (n < 0) {
    n = (arrSlides.length - 1);
  }

  if (n > (arrSlides.length - 1)) {
    n = 0;
  }

  arrSlides[n].className = "slider__item slider__item_active";
  arrSlidesDot[n].className = "slider__item slider__dot_active";
}
