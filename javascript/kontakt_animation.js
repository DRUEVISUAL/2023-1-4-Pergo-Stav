gsap.registerPlugin()

gsap.from(".title", 
{ 
x: "-250%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(5px)', 
})

gsap.from(".line", 
{
duration: ".19",  
x: "-250%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(5px)',
delay: '.23'
})

gsap.from(".title_p",
{ 
duration: ".3", 
x: "-35%", 
ease: 'ease-in', 
opacity: '0', 
delay: ".3", 
filter: 'blur(4px)'
})


gsap.from(".panel", 
{
duration: ".4", 
x: "-100%", 
ease: 'ease-in', 
opacity: '0', 
delay: ".5", 
filter: 'blur(4px)', 
})

gsap.from(".nav_main", 
{ 
duration: ".5", 
y: "-100%", 
ease: 'ease-in', 
opacity: '.5', 
filter: 'blur(2px)', 
delay: "1"
})