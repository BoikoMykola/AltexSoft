const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function () {
    const navigate = document.getElementById("navigate");
    document.body.classList.toggle("lock")
    navigate.classList.toggle("active");
    menuIcon.classList.toggle("active")
});


// MENU HIDDEN
let previous = 0;
window.addEventListener("scroll", function () {
    const menu = document.getElementsByClassName("header-container");
    if (pageYOffset > 670 && pageYOffset < previous) {
        document.getElementById("logo").src = "image/SKOUT2.png";
        menu[0].id = "headerContainerFixed";
    } else {
        document.getElementById("logo").src = "image/SKOUT.png";
        menu[0].removeAttribute("id");
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
                breakpoint: 1140,
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

