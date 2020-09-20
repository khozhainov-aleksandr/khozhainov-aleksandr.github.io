'use strict';

// SECTION: Progress Bar.
const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(event) {
  let windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let percent = (windowScroll / windowHeight) * 100;

  progress.style.width = percent + '%';
}

// SECTION: Hamburger Menu.
const hamburgerEl = document.querySelector('.hamburger');
const menuEl = document.querySelector('.menu');
const closeMenuEl = document.querySelector('.menu__close');

hamburgerEl.addEventListener('click', () => {
  menuEl.classList.add('active');
});

closeMenuEl.addEventListener('click', () => {
  menuEl.classList.remove('active');
});

// SECTION: Experience Timer.
const startTime = '2019-07-15';

function getTimerRemaining(beginningTime) {
  const t = Date.parse(beginningTime) - Date.parse(new Date());
  const years = Math.floor(t / (1000 * 60 * 60 * 24 * 31 * 12) + 1);
  const months = Math.floor((t / (1000 * 60 * 60 * 24 * 31)) % 12);
  const days = Math.floor((t / (1000 * 60 * 60 * 24)) % 30);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const seconds = Math.floor((t / 1000) % 60);

  return {
    total: t,
    years: years,
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, beginningTime) {
  const timer = document.querySelector(selector);

  const years = timer.querySelector('#years');
  const months = timer.querySelector('#months');
  const days = timer.querySelector('#days');
  const hours = timer.querySelector('#hours');
  const minutes = timer.querySelector('#minutes');
  const seconds = timer.querySelector('#seconds');

  const timeInterval = setInterval(upDateClock, 1000);

  upDateClock();

  function upDateClock() {
    const t = getTimerRemaining(beginningTime);

    years.innerHTML = getZero(-t.years);
    months.innerHTML = getZero(-t.months);
    days.innerHTML = getZero(-t.days);
    hours.innerHTML = getZero(-t.hours);
    minutes.innerHTML = getZero(-t.minutes);
    seconds.innerHTML = getZero(-t.seconds);
  }
}

setClock('.timer', startTime);

// SECTION: Skills Ratings.
const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
