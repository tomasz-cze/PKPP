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

    // portfolio
    $('.gallery ul li a').click(function() {
        let itemID = $(this).attr('href');
        $('.gallery ul').addClass('item_open');
        $(itemID).addClass('item_open');
        return false;
    });
    $('.close').click(function() {
        $('.port, .gallery ul').removeClass('item_open');
        return false;
    });

    $(".gallery ul li a").click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("#top").offset().top)
        }, 400);
    });
});


