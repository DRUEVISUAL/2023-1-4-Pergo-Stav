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

toggleMoreColor[1].onclick = open (toggleMoreColor, 1)
toggleLessColor[1].onclick = close (toggleLessColor, 1)

toggleMoreColor[2].onclick = open (toggleMoreColor, 2)
toggleLessColor[2].onclick = close (toggleLessColor, 2)