let items = document.querySelectorAll(".item");
let menu = document.querySelector(".menu");

let increment = 360 / items.length;
let angle = 0;
let iterator = angle;

items.forEach((item) => {
  item.style.transform = `rotateX(${iterator}deg)translateZ(120px)`;

  iterator = iterator + increment;
});