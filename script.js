var switcher = document.getElementById("toggler");
var basic = document.getElementById("left");
var professional = document.getElementById("middle");
var master = document.getElementById("right");

switcher.addEventListener("click", () => {
  if (basic.innerHTML === "$199.99") {
    basic.innerHTML = "$19.99";
  } else {
    basic.innerHTML = "$199.99";
  }

  if (professional.innerHTML === "$249.99") {
    professional.innerHTML = "$24.99";
  } else {
    professional.innerHTML = "$249.99";
  }

  if (master.innerHTML === "$399.99") {
    master.innerHTML = "$39.99";
  } else {
    master.innerHTML = "$399.99";
  }
});