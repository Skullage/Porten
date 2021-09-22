@include('webp.js')




// Табы на мобилке в футере

const g = document.querySelector(".footer-tab");

for(var j = 0; j < g.children.length; j++) {
    (
        function(index) {
            document.getElementsByClassName('footer-tab__title')[j].onclick = function (){
                this.parentElement.classList.toggle("active");
            }
        }
    )(j);
}

// Бургер меню

document.querySelector(".menu-burger").onclick = function() {
    this.classList.toggle("active");
    document.querySelector("body").classList.toggle("fixed-page");
    document.querySelector(".header").classList.toggle("active");
}