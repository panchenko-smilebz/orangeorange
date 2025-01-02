gsap.registerPlugin(ScrollTrigger);

const scrollTriggerStart = window.innerWidth > 991 ? '30%' : '90%';

// Page is loaded
let pageLoadTl = gsap.timeline({
  defaults: { opacity: 0, ease: 'power1.inOut' },
});

function init() {
  pageLoadTl
    .to('.section_case-hero', { ease: 'linear', autoAlpha: 1 })
    .from('.case-hero_image-wrapper', { scale: 0.9, duration: 1.6 })
    .from('.case-hero_heading', { y: '100%', duration: 1.2 }, 0)
    .from('.case-hero_tags', { ease: 'linear', duration: 0.8 }, 1.4)
    .from(
      document.querySelector('.section_case-hero .button.is-text'),
      {
        ease: 'linear',
        duration: 0.8,
      },
      1.4,
    )
    .from('.header', { ease: 'linear', duration: 1, autoAlpha: 0 });
}

window.addEventListener('load', function (event) {
  init();
});

// CASE HERO SECTION
  gsap.to('.case-hero_image-wrapper', {
    scrollTrigger: {
      trigger: '.section_case-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
    y: '4rem',
  });

// SHOW ANIMATION ONLY ON DESKTOP
function isDesktop() {
  return (
    window.matchMedia('(min-width: 767px)').matches &&
    window.screen.width >= 767
  );
}

if (isDesktop()) {
  // REQUESTS SECTION
  document.querySelectorAll('.section_requests').forEach((section) => {
    const requestsTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: `top ${window.innerWidth > 991 ? '15%' : '90%'}`,
        markers: false,
      },
      ease: 'power3.inOut',
    });

    requestsTl
      .from(section.querySelector('.requests_section-heading'), {
        y: '100%',
        duration: 1,
      })
      .from(
        section.querySelector('.requests_gradient'),
        {
          x: '100%',
          y: '100%',
          opacity: 0,
          duration: 0.8,
        },
        0.4,
      )
      .from(
        section.querySelector('.requests_desc-heading'),
        {
          y: '3rem',
          opacity: 0,
          duration: 1,
        },
        0.4,
      )
      .from(
        section.querySelector('.requests_desc'),
        {
          y: '2rem',
          opacity: 0,
          duration: 0.8,
        },
        0.8,
      );
  });

  // CASE TIMELINE SECTION
  const projectTimelineSection = document.querySelector(
    '.section_project-timeline',
  );

  const caseTimelineTl = gsap.timeline({
    scrollTrigger: {
      trigger: projectTimelineSection,
      start: `top ${scrollTriggerStart}`,
      markers: false,
    },
    ease: 'power3.inOut',
  });

  caseTimelineTl
    .from(projectTimelineSection.querySelector('.cases_section-heading'), {
      y: '100%',
      duration: 1,
    })
    .from('.project-timeline_image-wrapper', {
      y: '3rem',
      opacity: 0,
      duration: 0.8,
    });

  // PROCESS SECTION
  document.querySelectorAll('.section_process').forEach((section) => {
    const requestsTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: `top ${scrollTriggerStart}`,
        markers: false,
      },
      ease: 'power3.inOut',
    });

    requestsTl
      .from(section.querySelector('.cases_section-heading'), {
        y: '100%',
        duration: 1,
      })
      .from(
        section.querySelector('.process_gradient'),
        {
          x: '100%',
          y: '100%',
          opacity: 0,
          duration: 0.8,
        },
        0.4,
      )
      .from(
        section.querySelector('.process_stage-heading'),
        {
          y: '3rem',
          opacity: 0,
          duration: 1,
        },
        0.4,
      )
      .from(
        section.querySelectorAll('.process-item'),
        {
          y: '2rem',
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
        },
        0.8,
      )
      .from(section.querySelector('.process_image-wrapper'), {
        y: '3rem',
        opacity: 0,
        duration: 0.8,
      });
  });

  // RESULTS SECTION
  const projectResultsSection = document.querySelector('.section_results');

  const caseResultsTl = gsap.timeline({
    scrollTrigger: {
      trigger: projectResultsSection,
      start: `top ${scrollTriggerStart}`,
      markers: false,
    },
    ease: 'power3.inOut',
  });

  caseResultsTl
    .from(projectResultsSection.querySelector('.cases_section-heading'), {
      y: '100%',
      duration: 1,
    })
    .from(
      '.results_desc',
      {
        y: '2rem',
        opacity: 0,
        duration: 0.8,
      },
      0.3,
    )
    .from(
      '.metric-item.is-case',
      {
        y: '2rem',
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      },
      0.5,
    )
    .from('.results_image', {
      opacity: 0,
      duration: 1.6,
    });

  const imageResultsTl = gsap.timeline({
    scrollTrigger: {
      trigger: projectResultsSection,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  imageResultsTl.fromTo(
    '.results_image',
    {
      y: '-3rem',
    },
    {
      y: '3rem',
    },
  );

  // TESTIMONIAL SECTION
  const testimonialSection = document.querySelector('.section_testimonials');
  const activeSlideMove = window.innerWidth > 991 ? '50%' : '3rem';

  const testimonialTl = gsap.timeline({
    scrollTrigger: {
      trigger: testimonialSection,
      start: `top ${scrollTriggerStart}`,
      markers: false,
    },
    ease: 'power3.inOut',
  });

  testimonialTl
    .from(testimonialSection.querySelector('.section-title'), {
      y: '100%',
      duration: 1,
    })
    .from('.testimonials_slide-wrapper.is-case', {
      y: activeSlideMove,
      opacity: 0,
      duration: 1.6,
    })
    .from(
      testimonialSection.querySelector('.testimonials_gradient'),
      {
        y: '80%',
        opacity: 0,
        duration: 1.6,
      },
      '<',
    )
    .from('.testimonials_circle', {
      opacity: 0,
      duration: 0.6,
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

  // BLOG SECTION
  const blogTitle = document.querySelector(
    '.section_blog .section-title',
  );

  const blogTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_blog',
      start: 'top 15%',
      end: 'top 80%',
      markers: false,
    },
    ease: 'power3.inOut',
  });
  blogTl
    .from(blogTitle, { y: '100%', duration: 1 })
    .from(
      '.article-item',
      { y: '3rem', opacity: 0, stagger: { each: 0.2 }, duration: 0.8 },
      0.8,
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
