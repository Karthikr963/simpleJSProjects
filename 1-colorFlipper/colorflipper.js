const color = "123456789ABCDEF";
function getRandomNumber() {
  return color[Math.floor(Math.random() * color.length)];
}
document.querySelector("#btn").addEventListener("click", function () {
  var hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += getRandomNumber();
  }
  document.body.style.backgroundColor = hexValue;
  document.querySelector("#color-text").innerText = hexValue;
});
