const cookie = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");

cookie.onclick = function () {
  if (clicker.textContent >= 0) {
    clicker.textContent ++;
  }
  if (clicker.textContent % 2 === 0) {
    cookie.width = 200;
  } else {
    cookie.width = 180;
  }
}