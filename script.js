let inner__scrollers = document.querySelectorAll(".inner__scroller");
let pause__scroller_btn = document.getElementById("pause__scroller_btn");
let pause_scroll_icons = document.querySelectorAll(".pause_scroll_icons");
let sliderImages = document.querySelectorAll(".sliderImage");
let scrolling = true;

pause__scroller_btn.addEventListener("click", () => {
  scrolling
    ? innerSrollersAnimationUpdate(inner__scrollers, "paused")
    : innerSrollersAnimationUpdate(inner__scrollers, "running");
  scrolling = !scrolling;
  pause_scroll_icons.forEach((icon) => {
    icon.classList.toggle("hidden");
    icon.classList.toggle("flex");
  });
});

sliderImages.forEach((sliderChildren) => {
  sliderChildren.addEventListener("mouseover", () => {
    innerSrollersAnimationUpdate(inner__scrollers, "paused");
  });
  sliderChildren.addEventListener("mouseout", () => {
    innerSrollersAnimationUpdate(inner__scrollers, "running");
  });
});

function innerSrollersAnimationUpdate(inner__scrollers, action) {
  inner__scrollers.forEach((scroller) => {
    scroller.style.animationPlayState = action;
  });
}
