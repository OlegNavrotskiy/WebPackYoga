function modal() {
  let more = document.querySelector('.more'),
      tabsBtn = document.querySelectorAll('.description-btn'),
      browser = getNameBrowser();

  if (browser < 12) {
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
  //Числовое значение, на которое пользователь Internet Explorer включен.
  //Если на Microsoft Edge возвращается номер 12.
  function getNameBrowser() {
    let rv = -1;

    if (navigator.appName == 'Microsoft Internet Explorer') {

      let ua = navigator.userAgent,
        re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");

      if (re.exec(ua) !== null) {
        rv = parseFloat(RegExp.$1);
      }
    } else if (navigator.appName == "Netscape") {

      if (navigator.appVersion.indexOf('Trident') === -1) {
        rv = 12;
      } else {
        rv = 11;
      }
    }
    return rv;
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