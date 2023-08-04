const tag = document.getElementById("colorTag");
const main = document.getElementById("main");
const btn = document.getElementById("btn");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function changeBg() {
  let hexColor = "#";
  for (let i = 1; i <= 6; i++) {
    hexColor = hexColor + randomHexValue();
  }
  main.style.backgroundColor = hexColor;
  tag.innerHTML = hexColor;
});

function randomHexValue() {
  let randomVal = Math.floor(Math.random() * 16);
  return hex[randomVal];
}
