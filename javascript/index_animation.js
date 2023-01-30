gsap.registerPlugin()

gsap.from(".title", {
    scrollTrigger: ".title", x: "-150%", ease: 'ease-in', opacity: '0', filter: 'blur(5px)', druation: ".5"
  });

  gsap.from(".line", {
    scrollTrigger: ".title", x: "-40%", ease: 'ease-in', opacity: '0', filter: 'blur(5px)', druation: ".5"
  });

  gsap.from(".category_description", {
    scrollTrigger: ".category_container", x: "-40%", ease: 'ease-in', opacity: '0', delay: ".25", filter: 'blur(20px)', druation: ".5"
  });

  gsap.from(".category", {
    scrollTrigger: ".category", x: "-35%", ease: 'ease-in', autoAlpha: '0', delay: ".6", filter: 'blur(2px)', stagger: '.1', druation: ".5"
  });

  gsap.from(".nav_main", {
    scrollTrigger: ".category", y: "-100%", ease: 'ease-in', opacity: '0', filter: 'blur(2px)', delay: "1"
  });

gsap.from('.hb', { druation: '4s', x: '-100%', ease: 'ease', filter: 'blur(20px)', delay: '.25'})

gsap.from('.hero_desktop_column', { druation: '1', x: '-200%', ease: 'ease-in', opacity: '0', filter: 'blur(20px)' })

gsap.from('.hero_desktop_bottom_card', { druation: '.5', x: '-100%', ease: 'ease-in', opacity: '0' })

gsap.from('.hero_nav', { druation: '.15', x: '-75%', ease: 'ease-in', opacity: '0', delay: '.25', filter: 'blur(2px)'})

gsap.from('.logo', { druation: '.25', x: '-100%', ease: 'ease-in', opacity: '0', delay: '.25' })

gsap.from('.hero_title_container', { druation: '.5', x: '-100%', ease: 'ease-in', opacity: '0', delay: '.50', filter: 'blur(6px)'})

gsap.from('.hero_desktop_bottom_card p', { druation: '.35', x: '-100%', ease: 'ease-in', opacity: '0', delay: '.65' , filter: 'blur(4px)'})

gsap.from('.hero_bottom', { druation: '3', ease: 'ease-in', opacity: '0', delay: '1.6' })