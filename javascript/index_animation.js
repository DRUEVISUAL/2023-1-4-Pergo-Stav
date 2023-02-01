gsap.registerPlugin()

gsap.from(".title", 
{
scrollTrigger: ".title", 
x: "-250%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(2px)', 
druation: ".19"
});

gsap.from(".line", 
{
scrollTrigger: ".title", 
duration: ".19",  
x: "-100%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(2px)', 
delay: ".35"
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
druation: '4s', 
x: '-100%', 
ease: 'ease', 
filter: 'blur(20px)', 
delay: '.25'
})

gsap.from('.hero_desktop_column', 
{ 
druation: '1', 
x: '-200%', 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(20px)' 
})

gsap.from('.hero_desktop_bottom_card', 
{
druation: '.5', 
x: '-100%',
ease: 'ease-in', 
opacity: '0'
})

gsap.from('.hero_nav',
{
druation: '.15', 
x: '-75%',
ease: 'ease-in', 
opacity: '0', 
delay: '.25', 
filter: 'blur(2px)'
})

gsap.from('.logo', 
{
druation: '.25', 
x: '-100%', 
ease: 'ease-in', 
opacity: '0', 
delay: '.25' 
})

gsap.from('.hero_title_container', 
{
druation: '.5', 
x: '-100%', 
ease: 'ease-in', 
opacity: '0', 
delay: '.50', 
filter: 'blur(6px)'
})

gsap.from('.hero_desktop_bottom_card p', 
{
druation: '.35', 
x: '-100%', 
ease: 'ease-in', 
opacity: '0', 
delay: '.65' , 
filter: 'blur(4px)'
})

gsap.from('.hero_bottom', 
{
druation: '3', 
ease: 'ease-in', 
opacity: '0', 
delay: '1.6'
})