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
  'Always Learning',
  'Andriod User',
  'Cheese Curd Connoisseur',
  'Divi in my DNA',
  'Entrepreneur',
  'Lutheran for life',
  'Partial Germaphobe',
  'Remote Worker',
  'Technology Enthusiast',
  'US Based',
  'Web Developer',
];
shuffle(myArray);
