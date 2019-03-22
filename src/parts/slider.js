function slider() {
  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    slides.forEach((item) => item.classList.remove('fade'));
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].children[0].style.opacity = 0;
    dots[slideIndex - 1].classList.add('dot-active');
    animateSlider();
  }

  function animateSlider() {
    let op = 0;
    while (op <= 1) {
      ((ar => {
        setTimeout(() => {
          slides[slideIndex - 1].children[0].style.opacity = ar;
        }, 60 + op * 600);
      }))(op);
      op += 0.1;
    }
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });
  next.addEventListener('click', () => {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', event => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}
module.exports = slider;