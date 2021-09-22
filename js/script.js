function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });




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