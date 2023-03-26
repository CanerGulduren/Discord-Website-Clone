const menuIcon = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")
const cancelIcon = document.querySelector(".cancel-icon")

menuIcon.addEventListener("click", ()=>{
    menu.style.display = "block"
})

cancelIcon.addEventListener("click", ()=>{
    menu.style.display = "none"
})
