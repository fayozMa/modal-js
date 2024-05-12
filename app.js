const showBtnEl = document.getElementById("showBtn")
const modalEL = document.getElementById("modal")
const closeBtnEl = document.getElementById("closeBtn")
const overlayEl = document.getElementById("overlay")
const addHidden = () => {
    modalEL.classList.add("hidden")
    overlayEl.classList.add("hidden")
}
const removeHidden = () => {
    modalEL.classList.remove("hidden")
    overlayEl.classList.remove("hidden")    
}
showBtnEl.addEventListener("click",removeHidden())
closeBtnEl.addEventListener("click", addHidden())
overlayEl.addEventListener("click", addHidden())
document.addEventListener('keydown',(e)=>{
    if(e.key == "Escape"){
        addHidden()
    }
})