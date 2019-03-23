function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personSum = 0,
      daysSum = 0,
      total = 0;

  totalValue.innerHTML = 0;

  function onlyNumberCalc(input) {
    input.addEventListener('keyup', () => {
      if (!input.value.match(/^\d+$/)) {
        input.value = input.value.substring(0, input.value.length - 1);
        return false;
      }
    });
  }
  onlyNumberCalc(persons);
  onlyNumberCalc(restDays);

  persons.addEventListener('change', function () {
    personSum = +this.value;
    total = (personSum + daysSum) * 4000;

    if (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {
      totalValue.innerHTML = 0;
    } else {

      animateTotal(total);
    }
  });

  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (personSum + daysSum) * 4000;

    if (persons.value == '' || restDays.value == '' || restDays.value <= 0 || persons.value <= 0) {
      totalValue.innerHTML = 0;
    } else {
      animateTotal(total);
    }
  });

  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {
      totalValue.innerHTML = 0;
    } else {
      let a = total,
        sum = a * this.options[this.selectedIndex].value;
      animateTotal(sum);
    }
  });

  // Анимация для суммы

  function animateTotal(number) {
    let step = 4000;
    let start = Date.now();
    let timer = setInterval(function () {
      let timePassed = Date.now() - start;
      totalValue.innerHTML = step = step + Math.floor(number / 4000 * 3);
      if (timePassed > 3000) {
        clearInterval(timer);
        totalValue.innerHTML = number;
      }
    });
  }
}
module.exports = calc;