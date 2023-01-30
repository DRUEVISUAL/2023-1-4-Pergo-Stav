gsap.registerPlugin()

const category = document.querySelectorAll(".cat_con")

gsap.from(".title", {
    scrollTrigger: ".title", x: "-100%", ease: 'ease-in', opacity: '0'
  });

  gsap.from(".category_description", {
    scrollTrigger: ".category_container", x: "-100%", ease: 'ease-in', opacity: '0', delay: ".25", filter: 'blur(20px)'
  });

  gsap.from(".category", {
    scrollTrigger: ".category", x: "-45%", ease: 'ease-in', opacity: '0', delay: ".6", filter: 'blur(1px)', stagger: '.1'
  });

gsap.from('.hb', { druation: '4s', x: '-100%', ease: 'ease', filter: 'blur(20px)', delay: '.25'})

gsap.from('.hero_desktop_column', { druation: '1', x: '-200%', ease: 'ease-in', opacity: '0', filter: 'blur(20px)' })

gsap.from('.hero_desktop_bottom_card', { druation: '.5', x: '-100%', ease: 'ease-in', opacity: '0' })

gsap.from('.hero_nav', { druation: '.15', x: '-75%', ease: 'ease-in', opacity: '0', delay: '.25', filter: 'blur(2px)'})

gsap.from('.logo', { druation: '.25', x: '-100%', ease: 'ease-in', opacity: '0', delay: '.25' })

gsap.from('.hero_title_container', { druation: '.5', x: '-100%', ease: 'ease-in', opacity: '0', delay: '.50', filter: 'blur(4px)'})

gsap.from('.hero_desktop_bottom_card p', { druation: '.35', x: '-100%', ease: 'ease-in', opacity: '0', delay: '.65' , filter: 'blur(4px)'})

gsap.from('.hero_bottom', { druation: '3', ease: 'ease-in', opacity: '0', delay: '1.6' })