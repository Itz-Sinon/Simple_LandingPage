var MenuBtn = document.getElementById("MenuBtn");
var x = document.getElementById("Links");

function Menu() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function handleResize() {
  if (window.innerWidth > 780) {
    x.style.display = "";
  }
}
window.addEventListener("resize", handleResize);