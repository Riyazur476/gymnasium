//Window Scroll
$(window).scroll(function() {
    var scrolling = $(this).scrollTop();
    //back-to-top
    if (scrolling > 200) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
    //nav fixed
    if (scrolling > 450) {
        $('.navbar').addClass('nav-fixed');
    } else {
        $('.navbar').removeClass('nav-fixed');
    }
    //sitting
    if (scrolling > 200) {
        $('.sitting').fadeIn();
    } else {
        $('.sitting').fadeOut();
    }
    //theme 
    if (scrolling > 190) {
        $('.theme').fadeOut();
    }
});
$('.back-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0,
    }, 1500);
});
//Theme Click Function
$('.sitting').on('click', function() {
    $('.theme').delay(2000).toggle();
});
//get element from html;
//Name
var Fname = document.getElementById('FName');
var errName = document.getElementById('ErrName');
//Email
var Femail = document.getElementById('FEmail');
var Erremail = document.getElementById('ErrEmail');
//Weight
var fWeight = document.getElementById('Fweight');
var errWeight = document.getElementById('ErrWeight');
//Height
var fHeight = document.getElementById('Fheight');
var errHeight = document.getElementById('ErrHeight');
//Tel
var Telephone = document.getElementById('telephone');
var errTel = document.getElementById('ErrTel');
//Pass
var PAss = document.getElementById('Pass');
var Errpass = document.getElementById('ErrPass');
//Repass
var rEpss = document.getElementById('Repass');
var ErrRepas = document.getElementById('ErrRepass');


// creat a function ;
function sumb() {
    Erremail
    //Name
    if (Fname.value == "") {
        Fname.style.borderColor = "firebrick";
        Fname.focus();
        errName.innerHTML = "Please fill the gap";
        return false;
    }
    //Email
    if (Femail.value == "") {
        Femail.style.borderColor = "firebrick";
        Femail.focus();
        Erremail.innerHTML = "Please fill the gap";
        return false;
    }
    // Weight
    if (fWeight.value == "") {
        fWeight.style.borderColor = "firebrick";
        fWeight.focus();
        errWeight.innerHTML = "Please fill the gap";
        return false;
    } else if (fWeight.value <= 29) {
        errWeight.innerHTML = "weight must 30 or 30+";

    } else if (fWeight.value >= 121) {
        errWeight.innerHTML = "weight must 30kg to 120kg";
    }
    // Height
    if (fHeight.value == "") {
        fHeight.style.borderColor = "firebrick";
        fHeight.focus();
        errHeight.innerHTML = "Please fill the gap";
        return false;
    } else if (fHeight.value <= 89) {
        errHeight.innerHTML = "weight must 90 or 90+";

    } else if (fHeight.value >= 191) {
        errHeight.innerHTML = "Height must 90cm to 190cm";
    }
    //Tel
    if (Telephone.value == "") {
        Telephone.style.borderColor = "firebrick";
        Telephone.focus();
        errTel.innerHTML = "Please fill the gap";
        return false;
    }
    //Pass
    if (PAss.value == "") {
        PAss.style.borderColor = "firebrick";
        PAss.focus();
        Errpass.innerHTML = "Please fill the gap";
        return false;
    } else if (PAss.value.length <= 5) {
        PAss.style.borderColor = "firebrick";
        PAss.focus();
        Errpass.innerHTML = "password must be 6 chracters";
        return false;
    }
    //Repass
    if (rEpss.value == "") {
        rEpss.style.borderColor = "firebrick";
        rEpss.focus();
        ErrRepas.innerHTML = "Please fill the gap";
        return false;
    }
    if (rEpss.value != PAss.value) {
        rEpss.style.borderColor = "";
        ErrRepas.innerHTML = "wrong password";
    }
}

// to remove error function;
function errVaild() {
    //Name
    if (Fname.value != "") {
        Fname.style.borderColor = "";
        errName.innerHTML = "";
    }
    //Email
    if (Femail.value != "") {
        Femail.style.borderColor = "";
        Erremail.innerHTML = "";
    }
    //Weight
    if (fWeight.value != "") {
        fWeight.style.borderColor = "";
        errWeight.innerHTML = "";
    }
    //Height
    if (fHeight.value != "") {
        fHeight.style.borderColor = "";
        errHeight.innerHTML = "";
    }
    //Tel
    if (Telephone.value != "") {
        Telephone.style.borderColor = "";
        errTelinnerHTML = "";
    }
    //Pass
    if (PAss.value != "") {
        PAss.style.borderColor = "";
        Errpass.innerHTML = "";
    }
    //Repass
    if (rEpss.value != PAss.value) {
        rEpss.style.borderColor = "";
        ErrRepas.innerHTML = "";
    }
}
fWeight.addEventListener('blur', errVaild);
Fname.addEventListener('blur', errVaild);
Femail.addEventListener('blur', errVaild);
fHeight.addEventListener('blur', errVaild);
Telephone.addEventListener('blur', errVaild);
PAss.addEventListener('blur', errVaild);
rEpss.addEventListener('blur', errVaild);

$(document).ready(function() {
    //Preloder Js 
    $('.preloder').delay(1500).fadeOut();
    //Theme Js
    $('.theme ul .default').on('click', function() {
        $('body').addClass('default').removeClass('blue').removeClass('green').removeClass('pink').removeClass('orange');

    });
    $('.theme ul .blue').on('click', function() {
        $('body').addClass('blue').removeClass('green').removeClass('pink').removeClass('orange');
    });
    $('.theme ul .green').on('click', function() {
        $('body').addClass('green').removeClass('blue').removeClass('pink').removeClass('orange');
    });
    $('.theme ul .pink').on('click', function() {
        $('body').addClass('pink').removeClass('blue').removeClass('green').removeClass('orange');
    });
    $('.theme ul .orange').on('click', function() {
        $('body').addClass('orange').removeClass('blue').removeClass('pink').removeClass('green');
    });

    //Banner Slider
    $('.Banner-Slider').slick({
        arrows: false,
        autoplay: false,
        dots: true,
        speed: 2500,
        autoplaySpeed: 2500,
    });

    //About video pop-up
    $('.venobox').venobox({
        closeColor: '#e23e38',
        spinColor: '#e23e38',
        spinner: 'rotating-plane',
        share: ['download'],

    });

    //Team Slider
    $('.TeamSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: false,
                }
            },
        ]
    }, 500);

    //Testimonials Slider
    $('.testimonial-slider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
            }
        }, ]

    });

    //Counter in funfact
    $('.counter').counterUp({
        delay: 9,
        time: 1500,
    });

    //Brand Slider
    $('.brand-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<i class="slick-prev fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="slick-next fas fa-chevron-right right-arrow"></i>',
        centerMode: true,
        centerPadding: "0px",
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    autoplay: true,
                }
            },
        ]
    });
    //Modal age
    $("#DateofBirth").birthdayPicker({
        maxAge: 25,
        minAge: 0,
    });

    // jQuery 
    $("#telephone").intlTelInput({
        //coustomize
        onlyCountries: ["bd", "tr", "pk", "ut", "gb"],
        preferredCountries: ["bd", "gb"],
        customPlaceholder: true,
    });
    //Aos animate Effect 
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 400, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

});