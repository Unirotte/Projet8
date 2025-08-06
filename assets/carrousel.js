document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselExampleIndicators");
  const inner = carousel.querySelector(".carousel-inner");
  const items = carousel.querySelectorAll(".carousel-item");
  const indicators = carousel.querySelectorAll(".carousel-indicators button");
  const prevBtn = carousel.querySelector(".carousel-control-prev");
  const nextBtn = carousel.querySelector(".carousel-control-next");

  let currentIndex = 0;
  const totalItems = items.length;
  let autoPlayInterval = null;
//   const autoPlayDelay = 3000; // 3 secondes

  function goToSlide(index) {
    if (index < 0) index = totalItems - 1;
    else if (index >= totalItems) index = 0;
    currentIndex = index;
    inner.style.transform = `translateX(-${index * 100}%)`;
    updateIndicators();
  }

  function updateIndicators() {
    indicators.forEach((btn, i) => {
      btn.classList.toggle("active", i === currentIndex);
    });
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Event listeners
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });

  indicators.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      goToSlide(i);
      resetAutoPlay();
    });
  });

  // AutoPlay
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  // Init
  goToSlide(0);
  startAutoPlay();
});