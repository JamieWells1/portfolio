function goToProj(projectURL) {
  window.open(projectURL);
}

const sliders = document.getElementsByClassName("slider");
const websitesTab = document.getElementById("websites-tab");
const websitesContent = document.getElementById("websites-content");
const algorithmsTab = document.getElementById("algorithms-tab");
const algorithmsContent = document.getElementById("algorithms-content");

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

websitesTab.addEventListener("click", () => {
  websitesTab.classList.add("active");
  algorithmsTab.className = algorithmsTab.className.replace(" active", "");
  websitesContent.style.display = "block";
  algorithmsContent.style.display = "none";
});

algorithmsTab.addEventListener("click", () => {
  algorithmsTab.classList.add("active");
  websitesTab.className = websitesTab.className.replace(" active", "");
  websitesContent.style.display = "none";
  algorithmsContent.style.display = "block";
});
