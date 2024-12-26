gsap.registerPlugin(ScrollTrigger);

// PAGE IS LOADED
let pageLoadTl = gsap.timeline({
  defaults: { opacity: 0, ease: 'power1.inOut' },
});

function init() {
  pageLoadTl
    .from('.section_hero', { ease: 'linear', autoAlpha: 0 })
    .from('.hero_gradient', { scale: 0.5, duration: 1.6 })
    .from('.hero_heading_line1', { y: '60%', duration: 1.2 }, 0)
    .from('.hero_headling_line2-1', { y: '60%', duration: 1.2 }, 0.2)
    .from('.hero_headling_line2-2', { y: '60%', duration: 1.2 }, 0.2)
    .from('.hero_headling_line3', { y: '60%', duration: 0.8 }, 0.4)
    .from('.header', { ease: 'linear', duration: 1, autoAlpha: 0 }, 1.35)
    .from('.hero_heading_description', { ease: 'linear', duration: 0.8 }, 1.35)
    .from(
      '.circle-wrapper.hero-circle',
      { x: 2000, stagger: { each: 0.2 }, duration: 1.6 },
      1.35,
    )
    .from('.layout352_progress-bar', { ease: 'linear', autoAlpha: 0 });
}

window.addEventListener('load', function (event) {
  init();
});

// QUESTION SECTION
const texts = [
  'generate any leads?',
  'stand out against competitors?',
  'exist?',
];
let currentIndex = 0;

function rotateText() {
  const elements = document.querySelectorAll('.question_dynamic-text');
  // Оновлюємо текстовий контент
  elements[0].textContent = texts[currentIndex];
  elements[1].textContent = texts[(currentIndex + 1) % texts.length];
  elements[2].textContent = texts[(currentIndex + 2) % texts.length];
  // Змінюємо класи для анімації
  elements[0].className = 'question_dynamic-text prev';
  elements[1].className = 'question_dynamic-text active';
  elements[2].className = 'question_dynamic-text next';
  // Перевпорядковуємо елементи в DOM
  setTimeout(() => {
    const container = document.querySelector('.question_dynamic-wrapper');
    container.appendChild(elements[0]);
    // Оновлюємо індекс
    currentIndex = (currentIndex + 1) % texts.length;
  }, 800); // Час має співпадати з transition у CSS
}
// Запускаємо карусель
setInterval(rotateText, 3000);

// CASES SECTION
  const cases = document.querySelectorAll('.layout409_card');

  cases.forEach((caseElement, index) => {
    if (index === 0) return;

    gsap.to(cases[index - 1], {
      scrollTrigger: {
        trigger: caseElement,
        start: '25% bottom',
        end: 'top top',
        scrub: true,
        markers: false,
      },
      scale: 0.8,
      opacity: 0,
      ease: 'none',
    });
  });

// SHOW ANIMATION ONLY ON DESKTOP
function isDesktop() {
  return (
    window.matchMedia('(min-width: 767px)').matches &&
    window.screen.width >= 767
  );
}

if (isDesktop()) {
  // INTRO SECTION
  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_intro',
      start: 'top 10%',
      end: 'bottom bottom',
      markers: false,
    },
  });
  introTl
    .from('.intro-heading_line-1-1', { y: '200%', duration: 1.2 })
    .from('.intro-heading_line-1-2', { y: '100%', duration: 1.2 }, 0)
    .from('.intro-heading_line-1-3', { y: '100%', duration: 1.2 }, 0)
    .from('.intro-heading_line-2-1', { y: '100%', duration: 1.2 }, 0.1)
    .from('.intro-heading_line-2-2', { y: '100%', duration: 1.2 }, 0.1)
    .from('.intro-heading_line-3', { y: '100%', duration: 1.2 }, 0.2)
    .from('.intro_gradient', { y: '50%', opacity: 0, duration: 1.6 }, 0.5);

  // SERVICES SECTION
  const servicesTitle = document.querySelector(
    '.section_services .section-title',
  );
  const secvicesCircles = document.querySelectorAll('.services_circles path');

  const secvicesTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_services',
      start: 'top 15%',
      end: 'top 80%',
      markers: false,
    },
    ease: 'power3.inOut',
  });
  secvicesTl
    .from(servicesTitle, { y: '100%', duration: 1 })
    .from('.services_gradient', { x: '0%', opacity: 0, duration: 0.8 }, 0.4)
    .from('.services_desc', { y: '48%', opacity: 0, duration: 0.8 }, 0.6)
    .from(
      '.services_list_item',
      { y: '48%', opacity: 0, stagger: { each: 0.2 }, duration: 0.8 },
      0.8,
    )
    .from(
      secvicesCircles,
      { x: '-48%', opacity: 0, stagger: { each: 0.2 }, duration: 0.8 },
      '>-=25%',
    );

  // TIMELINE SECTION
  // Section Title
  const timelineSection = document.querySelector('.section_timeline');
  const timelineSectionTitle = timelineSection.querySelector('.section-title');

  gsap.from(timelineSectionTitle, {
    scrollTrigger: {
      trigger: timelineSection,
      start: 'top 100%',
      end: 'top 80%',
      markers: false,
    },
    y: '100%',
    duration: 1.2,
    ease: 'power3.inOut',
  });

  // Визначаємо зсув таймлайну в залежності від розміру екрану
  const timelineMove = window.innerWidth > 991 ? 30 : 0;

  // Анімація зсуву таймлайну при скролі
  gsap.to('.timeline-wrapper', {
    scrollTrigger: {
      trigger: '.timeline-wrapper',
      start: 'top 50%',
      end: 'bottom bottom',
      scrub: true,
      markers: false,
    },
    y: `${timelineMove}%`,
  });

  // Вибираємо елементи для анімації
  const timelineDesc = gsap.utils.toArray('.timeline-path_desc');
  const timelineTitle = gsap.utils.toArray('.timeline-future h2');
  const timelineTopLine = gsap.utils.toArray(
    '.timeline_points-wrapper .timeline-point .point-border_top',
  );
  const timelinePoint = gsap.utils.toArray(
    '.timeline_points-wrapper .timeline-point .timeline-path_point',
  );

  // Встановлюємо початкові стани
  gsap.set(timelineDesc, { opacity: 0, y: '150%' });
  gsap.set(timelineTitle, { y: '100%', opacity: 0 });
  gsap.set(timelineTopLine, { scaleY: 0, transformOrigin: 'bottom' });
  gsap.set(timelinePoint, { opacity: 0 });

  // Функція для анімації всіх елементів
  const animateElements = (index) => {
    // Отримуємо поточний розмір вікна
    const isMobile = window.innerWidth <= 991;

    // Вибираємо потрібний контейнер в залежності від розміру екрану
    const containerClass = isMobile ? '.is-mobile' : '.is-desctop';

    // Знаходимо елементи в потрібному контейнері
    const currentDesc = gsap.utils.toArray(
      `${containerClass} .timeline-path_desc`,
    );
    const currentTitle = gsap.utils.toArray(
      `${containerClass} .timeline-future h2`,
    );

    // Анімація тексту опису для поточного контейнера
    currentDesc.forEach((desc, i) => {
      gsap.to(desc, {
        opacity: i === index ? 1 : 0,
        y: i === index ? 0 : '150%',
        duration: 0.5,
      });
    });

    // Анімація заголовку для поточного контейнера
    currentTitle.forEach((title, i) => {
      gsap.to(title, {
        y: i === index ? '0%' : '100%',
        opacity: i === index ? 1 : 0,
        duration: 0.5,
      });
    });

    // Анімація верхньої лінії
    timelineTopLine.forEach((line, i) => {
      gsap.to(line, {
        scaleY: i === index ? 1 : 0,
        duration: 0.4,
      });
    });

    // Анімація точки
    timelinePoint.forEach((point, i) => {
      gsap.to(point, {
        opacity: i === index ? 1 : 0,
        duration: 0.3,
      });
    });
  };

  // Основний таймлайн
  const whyTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.timeline-wrapper',
      start: 'top 50%',
      end: '110% bottom',
      scrub: true,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const element = document.querySelector(
          '.timeline_futures-wrapper.is-mobile',
        );

        if (progress > 0.05 && progress < 0.95) {
          gsap.to(element, {
            position: 'fixed',
            opacity: 1,
            duration: 0.3,
          });
        } else {
          gsap.to(element, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              gsap.set(element, {
                position: 'absolute',
              });
            },
          });
        }
      },
    },
  });

  // Анімація з прив'язкою до відрізків
  whyTl
    .from('.timeline-wrapper', {
      scale: 1.2,
      opacity: 0,
      filter: 'blur(10px)',
    })
    .to(
      '.timeline_progress.is-1',
      {
        strokeDashoffset: 0,
        onUpdate: function () {
          const progress = this.progress();
          if (progress > 0 && progress < 1) {
            animateElements(0);
          }
        },
      },
      '<40%',
    )
    .to('.timeline-wrapper', {
      scale: 0.9,
    })
    .to(
      '.timeline_progress.is-2',
      {
        strokeDashoffset: 0,
        duration: 1.2,
        onUpdate: function () {
          const progress = this.progress();
          if (progress > 0 && progress < 1) {
            animateElements(1);
          }
        },
      },
      '<',
    )
    .to('.timeline_progress.is-3', {
      strokeDashoffset: 0,
      duration: 0.4,
      onUpdate: function () {
        const progress = this.progress();
        if (progress > 0 && progress < 1) {
          animateElements(2);
        }
      },
    })
    .to('.timeline_progress.is-4', {
      strokeDashoffset: 0,
      onUpdate: function () {
        const progress = this.progress();
        if (progress > 0 && progress < 1) {
          animateElements(3);
        }
      },
    })
    .to('.timeline_progress.is-5', {
      strokeDashoffset: 0,
      duration: 0.4,
      onUpdate: function () {
        const progress = this.progress();
        if (progress > 0 && progress < 1) {
          animateElements(4);
        }
      },
    })
    .to('.timeline_progress.is-6', {
      strokeDashoffset: 0,
      onUpdate: function () {
        const progress = this.progress();
        if (progress > 0 && progress < 1) {
          animateElements(5);
        }
      },
    });

  // Обробник зміни розміру вікна
  window.addEventListener('resize', () => {
    const currentProgress = whyTl.progress();
    if (currentProgress > 0) {
      const currentIndex = Math.floor(currentProgress * 6); // 6 - кількість секцій
      animateElements(currentIndex);
    }
  });

  // Додаткова функція для оновлення зсуву при зміні розміру вікна
  window.addEventListener('resize', () => {
    const newTimelineMove = window.innerWidth > 991 ? 30 : 0;
    gsap.to('.timeline-wrapper', {
      y: `${newTimelineMove}%`,
      duration: 0.3,
    });
  });

  // Анімація по скролу
  const ctaSections = document.querySelectorAll('.section_cta');

  ctaSections.forEach((section) => {
    const titleFirstLine = section.querySelector('.cta_title--first');
    const titleSecondLine = section.querySelector('.cta_title--second');
    const ctaCircles = section.querySelectorAll('.circle-wrapper.cta-circle');

    // Анімація появи
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 30%',
        end: 'top 80%',
        markers: false,
        once: true,
      },
      ease: 'power3.inOut',
    });

    ctaTl
      .from(section, { ease: 'linear', autoAlpha: 0 })
      .from(titleFirstLine, { y: '3rem', opacity: 0, duration: 1.2 })
      .from(titleSecondLine, { y: '3rem', opacity: 0, duration: 1.2 }, 0.4)
      .from(
        ctaCircles,
        {
          x: '-50%',
          opacity: 0,
          stagger: { each: 0.2 },
          duration: 2.2,
        },
        0,
      );
  });

  // CTA SECTIONS
  const ctaButtons = document.querySelectorAll('[button-type="circle"]');

  const buttonConfigs = {
    'is-btn-1': {
      positions: {
        x: ['40%', '80%', '-100%'],
        y: ['60%', '-60%', '10%'],
      },
    },
    'is-btn-2': {
      positions: {
        x: ['0%', '30%', '40%'],
        y: ['0%', '20%', '-70%'],
      },
    },
  };

  function createRandomAnimation(shineCircle, config) {
    return gsap.to(shineCircle, {
      duration: 8,
      scale: gsap.utils.wrap([0.9, 1, 1.1]),
      x: gsap.utils.wrap(config.positions.x),
      y: gsap.utils.wrap(config.positions.y),
      ease: 'power1.inOut',
      repeat: -1,
      repeatRefresh: true,
      onRepeat: function () {
        gsap.to(this.targets()[0], {
          duration: 8,
          scale: gsap.utils.random(0.9, 1.1),
          x: gsap.utils.random(config.positions.x),
          y: gsap.utils.random(config.positions.y),
          ease: 'power1.inOut',
        });
      },
    });
  }

  ctaButtons.forEach((button) => {
    const shineCircle = button.querySelector('.cta-circle_shine');
    const buttonClass = Array.from(shineCircle.classList).find((className) =>
      className.startsWith('is-btn-'),
    );
    const config = buttonConfigs[buttonClass];

    let randomAnimation = createRandomAnimation(shineCircle, config);

    button.addEventListener('mouseover', () => {
      // Повністю зупиняємо всі анімації на елементі
      gsap.killTweensOf(shineCircle);

      // Запускаємо тільки анімацію збільшення
      gsap.to(shineCircle, {
        scale: 3,
        duration: 0.5,
        ease: 'power2.out',
      });
    });

    button.addEventListener('mouseout', () => {
      // Зупиняємо всі поточні анімації
      gsap.killTweensOf(shineCircle);

      // Зменшуємо розмір
      gsap.to(shineCircle, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          // Створюємо нову рандомну анімацію
          randomAnimation = createRandomAnimation(shineCircle, config);
        },
      });
    });
  });

  // TESTIMONIALS SECTION
  const testimonialsSection = document.querySelector('.section_testimonials');
  const activeSlideMove = window.innerWidth > 991 ? '50%' : '3rem';

  const testimonialsTl = gsap.timeline({
    scrollTrigger: {
      trigger: testimonialsSection,
      start: 'top 30%',
      markers: false,
    },
    ease: 'power3.inOut',
  });

  testimonialsTl
    .from(testimonialsSection.querySelector('.section-title'), {
      y: '100%',
      duration: 1,
    })
    .from('.testimonials_slider-wrapper.swiper-wrapper', {
      opacity: 0,
      duration: 1.6,
    })
    .from(
      '.testimonials_slider-slide.swiper-slide.swiper-slide-active',
      {
        y: activeSlideMove,
        duration: 1.6,
      },
      '<',
    )
    .from(
      testimonialsSection.querySelector('.testimonials_gradient'),
      {
        y: '120%',
        opacity: 0,
        duration: 1.6,
      },
      '<',
    )
    .from(
      '.testimonials_nav',
      {
        y: '-100%',
        duration: 0.8,
      },
      1.8,
    )
    .from(
      '.testimonials_slider-slide.swiper-slide.swiper-slide-next',
      {
        x: '40%',
        duration: 0.8,
      },
      1.9,
    )
    .from(
      '.testimonials_circle',
      {
        opacity: 0,
        duration: 0.6,
      },
      2.5,
    );

  //FOOTER
  const footer = document.querySelector('footer');
  const footerFirstTitleLine = footer.querySelector('.cta_title--first');
  const footerSecondTitleLine = footer.querySelector('.cta_title--second');
  const footerCircles = footer.querySelectorAll('.circle-wrapper.cta-circle');

  const footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: footer,
      start: 'top 30%',
      end: 'top 80%',
      markers: false,
      once: true,
    },
    ease: 'power3.inOut',
  });

  footerTl
    .from(footer, { ease: 'linear', autoAlpha: 0 })
    .from(footerFirstTitleLine, { y: '3rem', opacity: 0, duration: 1 })
    .from(footerSecondTitleLine, { y: '3rem', opacity: 0, duration: 1 }, 0.3)
    .from(
      footerCircles,
      {
        x: '-50%',
        opacity: 0,
        stagger: { each: 0.2 },
        duration: 1.8,
      },
      0,
    )
    .from(
      '.prefooter_form-block',
      { y: '4rem', opacity: 0, duration: 0.8 },
      1.6,
    )
    .from(
      '.prefooter_links-wrapper',
      { y: '1.5rem', opacity: 0, duration: 1 },
      2,
    )
    .from('.footer_wrapper', { y: '0.75rem', opacity: 0, duration: 0.8 }, 2.4)
    .from('.footer_gradient', { x: '-60%', opacity: 0, duration: 1.3 }, 2.6)
    .from('.footer_logo', { y: '5rem', opacity: 0, duration: 1.6 }, 2.8);
}
