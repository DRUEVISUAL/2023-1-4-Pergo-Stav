gsap.registerPlugin()

gsap.from(".breadcrumb", 
{ 
duration: ".20", 
x: "-100%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(20px)'
})

gsap.from(".title", 
{ 
x: "-250%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(5px)', 
druation: ".19"
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

gsap.from(".category_description",
{ 
duration: ".3", 
x: "-35%", 
ease: 'ease-in', 
opacity: '0', 
delay: ".3", 
filter: 'blur(4px)'
})

gsap.from(".item", 
{
duration: ".19", 
x: "-35%", 
ease: 'ease-in', 
opacity: '0', 
delay: ".4", 
filter: 'blur(2px)', 
stagger: '.09'
})

gsap.from(".gallery", 
{
duration: ".2", 
x: "-55%", 
ease: 'ease-in', 
opacity: '0', 
delay: ".5", 
filter: 'blur(4px)', 
stagger: '.09'
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

gsap.from(".note", 
{
scrollTrigger: '.note_trigger',
duration: ".5", 
y: "-200%", 
ease: 'ease-in', 
opacity: '.5', 
filter: 'blur(2px)'
})