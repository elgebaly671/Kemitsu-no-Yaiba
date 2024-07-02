
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;

        if (revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add("visible");
        } else {
            reveals[i].classList.remove("visible");
        }
    }
}
function dropdown() {
    var x = document.getElementById("BurgerClick");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}

var swiper = new Swiper(".slide-content", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

//contact us


