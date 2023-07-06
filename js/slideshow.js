const slideshow = document.getElementById('slideshow');
    const title = document.getElementById('title');
    const images = slideshow.getElementsByTagName('img');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let currentIndex = 0;

    function showImage(index) {
      for (let i = 0; i < images.length; i++) {
        if (i === index) {
          images[i].style.display = 'block';
        } else {
          images[i].style.display = 'none';
        }
      }
    }

    function showNextImage() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage(currentIndex);
        updateArrows();
      }
    }

    function showPreviousImage() {
      if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
        updateArrows();
      }
    }

    function updateArrows() {
      if (currentIndex === 0) {
        leftArrow.style.display = 'none';
      } else {
        leftArrow.style.display = 'block';
      }

      if (currentIndex === images.length - 1) {
        rightArrow.style.display = 'none';
      } else {
        rightArrow.style.display = 'block';
      }
    }

    leftArrow.addEventListener('click', showPreviousImage);
    rightArrow.addEventListener('click', showNextImage);

    showImage(currentIndex);
    updateArrows();