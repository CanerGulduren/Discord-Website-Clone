const menuIcon = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")
const cancelIcon = document.querySelector(".cancel-icon")

window.addEventListener("click", (e)=>{
    if(e.target === menuIcon){
        menu.style.display = "flex"
    }
    else if(e.target === cancelIcon){
        menu.style.display = "none"
    }
}
)

const observer = new IntersectionObserver((e) =>{
    e.forEach((e)=>{
        if(e.isIntersecting){
            e.target.classList.add("show")
        }
    })
})

let hiddenElem = document.querySelectorAll(".hidden-elem")
hiddenElem.forEach((e) => observer.observe(e))
