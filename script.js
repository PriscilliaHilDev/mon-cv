const toggleButton = document.getElementsByClassName("linkToggle")[0];
const navMobile = document.querySelector(".navbar .navList");

const widthProgress = document.getElementsByClassName('progress');
const sectionSkills = document.querySelector('.techno-skills');
const progressBars = document.querySelectorAll('.progress');

toggleButton.addEventListener("click", () => {
    navMobile.classList.toggle('active')
})

window.onresize = function() { 

    if(window.innerWidth > 700){
        navMobile.classList.remove('active')
    }
}; 

const updateProgree = (progressBar, value) => {
    value = Math.round(value);
    progressBar.querySelector('.fill').style.width = `${value}%`;
    progressBar.querySelector('.text').textContent = `${value}%`;
}

const animationSkills = () => {
    for(progress of widthProgress){
        let valueProgress = progress.getAttribute('data-progress')
        updateProgree(progress, valueProgress)
    }
}

const hideAnimationSkills = () => {
    for(progress of widthProgress){
        updateProgree(progress, 0)
    }
}

window.onload = () => {
    animationSkills()
}

window.onscroll = () => {
    const sectionPosition = sectionSkills.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if(sectionPosition < screenPosition){
        animationSkills();
    }else{
        hideAnimationSkills();
    }
}




// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }











