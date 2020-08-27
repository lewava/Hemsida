const sliderTwo = document.querySelector("#slider-two");

const leftArrowTwo = document.querySelector("#arrow-left-two")
const rightArrowTwo = document.querySelector("#arrow-right-two")

let sectionIndexTwo = 0;

leftArrowTwo.addEventListener("click", function() {
    sectionIndexTwo = (sectionIndexTwo > 0) ? sectionIndexTwo -1 : 0;
    sliderTwo.style.transform = "translate(" + (sectionIndexTwo) * -33.3 + "%)";
});

rightArrowTwo.addEventListener("click", function() {
    sectionIndexTwo = (sectionIndexTwo < 2) ? sectionIndexTwo + 1 : 2;
    sliderTwo.style.transform = "translate(" + (sectionIndexTwo) * -33.3 + "%)";
});