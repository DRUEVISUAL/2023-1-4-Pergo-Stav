const infoButton = document.querySelectorAll("#info_button")

function toggleInfo(element, n){
   element[n].addEventListener("click", ()=>{
    element[n].nextElementSibling.classList.toggle("closed")
   })
}

infoButton[0].onclick = toggleInfo(infoButton, 0)
infoButton[1].onclick = toggleInfo(infoButton, 1)