let anchors = document.querySelectorAll('.header__navbar a'),
    body = document.querySelector("body"),
    bHeight = body.getBoundingClientRect().height,
    screenY = window.innerHeight / 8,
    nav = document.querySelector(".header");

const sections = document.querySelectorAll('.section'),
      lngButton = document.querySelectorAll('.lng_switcher_button'),
      eng = document.querySelectorAll('.en'),
      ru = document.querySelectorAll('.ru'),
      lngSwitcher = document.querySelector('.lng_switcher'),
      popup = document.querySelector('.modal-warp'),
      popupForm = document.querySelector('.modal-warp__form'),
      formBtn = document.querySelectorAll('.btn');

  function switchToEng() {
    ru.forEach(item => {
      item.classList.add('hidden');
      item.classList.remove('visible', 'fade');
    });

    eng.forEach(item => {
      item.classList.add('visible', 'fade');
      item.classList.remove('hidden');
    });

    lngButton.forEach(item => {
      item.classList.remove('lng_switcher_button_active');
    });
  }

  function switchToRu() {
    eng.forEach(item => {
      item.classList.add('hidden', 'fade');
      item.classList.remove('visible', 'fade');
    });

    ru.forEach(item => {
      item.classList.add('visible', 'fade');
      item.classList.remove('hidden', 'fade');
    });

    lngButton.forEach(item => {
      item.classList.remove('lng_switcher_button_active');
    });
  }

  lngSwitcher.addEventListener('click', function(event) {
    const target = event.target;
    if (target && target.classList.contains('rus')) {
      switchToRu();
      target.classList.add('lng_switcher_button_active', 'fade');
    } else if (target && target.classList.contains('eng')) {
      switchToEng();
      target.classList.add('lng_switcher_button_active', 'fade');
    }
  });

  function openForm() {
    popup.classList.add("visible", 'fade');
    popup.classList.remove("hidden");
  }

  function closeForm() {
    popup.classList.remove("visible", 'fade');
    popup.classList.add("hidden");

  }

  formBtn.forEach(item => {
    item.addEventListener('click', (event) => {
      const target = event.target;
      if (target && event.currentTarget.classList.contains('footer__button')) {
        openForm();
      } else if (target && event.currentTarget.classList.contains('cansel')) {
        closeForm();
      }
    });
  });

  popup.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('modal-warp')) {
      closeForm();
    }
  });


  window.onscroll = () => {
    if (pageYOffset > screenY) {
      nav.classList.add("header-fixed");
      nav.classList.remove("header__navbar");
    } else {
      nav.classList.remove("header-fixed");
    }
  };

  for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    
    if (window.innerWidth > 1024) {
      sections.forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.header__navbar').clientHeight <= scrollDistance) {
          document.querySelectorAll('.side-navbar__dot').forEach((el) => {
            if (el.classList.contains('side-navbar__dot-active')) {
              el.classList.remove('side-navbar__dot-active');
            }
          });
          document.querySelectorAll('.side-navbar__dot')[i].classList.add('side-navbar__dot-active');
        }
      });
    }
  });
