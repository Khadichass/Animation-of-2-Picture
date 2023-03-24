let sliderContainer = document.querySelector(".slider-container");
let slideRight = document.querySelector(".right-slide");
let slideLeft = document.querySelector(".left-slide");
let upButton = document.querySelector(".up-button");
let downButton = document.querySelector(".down-button");

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));
