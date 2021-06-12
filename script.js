const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function () {
    const navigate = document.getElementsByTagName("nav");
    document.body.classList.toggle("lock")
    navigate[0].classList.toggle("active");
    menuIcon.classList.toggle("active")
});


// MENU HIDDEN
let previous = 0;
window.addEventListener("scroll", function () {
    const menu = document.getElementsByClassName("header-container");
    if (pageYOffset > 670 && pageYOffset < previous) {
        document.getElementById("logo").src = "image/SKOUT2.png";
        menu[0].classList.add("header-container-fixed");
    } else {
        document.getElementById("logo").src = "image/SKOUT.png";
        menu[0].classList.remove("header-container-fixed");
    }
    previous = pageYOffset;
});


$(document).ready(function () {

    //  GLOSSARY
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 30000,
        adaptiveHeight: true,
        appendDots: $('.list')
    });

    //  PLANS
    $('.plans').slick({
        arrows: false,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 30000,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    autoplay: false,
                    centerMode: false,
                    variableWidth: false,
                    infinite: false
                }
            }
        ],
        mobileFirst: true
    });

    //  PARTNERS
    $('.partners-big').slick({
        arrows: false,
        fade: true,
        asNavFor: ".partners"
    });
    $('.partners').slick({
        arrows: false,
        slidesToShow: 5,
        asNavFor: ".partners-big",
        focusOnSelect: true
    });
});

