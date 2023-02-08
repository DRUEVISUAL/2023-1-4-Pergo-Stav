gsap.registerPlugin()

gsap.from(".breadcrumb", 
{ 
duration: ".80", 
x: "-500%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(20px)'
})

gsap.from("#section_1", 
{
scrollTrigger: '#section_1',
duration: ".75", 
x: "-150%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(8px)',
})

gsap.from(".product_img_container", 
{
scrollTrigger: '#section_1',
x: "-50%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(8px)', 
druation: ".19",
delay: ".6"
})




gsap.from(".title_phone", 
{
scrollTrigger: '#section_1',
x: "-50%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(6px)', 
druation: ".19",
delay: ".4"
})


gsap.from(".product_text_container", 
{
scrollTrigger: '#section_1',
x: "-70%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(4px)', 
druation: ".19",
delay: ".7"
})

gsap.from(".contact_button_desktop", 
{
scrollTrigger: '#section_1',
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(2px)', 
druation: ".19",
delay: "1.5"
})

gsap.from(".contact_button_phone", 
{
scrollTrigger: '#section_1',
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(2px)', 
druation: ".19",
delay: "1.5"
})


//////////////////////////////////////


gsap.from("#section_2", 
{
scrollTrigger: '#section_2',
duration: ".75", 
x: "-150%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(8px)',
delay: '.35'
})

gsap.from("#section_3", 
{
scrollTrigger: '#section_3',
duration: ".75", 
x: "-150%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(8px)',
delay: '.35'
})

gsap.from("#section_4", 
{
scrollTrigger: '#section_4',
duration: ".75", 
x: "-150%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(8px)',
delay: '.35'
})

gsap.from("#section_5", 
{
scrollTrigger: '#section_5',
duration: ".75", 
x: "-150%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(8px)',
delay: '.35'
})

gsap.from("#section_6", 
{
scrollTrigger: '#section_6',
duration: ".75", 
x: "-150%", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(8px)',
delay: '.35'
})

gsap.from("#section_7", 
{
scrollTrigger: '#section_7',
duration: ".75", 
ease: 'ease-in', 
opacity: '0', 
filter: 'blur(8px)',
delay: '.4'
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
