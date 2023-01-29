const menuButton = document.querySelector("#menu_button")
const menu = document.querySelector(".menu_phone")

menuButton.addEventListener("click", ()=>{
    menu.classList.toggle("menu_active")
})

////////////////////////////////////////////////////////////

const category = document.querySelectorAll(".cat_con")
const title = document.querySelector(".title")
const desc = document.querySelector(".category_description")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("cat_con_visible", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
        if (entry.isIntersecting) console.log("working")
    })
}, {
    rootMargin: "32px"
})


category.forEach(card =>{
    observer.observe(card)
})


observer.observe(document.querySelector(".title"))
observer.observe(document.querySelector(".category_description"))