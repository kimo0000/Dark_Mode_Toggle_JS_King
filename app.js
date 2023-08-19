const body = document.querySelector("body");
const btn = document.querySelector(".btn");

console.log(localStorage.getItem("mode"));
if (localStorage.getItem("mode") === "black") {
  body.style.backgroundColor = localStorage.getItem("mode");
  btn.classList.toggle("move");
  btn.style.backgroundColor = "greenyellow";
}

btn.addEventListener("click", () => {
  btn.classList.toggle("move");
  if (btn.classList.contains("move")) {
    btn.style.backgroundColor = "greenyellow";
    body.style.backgroundColor = "black";
    localStorage.setItem("mode", "black");
  } else {
    btn.style.backgroundColor = "#ddd";
    body.style.backgroundColor = "#fff";
    localStorage.setItem("mode", "#ddd");
  }
});
