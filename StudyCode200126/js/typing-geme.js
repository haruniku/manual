var p = document.getElementById("text");
var listTexts = [
    "branch", "checkout", "origin", "add", "commit",
    "GitBucket", "GitHub", "init", "status", "log",
    "merge","pull", "request", "config","diff"
];
var checkTexts = [];

createText();
function createText() {
  var rnd = Math.floor(Math.random() * listTexts.length);
  p.textContent = "";
  checkTexts = listTexts[rnd].split("").map(function(value) {
    var span = document.createElement("span");
    span.textContent = value;
    p.appendChild(span);
    return span;
  });
}
// console.log(checkTexts);

document.addEventListener("keydown", keydown);
function keydown(e) {
  if (e.key === checkTexts[0].textContent) {
    checkTexts[0].className = "add-blue";
    checkTexts.shift();
    if (!checkTexts.length) createText();
  }
}
