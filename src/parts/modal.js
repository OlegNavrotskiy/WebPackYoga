function modal() {
  let more = document.querySelector('.more'),
      tabsBtn = document.querySelectorAll('.description-btn'),
      browser = getNameBrowser();

  if (browser == 'EDGE' || browser == 'MSIE') {
    modalWindow(more);
    tabsBtn.forEach((item) => {
      modalWindow(item);
    });
  } else {
    if (!isMobile()) {
      modalWindowJs(more);
      tabsBtn.forEach((item) => {
        modalWindowJs(item);
      });
    } else {
      if (isMobile()) {
        modalMobileWindow(more);
        tabsBtn.forEach((item) => {
          modalMobileWindow(item);
        });
      }
    }

  }
  // Modal CSS

  function modalWindow(btn) {

    let overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    btn.addEventListener('click', () => {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
      if (document.querySelector('.status') !== null) {
        document.querySelector('.status').innerHTML = '';
      }
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
  }

  //Modal mobile
  function modalMobileWindow(btn) {

    let overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    btn.addEventListener('click', () => {
      overlay.classList.remove('fade');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
      if (document.querySelector('.status') !== null) {
        document.querySelector('.status').innerHTML = '';
      }
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    });
  }


  // Modal JS
  function modalWindowJs(btn) {
    let overlay = document.querySelector('.overlay'),
        popup = document.querySelector('.popup'),
        close = document.querySelector('.popup-close');

    btn.addEventListener('click', () => {
      overlay.classList.remove('fade');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      animate(timePassed => {
        popup.style.top = `${timePassed / 5}px`;
      }, 600);

    });

    close.addEventListener('click', () => {
      if (document.querySelector('.status') !== null) {
        document.querySelector('.status').innerHTML = '';
      }
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    });

    function animate(draw, duration) {
      let start = performance.now();

      requestAnimationFrame(function animate(time) {
        let timePassed = time - start;
        if (timePassed > duration) {
          timePassed = duration;
        }
        draw(timePassed);
        if (timePassed < duration) {
          requestAnimationFrame(animate);
        }

      });
    }
  }

  // Проверка браузера
  function getNameBrowser() {
    const ua = navigator.userAgent;
    if (ua.search(/EDGE/) > 0) {
      return 'EDGE';
    }
    if (ua.search(/MSIE/) > 0) {
      return 'MSIE';
    }
  }

  //Проверка на моб.версию
  function isMobile() {
    if (navigator.userAgent.match(/Android|Mobile|IEMobile|Opera Mini|iPhone|iPad|iPod/i) == null) {
      return false;
    } else {
      return true;
    }
  }
}
module.exports = modal;