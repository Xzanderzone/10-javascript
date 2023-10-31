const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
}

const clickOnSquare = (e) => {
  // Everytime the user clicks on one of the action squares
  // Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
  // Create a new <li> in the log below to state when the action was done
  let originalSection=document.querySelector(".displayedsquare-wrapper");
  let newDiv=document.createElement("div");
  newDiv.classList.add("displayedsquare");
  newDiv.classList.add(e.target.classList[1]);
  originalSection.appendChild(newDiv);

  let timeLog=document.createElement("li");
  timeLog.innerHTML=getElapsedTime()+" Created a new "+e.target.classList[1]+" square";
  document.querySelector("ul").appendChild(timeLog);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


// Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
document.body.addEventListener("keydown",function(e){
console.log(e.keyCode);
let key=e.keyCode;
if(key==32){
  console.log("space");  
  // When the spacebar is hit randomly change the background color of the whole page
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.backgroundColor=bgColor;

  // Log when the spacebar is used the same way you used for the generated squares.
  let timeLog=document.createElement("li");
  timeLog.innerHTML=getElapsedTime()+" Pressed spacebar";
  document.querySelector("ul").appendChild(timeLog);
  }
  // When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.
  if(key==76){
    document.querySelector("ul").innerHTML="";
  }
  // When the s key is pressed the squares get deleted (erases the generated squares)
  if(key==83){
    document.querySelector(".displayedsquare-wrapper").innerHTML="";
  }
});
// Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square*/
document.body.addEventListener("click",function(e){
  if(e.target.classList.contains("displayedsquare")){
    if(e.target.classList.contains("orange"))window.alert("orange square clicked");
    if(e.target.classList.contains("green"))window.alert("green square clicked");
    if(e.target.classList.contains("violet"))window.alert("violet square clicked");
  }
});
