const text = document.querySelector("h1");
let index = 1;
let txt = "Vikas P.S";

function writeText() {
  text.innerHTML = txt.slice(0, index);
  index++;
  if (index > txt.length) {
    index = 1;
  }
}
setInterval(writeText, 120);
