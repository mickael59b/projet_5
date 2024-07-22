const btnslider = document.querySelectorAll('.arrow');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const countSlides = slides.length - 1;
const countDots = dots.length - 1;

function changeSlide(btn) {
  const slide_active = document.querySelector('.active');
  const dot_active = document.querySelector('.dot_selected');
  let slideActive = [...slides].indexOf(slide_active) + btn;
  let dotActive = [...dots].indexOf(dot_active) + btn;

  // Handle edge cases for slides
  if (slideActive < 0) {
    slideActive = countSlides;
  } else if (slideActive > countSlides) {
    slideActive = 0;
  }

  // Handle edge cases for dots
  if (dotActive < 0) {
    dotActive = countDots;
  } else if (dotActive > countDots) {
    dotActive = 0;
  }

  slide_active.classList.remove('active');
  dot_active.classList.remove('dot_selected');
  slides[slideActive].classList.add('active');
  dots[dotActive].classList.add('dot_selected');
}

let interval = setInterval(() => changeSlide(1), 6000); // Change slide every 10 seconds

btnslider.forEach(btns => {
  btns.addEventListener('click', function(e) {
    clearInterval(interval); // Clear the interval to prevent conflicting timers
    const btn = e.target.id === "right" ? 1 : -1;
    changeSlide(btn);
	interval = setInterval(() => changeSlide(1), 5000);
  });
});