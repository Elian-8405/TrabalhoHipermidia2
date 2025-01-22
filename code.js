document.addEventListener('DOMContentLoaded', function () {
 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

 
    document.getElementById('goToReviews').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#review_section').scrollIntoView({
            behavior: 'smooth'
        });
    });

  
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

 
    function moveSlide(step) {
        currentSlide += step;

        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        } else if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }

        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    
    document.getElementById('prevBtn').addEventListener('click', function () {
        moveSlide(-1); 
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
        moveSlide(1); 
    });

    
    moveSlide(0);

  

});

