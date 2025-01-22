document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth Scroll for GoToReviews button
    document.getElementById('goToReviews').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#review_section').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Slide Logic
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Function to change slides
    function moveSlide(step) {
        currentSlide += step;

        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        } else if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }

        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Set up the buttons
    document.getElementById('prevBtn').addEventListener('click', function () {
        moveSlide(-1); // Move to the previous slide
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
        moveSlide(1); // Move to the next slide
    });

    // Initialize the first slide
    moveSlide(0);

    const menuToggle = document.getElementById('menu-toggle');
    const mobileNavContainer = document.getElementById('mobile_nav_container');

    menuToggle.addEventListener('click', function () {
        // Alterna a classe active no menu
        mobileNavContainer.classList.toggle('active');

        // Alterna o ícone do hambúrguer entre aberto e fechado
        menuToggle.classList.toggle('open');
    });


});

