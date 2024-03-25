function goToProj(projectURL) {
  window.open(projectURL);
}

// Slider JS

function createSlider() {
  const sliders = document.getElementsByClassName("slider");

  for (let i = 0; i < sliders.length; i++) {
    const slider = sliders[i];
    const prevBtn = document.getElementById("prevBtn" + (i + 1));
    const nextBtn = document.getElementById("nextBtn" + (i + 1));

    let currentIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    // Event listener for the previous button
    prevBtn.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + slider.children.length) % slider.children.length;
      showSlide(currentIndex);
    });

    // Event listener for the next button
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slider.children.length;
      showSlide(currentIndex);
    });

    showSlide(currentIndex);
  }
}

// Create sliders and provide unique IDs for buttons
createSlider();
