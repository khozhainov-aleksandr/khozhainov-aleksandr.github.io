// WOW library
new WOW().init();
// End.

$(document).ready(function () {
  // >>>>>>> Slick slider <<<<<<<
  $('.cover').slick({
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,

    variableWidth: true,
    centerMode: true,

    autoplay: true,
    autoPlaySpeed: 2000,

    speed: 1200,

    prevArrow:
      '<button type="button" class="slick-prev"><img src="./icons/arrows/triangleleft.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./icons/arrows/triangleright.svg"></img></button>',

    dots: true,
    dotsClass: 'slick-dots-buttons',

    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  // - >>>>> Comment section END <<<<< -

  // >>>>>>> Animation Scroll Page <<<<<<<
  $("a[href^='#']").click(function () {
    const _href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
    return false;
  });
  // - >>>>> Comment section END <<<<< -
});

$(window).scroll(function () {
  // >>>>> Fixing the Top Header <<<<<
  var header = document.querySelector('.top_header');
  if (window.pageYOffset > 640) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
  // - >>>>> Comment section END <<<<< -

  // >>>>> Parallax <<<<<
  var section = $('.profession__wrapper').offset(),
    wScroll = $(this).scrollTop();

  $('.profession__wrapper h1').css({
    transform: 'translate(0, ' + (wScroll - section.top) / 24 + '%)',
  });
  // - >>>>> Comment section END <<<<< -
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Vanilla JavaScript <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>> Page Scroll <<<<<
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + '%';
};
// >>>>> Page Scroll <<<<<

// >>>>> Experience <<<<<
function CountUp(initDate, id) {
  this.beginDate = new Date(initDate);
  this.countainer = document.getElementById(id);
  this.numOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  (this.borrowed = 0),
    (this.years = 0),
    (this.months = 0),
    (this.days = 0),
    (this.hours = 0),
    (this.minutes = 0),
    (this.seconds = 0);
  this.updateNumOfDays();
  this.updateCounter();
}

CountUp.prototype.updateNumOfDays = function () {
  var dateNow = new Date();
  var currYear = dateNow.getFullYear();
  if ((currYear % 4 == 0 && currYear % 100 != 0) || currYear % 400 == 0) {
    this.numOfDays[1] = 29;
  }
  var self = this;
  setTimeout(function () {
    self.updateNumOfDays();
  }, new Date(currYear + 1, 1, 2) - dateNow);
};

CountUp.prototype.datePartDiff = function (then, now, MAX) {
  var diff = now - then - this.borrowed;
  this.borrowed = 0;
  if (diff > -1) return diff;
  this.borrowed = 1;
  return MAX + diff;
};

CountUp.prototype.calculate = function () {
  var currDate = new Date();
  var prevDate = this.beginDate;
  this.seconds = this.datePartDiff(
    prevDate.getSeconds(),
    currDate.getSeconds(),
    60
  );
  this.minutes = this.datePartDiff(
    prevDate.getMinutes(),
    currDate.getMinutes(),
    60
  );
  this.hours = this.datePartDiff(prevDate.getHours(), currDate.getHours(), 24);
  this.days = this.datePartDiff(
    prevDate.getDate(),
    currDate.getDate(),
    this.numOfDays[currDate.getMonth()]
  );
  this.months = this.datePartDiff(prevDate.getMonth(), currDate.getMonth(), 12);
  this.years = this.datePartDiff(
    prevDate.getFullYear(),
    currDate.getFullYear(),
    0
  );
};

CountUp.prototype.addLeadingZero = function (value) {
  return value < 10 ? '0' + value : value;
};

CountUp.prototype.formatTime = function () {
  this.seconds = this.addLeadingZero(this.seconds);
  this.minutes = this.addLeadingZero(this.minutes);
  this.hours = this.addLeadingZero(this.hours);
};

CountUp.prototype.updateCounter = function () {
  this.calculate();
  this.formatTime();
  this.countainer.innerHTML =
    '<strong>' +
    this.years +
    '</strong> <small>' +
    (this.years == 1 ? 'Years' : 'Years') +
    '</small>' +
    ' <strong>' +
    this.months +
    '</strong> <small>' +
    (this.months == 1 ? 'Months' : 'Months') +
    '</small>' +
    ' <strong>' +
    this.days +
    '</strong> <small>' +
    (this.days == 1 ? 'Days' : 'Days') +
    '</small>' +
    ' <strong>' +
    this.hours +
    '</strong> <small>' +
    (this.hours == 1 ? 'Hours' : 'Hours') +
    '</small>' +
    ' <strong>' +
    this.minutes +
    '</strong> <small>' +
    (this.minutes == 1 ? 'Minutes' : 'Minutes') +
    '</small>' +
    ' <strong>' +
    this.seconds +
    '</strong> <small>' +
    (this.seconds == 1 ? 'Seconds' : 'Seconds') +
    '</small>';
  var self = this;
  setTimeout(function () {
    self.updateCounter();
  }, 1000);
};

window.onload = function () {
  new CountUp('08 09 2019 19:00:00', 'counter');
}; // - Start Time
// - >>>>> Comment section END <<<<< -

//! My Script !

// Arrow button, move page to top.
let scrollButtonToTop = document.querySelector('.page_up__arrow');

window.onscroll = function () {
  if (window.pageYOffset > 640) {
    scrollButtonToTop.classList.add('page_up__show');
  } else if (window.pageYOffset < 640) {
    scrollButtonToTop.classList.remove('page_up__show');
  }
};

scrollButtonToTop.onclick = function () {
  window.scrollBy({ top: 0, behavior: 'smooth' });
};
// End.

// Pop-Up Certificate (Open and Close)
// Pop-Up Portfolio (Open and Close)
const certifyBtnOpenEl = document.querySelector('#certificates-button-open');
const certifyBtnCloseEl = document.querySelector('#certificates-button-close');
const overlayCertifyEl = document.querySelector('.overlay');

const openPortBtnEl = document.querySelector('.open-portfolio-button');
const closePortBtnEl = document.querySelector('.portfolio-button-close');
const openOverWindowEl = document.querySelector('.open-overlay-window');

certifyBtnOpenEl.addEventListener('click', onOpenCertifyWindow);
certifyBtnCloseEl.addEventListener('click', onCloseCertifyWindow);

openPortBtnEl.addEventListener('click', onOpenPortProject);
closePortBtnEl.addEventListener('click', onClosePortProject);

function onOpenCertifyWindow() {
  overlayCertifyEl.style = 'display: block';
}

function onCloseCertifyWindow() {
  overlayCertifyEl.style = 'display: none';
}

function onOpenPortProject() {
  openOverWindowEl.style = 'display: block';
}

function onClosePortProject() {
  openOverWindowEl.style = 'display: none';
}

// End.
