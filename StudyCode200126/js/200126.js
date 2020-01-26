var listName = ["Apple", "Orange", "Banana", "Peach", "Muscat"];
var disp = document.getElementById("disp");

function dispRandom() {
  var ran = Math.floor(Math.random() * listName.length);
  disp.innerHTML = listName[ran];
}
dispRandom();


