//for FAQ questions
document.addEventListener('DOMContentLoaded', function () {
    const questionContainers = document.querySelectorAll('.faq-question');

    questionContainers.forEach(function (questionContainer) {
        questionContainer.addEventListener('click', function () {
            const answer = questionContainer.nextElementSibling;
            const icon = questionContainer.querySelector('.toggle-icon');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.textContent = '+';
            } else {
                answer.style.display = 'block';
                icon.textContent = '-';
            }
        });
    });
});

//for menu bar
function toggleMenu() {
    var nav = document.getElementById('mainNav');
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  }
  
//for card slideshow
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slideIndex++;
  
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
  }

//review slideshow
document.addEventListener('DOMContentLoaded', function () {
  const unlockContainer = document.querySelector('.review');
  const slidesContainer = document.querySelector('.comments');
  const arrowLeft = document.querySelector('.la');
  const arrowRight = document.querySelector('.lr');
  const slideWidth = document.querySelector('#s1').offsetWidth;

  function nextSlide() {
      slidesContainer.style.transition = 'transform 0.5s ease-in-out';
      slidesContainer.style.transform = 'translateX(-${slideWidth}px)';
      setTimeout(() => {
          slidesContainer.style.transition = 'none';
          slidesContainer.style.transform = 'translateX(0)';
          slidesContainer.appendChild(slidesContainer.firstElementChild);
      }, 500);
  }

  function prevSlide() {
      slidesContainer.style.transition = 'none';
      slidesContainer.insertBefore(slidesContainer.lastElementChild, slidesContainer.firstElementChild);
      slidesContainer.style.transform = 'translateX(-${slideWidth}px)';
      setTimeout(() => {
          slidesContainer.style.transition = 'transform 0.5s ease-in-out';
          slidesContainer.style.transform = 'translateX(0)';
      }, 50);
  }

  arrowLeft.addEventListener('click', prevSlide);
  arrowRight.addEventListener('click', nextSlide);
});
