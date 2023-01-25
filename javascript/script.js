const menuButton = document.querySelector("#menu_button")
const menu = document.querySelector(".menu_phone")

menuButton.addEventListener("click", ()=>{
    menu.classList.toggle("menu_active")
})

