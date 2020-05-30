$(Document).ready(function() {
    $('.nav__burger').click(function(event) {
        $('.nav__burger,.nav,.nav__list').toggleClass('active');
    })
})
$(Document).ready(function() {
    $('.service__btn').click(function(event) {
        $(this).parents('.service__img-body').find('.service__font,.service__font--green').toggleClass('active');

    })
});
$(Document).ready(function() {
    $('.team__img-body').click(function(event) {
        $(this).find('.team__overrow-body').toggleClass('active');

    })
});


$(document).ready(function() {
    $('.bxslider').bxSlider(

    );
});

/**/

function myMap() {
    let mapCanvas = document.getElementById("map");
    let mapOptions = {
        center: new google.maps.LatLng(50.0, 36.15),
        zoom: 10
    };
    let map = new google.maps.Map(mapCanvas, mapOptions);
}


$(document).ready(function() {
    $('.about__slider-body .slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });
});


$(document).ready(function() {
    $('.what__slider-body .slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        asNavFor: ".what__content-body"
    });
});



$(document).ready(function() {
    $('.what__content-body').slick({
        arrows: true,
        adaptiveHeight: true,
        asNavFor: ".what__slider-body .slider"
    });
});