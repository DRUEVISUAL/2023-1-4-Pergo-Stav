const infoButton = document.querySelectorAll("#info_button")

function toggleInfo(element, n){
   element[n].addEventListener("click", ()=>{
    element[n].nextElementSibling.classList.toggle("closed")
   })
}

infoButton[0].onclick = toggleInfo(infoButton, 0)
infoButton[1].onclick = toggleInfo(infoButton, 1)
infoButton[2].onclick = toggleInfo(infoButton, 2)
infoButton[3].onclick = toggleInfo(infoButton, 3)
infoButton[4].onclick = toggleInfo(infoButton, 4)
infoButton[5].onclick = toggleInfo(infoButton, 5)