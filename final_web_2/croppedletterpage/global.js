window.addEventListener("load", function() {
    var carousel = document.getElementById('carousel-list');

    var carouselSlides = document.querySelectorAll('.carousel-slide');
    var currentSlide = 0;
    var total = carouselSlides.length;
    /*var nextBtn = document.querySelector('#next-btn');
    var prevBtn = document.getElementById('prev-btn');*/
    var timer;


    function showNextSlide() {
        hideAllSlides();
        if(currentSlide === total - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        carouselSlides[currentSlide].style.opacity = 1;
    }

    function showPrevSlide() {
        hideAllSlides();
        if(currentSlide === 0) {
            currentSlide = total - 1;
        } else {
            currentSlide--;
        }
        carouselSlides[currentSlide].style.opacity = 1;
    }

    function hideAllSlides() {
        carouselSlides.forEach(function(slide) {
            slide.style.opacity = 0;
        });
    }


    function initialize() {
        timer = setInterval(showNextSlide,5000);

    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);
    carousel.addEventListener('mouseover', stopAutoPlay);
    carousel.addEventListener('mouseout', initialize);
    
    function stopAutoPlay() {
        clearInterval(timer);
    }

    initialize()

});




