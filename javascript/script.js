const menuButton = document.querySelector("#menu_button")
const menu = document.querySelector(".menu_phone")
const inMenuButtons = document.querySelectorAll(".nbp")

menuButton.addEventListener("click", ()=>{
    menu.classList.toggle("menu_active")
})

inMenuButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        menu.classList.remove("menu_active")
    })
})