const navLink = document.querySelectorAll(".nav-menu .nav-link") ;
const openMenueButton = document.querySelector("#menu-open") ;
const closeMenueButton = document.querySelector("#menu-close") ;

openMenueButton.addEventListener("click" , () => { 

    document.body.classList.toggle("show-mobile-menue");
});

closeMenueButton.addEventListener ("click" , () =>
    openMenueButton.click()
);
navLink.forEach (link =>{
    link.addEventListener("click" ,() =>openMenueButton.click());
        
});
