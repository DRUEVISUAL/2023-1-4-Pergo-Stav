const toggleMoreColor = document.querySelectorAll(".show_colors")
const toggleLessColor = document.querySelectorAll(".hide_colors")

function open(element, n){
    element[n].addEventListener("click", ()=>{
        element[n].parentElement.previousElementSibling.classList.remove("closed");
        element[n].classList.add("closed")
        element[n].nextElementSibling.classList.remove("closed")
    })
}

function close(element, n){
    element[n].addEventListener("click", ()=>{
        element[n].parentElement.previousElementSibling.classList.add("closed")
        element[n].classList.add("closed")
        element[n].previousElementSibling.classList.remove("closed")
    })
}

toggleMoreColor[0].onclick = open (toggleMoreColor, 0)
toggleLessColor[0].onclick = close (toggleLessColor, 0)