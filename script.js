$(document).ready(function(){
    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1, // Slides one item at a time
        autoplay: true,
        autoplaySpeed: 500000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1 // Slides one item at a time
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1 // Slides one item at a time
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
