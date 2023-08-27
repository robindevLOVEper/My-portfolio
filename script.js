

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back :(";

    
} )
window.addEventListener("focus", () => {
    document.title = docTitle;
})



/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')


// SHOW

toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})


// HIDDEN//

closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show')
})


/*===== ACTIVE AND REMOVE MENU =====*/


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')

}
navLink.forEach(n => n.addEventListener('click', linkAction))
 


/*===== SCROLL SECTIONS ACTIVE LINK =====*/


const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset


    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
    
        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')

        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList('active')
        }
    })
    
    

} 

const favicon = document.getElementById("favicon");
const originalFaviconHref = favicon.getAttribute("href");
const newFaviconHref = "newone.png";  // Replace this with the path to your new favicon

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "visible") {
    // User switched back to the tab, restore the original favicon
    favicon.setAttribute("href", originalFaviconHref);
  } else {
    // User switched away from the tab, change to the new favicon
    favicon.setAttribute("href", newFaviconHref);
  }
});




