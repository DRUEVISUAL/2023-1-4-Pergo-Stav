gsap.registerPlugin()

gsap.from(".title", 
{ 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(5px)', 
druation: "1",
delay: '.5'
})

gsap.from(".line", 
{
duration: "1",  
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(5px)',
delay: '.5'
})

gsap.from("#title_p",
{ 
duration: "1", 
ease: 'ease-in', 
opacity: '0', 
delay: "1.5", 
filter: 'blur(4px)'
})


gsap.from("#button_d", 
{
duration: ".5", 
ease: 'ease-in', 
opacity: '0', 
delay: "2.5", 
filter: 'blur(4px)', 
})

gsap.from(".nav_main", 
{ 
duration: ".5", 
y: "-100%", 
ease: 'ease-in', 
opacity: '.5', 
filter: 'blur(2px)', 
delay: "4"
})