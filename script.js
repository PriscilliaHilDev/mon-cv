const toggleButton = document.getElementsByClassName("linkToggle")[0]
const navMobile = document.querySelector(".navbar .navList")

toggleButton.addEventListener("click", () => {
    navMobile.classList.toggle('active')
})

window.onresize = function() { 
    console.log(window.innerWidth)
	if(window.innerWidth > 700){
        navMobile.classList.remove('active')
    }
}; 
