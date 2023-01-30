gsap.registerPlugin()


gsap.from(".breadcrumb", { duration: ".19", x: "-50%", ease: 'ease-in', opacity: '0', filter: 'blur(18px)'})

gsap.from(".title", { x: "-150%", ease: 'ease-in', opacity: '0', filter: 'blur(5px)', druation: ".19"})

gsap.from(".line", {duration: ".19",  x: "-40%", ease: 'ease-in', opacity: '0', filter: 'blur(5px)', delay: ".2"})

gsap.from(".category_description", { duration: ".19", x: "-35%", ease: 'ease-in', opacity: '0', delay: ".3", filter: 'blur(4px)'})

gsap.from(".item",  {duration: ".19", x: "-35%", ease: 'ease-in', autoAlpha: '0', delay: ".4", filter: 'blur(2px)', stagger: '.09'})

gsap.from(".nav_main", { duration: ".5", y: "-100%", ease: 'ease-in', opacity: '0', filter: 'blur(2px)', delay: "1.2"})