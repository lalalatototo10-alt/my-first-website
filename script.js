const image = document.getElementById("foodImage");
const button = document.getElementById("changeButton");
const title = document.querySelector("h1");

const images = [
    "images/sandwich.jpg",
    "images/juice.jpg",
    "images/salad.jpg"
];

let currentIndex = 0;

button.addEventListener("click", function() {
    title.textContent = "You clicked me!";
    currentIndex = currentIndex + 1;

    if (currentIndex >= images.length) {
    currentIndex = 0;
}

image.src = images[currentIndex];

});