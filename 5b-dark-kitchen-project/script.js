document.title="Modifying the DOM";
console.log(document.title);
// document.getElementById("body").setAttribute("background-color",color(FF69B4));
// document.body.style.backgroundColor="#FF69B4";
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
document.body.style.backgroundColor=bgColor;


for (const i of document.body.childNodes) {
  console.log(i);
}