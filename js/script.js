var typingEffect  = new Typed(".multiText",{
    strings: ["web developper","youtuber","designer"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    bbackDelay:150
})

const nav = document.querySelector("nav")
window.addEventListener("scroll", function(){
    nav.classList.toggle("sticky",window.scrollY >100)
})
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
})

var counter = 1
setInterval(function() {
    document.getElementById('radio'+ counter).checked = true
    counter++
    if(counter>4){
        counter =1
    }
},5000)