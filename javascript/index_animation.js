gsap.registerPlugin()

gsap.from(".title", 
{
scrollTrigger: ".title", 
x: "-250%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(2px)', 
});

gsap.from(".line", 
{
scrollTrigger: ".title", 
duration: ".19",  
x: "-250%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(2px)', 
delay: '.23'
});


gsap.from(".category_description", 
{
scrollTrigger: ".title", 
duration: ".19", 
x: "-35%", 
ease: 'ease-in', 
opacity: '0', 
delay: ".3", 
filter: 'blur(4px)'
});


gsap.from(".category", 
{
scrollTrigger: ".category_container",
duration: ".2", 
x: "-45%", 
ease: 'ease-in', 
opacity: '0', 
delay: ".4", 
filter: 'blur(4px)', 
stagger: '.1'
});


gsap.from(".nav_main", 
{
scrollTrigger: ".category_container",
duration: ".5", 
y: "-100%", 
ease: 'ease-in', 
opacity: '.5', 
filter: 'blur(2px)', 
delay: "1"
});


gsap.from('.hb', 
{ 
x: '-100%', 
ease: 'ease', 
filter: 'blur(20px)', 
delay: '.25'
})

gsap.from('.hero_desktop_column', 
{ 
x: '-200%', 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(20px)' 
})

gsap.from('.hero_desktop_bottom_card', 
{
x: '-100%',
ease: 'ease-in', 
opacity: '0'
})

gsap.from('.hero_nav',
{
x: '-75%',
ease: 'ease-in', 
opacity: '0', 
delay: '.25', 
filter: 'blur(2px)'
})

gsap.from('.logo', 
{
x: '-100%', 
ease: 'ease-in', 
opacity: '0', 
delay: '.25' 
})


gsap.from('#menu_button', 
{
x: '-180%', 
ease: 'ease-in', 
opacity: '0', 
delay: '.25' 
})

gsap.from('.hero_title_container', 
{
x: '-100%', 
ease: 'ease-in', 
opacity: '0', 
delay: '.50', 
filter: 'blur(6px)'
})

gsap.from('.hero_desktop_bottom_card p', 
{
x: '-100%', 
ease: 'ease-in', 
opacity: '0', 
delay: '.65' , 
filter: 'blur(4px)'
})

gsap.from('.hero_bottom', 
{
ease: 'ease-in', 
opacity: '0', 
delay: '1.6'
})