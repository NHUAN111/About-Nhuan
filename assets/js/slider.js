window.addEventListener("load", function() {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider__main");
    const sliderItems = document.querySelectorAll(".slider__main-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let postionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function() {
        handeChangeSlide(1);
    });

    prevBtn.addEventListener("click", function() {
        handeChangeSlide(-1);
    });
    [...dotItems].forEach((item) =>
        item.addEventListener("click", function(e) {
            [...dotItems].forEach(el => el.classList.remove("active"));
            e.target.classList.add("active");
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            postionX = -1 * index * sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
        }));

    function handeChangeSlide(direction) {
        if (direction == 1) {
            if (index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            }
            postionX = postionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index++;
        } else if (direction == -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            postionX = postionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index--;
        }
        [...dotItems].forEach(el => el.classList.remove("active"));
        dotItems[index].classList.add("active");
    }
});

$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    $('.load').delay(500).fadeOut('fast'); /* fade fast/400/slow */
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#header').addClass('sticky');
            $('.navbar-item-link').addClass('sticky-color');
        } else {
            $('#header').removeClass('sticky');
            $('.navbar-item-link').removeClass('sticky-color');
        }
    });
});