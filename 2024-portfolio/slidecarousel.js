var $carousel = $('.carousel'); // Carousel jQuery object
var mouseDownAt = 0; // Where the mouse button was pressed
var prevPercentage = 0; // Previous slide percentage

$carousel.on('mousedown touchstart', function(e) {
    var event = e.originalEvent;
    mouseDownAt = event.clientX || event.touches[0].clientX; // Store mouse down (touch start) X coordinate
});

$(document).on('mouseup touchend', function() {
    mouseDownAt = 0; // Reset mouse down (touch start) X coordinate
    prevPercentage = $carousel.slick('slickCurrentSlide') / ($carousel.slick('getSlick').slideCount - 1); // Store previous slide percentage
});

$(document).on('mousemove touchmove', function(e) {
    var event = e.originalEvent;
    if (mouseDownAt === 0) return; // No mouse down (touch start) occurred

    var mouseDelta = mouseDownAt - (event.clientX || event.touches[0].clientX), // Mouse (touch) movement delta
        maxDelta = $(window).width() / 2, // Maximum delta (half of the window width)
        percentage = mouseDelta / maxDelta, // Movement percentage
        slideCount = $carousel.slick('getSlick').slideCount,
        nextSlideUnconstrained = prevPercentage * (slideCount - 1) - percentage * (slideCount - 1), // Calculate next slide
        nextSlide = Math.round(Math.max(Math.min(nextSlideUnconstrained, slideCount - 1), 0)); // Constrain next slide

    $carousel.slick('slickGoTo', nextSlide); // Go to next slide
});

