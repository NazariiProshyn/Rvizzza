let dots = document.getElementsByClassName('dot'),
    dotsArea = document.getElementById('dots-block'),
    slides = document.getElementsByClassName('slider-item'),
    prev = document.getElementById('prev-btn'),
    next = document.getElementById('next-btn'),
    slideIndex = 1;


function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot-active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n)
}


function dot(i) {
        currentSlide(i);
}


export {plusSlides,dot,currentSlide}