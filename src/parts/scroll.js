function scroll() {
  function anim(duration) {
    let temp;
    return sel => {
      cancelAnimationFrame(temp);
      let start = performance.now();
      let from = window.pageYOffset || document.documentElement.scrollTop,
        to = document.querySelector(sel).getBoundingClientRect().top;
      requestAnimationFrame(function step(timestamp) {
        let progress = (timestamp - start) / duration;
        1 <= progress && (progress = 1);
        window.scrollTo(0, from + to * progress | 0);
        1 > progress && (temp = requestAnimationFrame(step));
      });
    };
  }

  let scrollMenu = anim(1000);

  let li = document.querySelectorAll('li');

  li.forEach((item) => {
    item.addEventListener('click', () => {
      scrollMenu((item.firstChild.getAttribute('href')));
    });
  });
}
module.exports = scroll;