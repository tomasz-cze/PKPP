document.addEventListener("DOMContentLoaded", function () {

    // timer for automatic slideshow

    let slideShow = document.querySelector(".slideShow").children;
    let counter = 0;
    slideShow[counter].className = "showSlide";

    setInterval(function () {
        if (counter >= slideShow.length - 1) {
            slideShow[counter].classList.toggle("showSlide");
            counter = 0;
            slideShow[counter].classList.toggle("showSlide");
        } else {
            slideShow[counter].classList.toggle("showSlide");
            counter ++;
            slideShow[counter].classList.toggle("showSlide");
        }
    },3000);

    console.log(slideShow)

});


