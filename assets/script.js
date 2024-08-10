const btnslider = document.querySelectorAll('.arrow');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const countSlides = slides.length - 1;

function changeSlide(btn) {
  const slide_active = document.querySelector('.active');
  let slideActive = [...slides].indexOf(slide_active) + btn;

  // Handle edge cases for slides
  if (slideActive < 0) {
    slideActive = countSlides;
  } else if (slideActive > countSlides) {
    slideActive = 0;
  }

  // Update the slide and dot states
  document.querySelector('.active').classList.remove('active');
  document.querySelector('.dot_selected').classList.remove('dot_selected');
  
  slides[slideActive].classList.add('active');
  dots[slideActive].classList.add('dot_selected');
}

let interval = setInterval(() => changeSlide(1), 6000); // Change slide every 6 seconds

btnslider.forEach(btns => {
  btns.addEventListener('click', function(e) {
    clearInterval(interval); // Clear the interval to prevent conflicting timers
    const btn = e.target.id === "right" ? 1 : -1;
    changeSlide(btn);
    interval = setInterval(() => changeSlide(1), 6000); // Restart interval with consistent timing
  });
});
