
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
	const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()



 new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });


//Vorod&Sabt
const form = document.querySelector('form');
const firstNameInput = form.querySelector('#first-name');
const lastNameInput = form.querySelector('#last-name');
const usernameInput = form.querySelector('#username');
const passwordInput = form.querySelector('#password');
const usernameError = form.querySelector('.username-error');
const passwordError = form.querySelector('.password-error');

usernameInput.addEventListener('input', function() {
  const inputValue = this.value.trim();
  
  if (inputValue === '') {
    showError(usernameInput, 'ایمیل را وارد کنید.');
  } else if (!validateEmail(inputValue)) {
    showError(usernameInput, 'ایمیل معتبر نیست.');
  } else {
    showSuccess(usernameInput);
    usernameSmall.innerText = '';
  }
});

passwordInput.addEventListener('input', function() {
  const inputValue = this.value.trim();
  
  if (inputValue === '') {
    showError(passwordInput, 'رمز عبور را وارد کنید.');
  } else if (inputValue.length < 8) {
    showError(passwordInput, 'رمز عبور باید حداقل 8 کاراکتر باشد.');
  } else {
    showSuccess(passwordInput);
    passwordSmall.innerText = '';
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add('error');
  const small = formGroup.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('error');
}


//Menu
function showPage(pageName) {
  var content = '';
  if (pageName === 'pizza') {
  content = '<div class="cat1"><div class="container"><div class="row"><div class="col-md-6"><div class="single-offer-item"><div class="single-offer-details"><div class="single-offer-title">هاوایی</div><div class="single-offer-content"><p style="margin: 0;">&nbsp;آناناس، قارچ، زیتون سیاه، سس گوجه فرنگی ، پنیر فرانسوی</p></div><div class="single-offer-price">105,000<small>تومان</small></div></div></div></div><div class="col-md-6"><div class="single-offer-item"><div class="single-offer-details"><div class="single-offer-title">تنوری</div><div class="single-offer-content"><p style="margin: 0;">&nbsp;گوجه فرنگی، سیر، پیاز، پنیر، گوشت چرخ کرده، فلفل، زیتون</p></div><div class="single-offer-price">95,000<small>تومان</small></div></div></div></div><div class="col-md-6"><div class="single-offer-item"><div class="single-offer-details"><div class="single-offer-title">دریایی</div><div class="single-offer-content"><p style="margin: 0;">&nbsp;زیتون، ماهی مرکب، میگو، قارچ، گوجه فرنگی، پنیر فتوچینی</p></div><div class="single-offer-price">165,000<small>تومان</small></div></div></div></div><div class="col-md-6"><div class="single-offer-item"><div class="single-offer-details"><div class="single-offer-title">گوشت</div><div class="single-offer-content"><p style="margin: 0;">&nbsp;پپرونی، پنیر، زیتون سیاه، سس گوجه فرنگی، قارچ، گوشت، پیاز، کاهو</p></div><div class="single-offer-price">90,000<small>تومان</small></div></div></div></div><div class="col-md-6"><div class="single-offer-item"><div class="single-offer-details"><div class="single-offer-title">مکزیکی</div><div class="single-offer-content"><p style="margin: 0;">&nbsp;فلفل هالوپینو، قارچ، زیتون سیاه، سس گوجه فرنگی، سس مکزیکی مخصوص</p></div><div class="single-offer-price">210,000<small>تومان</small></div></div></div></div><div class="col-md-6"><div class="single-offer-item"><div class="single-offer-details"><div class="single-offer-title">مارگاریتا</div><div class="single-offer-content"><p style="margin: 0;">&nbsp;گوجه فرنگی، سیر، پیاز، پنیر،گوشت چرخ کرده،فلفل، زیتون</p></div><div class="single-offer-price">200,000<small>تومان</small></div></div></div></div>'
  } else if (pageName === 'kabab') {
  content = '<h2>کباب</h2><p>محتوای مربوط به کباب</p>';
  }
  // ...
  document.getElementById('page-content').innerHTML = content;
  }
