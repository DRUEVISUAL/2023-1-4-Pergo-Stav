gsap.registerPlugin()


gsap.from(".breadcrumb", { x: "-40%", ease: 'ease-in', opacity: '0', filter: 'blur(5px)'})

gsap.from(".title", { x: "-40%", ease: 'ease-in', opacity: '0', filter: 'blur(5px)', delay: ".1"})

gsap.from(".line", { x: "-40%", ease: 'ease-in', opacity: '0', filter: 'blur(5px)', delay: ".2"});

gsap.from(".category_description", { x: "-35%", ease: 'ease-in', opacity: '0', delay: ".3", filter: 'blur(4px)'});

gsap.from(".item",  {x: "-35%", ease: 'ease-in', autoAlpha: '0', delay: ".4", filter: 'blur(2px)', stagger: '.1'})

gsap.from(".nav_main", { y: "-100%", ease: 'ease-in', opacity: '0', filter: 'blur(2px)', delay: "1.2"});

)///