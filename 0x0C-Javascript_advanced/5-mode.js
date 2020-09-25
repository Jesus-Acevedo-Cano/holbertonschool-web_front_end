function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}
function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let tag = document.createElement("p");
  let text = document.createTextNode("Welcome Holberton!");
  tag.appendChild(text);
  document.body.appendChild(tag);

  let btn = document.createElement("button");
  btn.innerHTML = "Spooky";
  btn.onclick = function () {
    spooky();
  }
  document.body.appendChild(btn);

  btn = document.createElement("button");
  btn.innerHTML = "Dark mode";
  btn.onclick = function () {
    darkMode();
  }
  document.body.appendChild(btn);

  btn = document.createElement("button");
  btn.innerHTML = "Scream mode";
  btn.onclick = function () {
    screamMode();
  }
  document.body.appendChild(btn);
}
main();
