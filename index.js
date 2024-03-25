function goToProj(projectURL) {
  window.open(projectURL);
}

const sliders = document.getElementsByClassName("slider");

function createSlider() {
  for (let i = 0; i < sliders.length; i++) {
    const slider = sliders[i];
    const prevBtn = document.getElementById("prevBtn" + (i + 1));
    const nextBtn = document.getElementById("nextBtn" + (i + 1));

    console.log("previous button asigned to slider " + (i + 1));

    let currentIndex = 0;

    function showSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + slider.children.length) % slider.children.length;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slider.children.length;
      showSlide(currentIndex);
    });

    showSlide(currentIndex);
  }
}

createSlider();
