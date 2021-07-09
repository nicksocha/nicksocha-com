// startHeader Characteristics Carousel
const TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  const i = this.loopNum % this.toRotate.length;
  const fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 2);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

  const that = this;
  let delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  const elements = document.getElementsByClassName('txt-rotate');
  for (let i = 0; i < elements.length; i++) {
    const period = elements[i].getAttribute('data-period');
    if (myArray) {
      new TxtRotate(elements[i], myArray, period);
    }
  }
};

function shuffle(arra1) {
  let ctr = arra1.length;
  let temp;
  let index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}
const myArray = [
  'Andriod User',
  'Cheese Curd Connoisseur',
  'Entrepreneur',
  'Lifelong Learner',
  'Lutheran for life',
  'Partial Germaphobe',
  'Remote Worker',
  'Real Estate Investor',
  'Sim Racer',
  'Technology Enthusiast',
  'US Based',
];
shuffle(myArray);
// endHeader Characteristics Carousel

// startTypeform
(function() {
  let qs;
  let js;
  let q;
  let s;
  const d = document;
  const gi = d.getElementById;
  const ce = d.createElement;
  const gt = d.getElementsByTagName;
  const id = 'typef_orm_share';
  const b = 'https://embed.typeform.com/';
  if (!gi.call(d, id)) {
    js = ce.call(d, 'script');
    js.id = id;
    js.src = `${b}embed.js`;
    q = gt.call(d, 'script')[0];
    q.parentNode.insertBefore(js, q);
  }
})();
// endTypeform

// startBack to top button
const backToTopButton = document.querySelector('#back-to-top-btn');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 700) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

backToTopButton.addEventListener('click', smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 50;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
// endBack to top button

// Automatically update year in footer
const yyyy = new Date().getFullYear();
document.getElementById('year').innerHTML = `Nick Socha dot com #${yyyy}`;
