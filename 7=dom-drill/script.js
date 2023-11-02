
let list=document.body.querySelector("ul");
let duplicate=[];
for(const i of list.children)
{
  //Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
  if(i.nodeType!==1){
    // list.removeChild(i);
    break;
  }
  //remove duplicate children
  duplicate.forEach(j => {
    if(i.isEqualNode(j)){
      list.removeChild(i);
    };
  });
  duplicate.push(i);
  //Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
  //add a class .important to the element
  if(i.textContent==="Fast and Furious"){
    list.prepend(i);
    i.classList.add("important");
  };
};
//Create a new <div> before the list, using createElement and insertBefore
let newDiv=document.createElement("div");
document.body.insertBefore(newDiv,list);
//Using createElement, create a <select> tag into the previously created <div>, 
//with two <option>s in it: "important franchises" and "normal franchises"
let newSec=document.createElement("select");
let option1=document.createElement("option");
option1.innerHTML="important franchises";
let option2=document.createElement("option");
option2.innerHTML="normal franchises";
newSec.appendChild(option1);
newSec.appendChild(option2);
newDiv.appendChild(newSec);
//Add an eventListener to the <select>, on change, if the option "important franchise" is chosen,
// only display items of the list that have the class .important. 
//(hint: you can toggle visibility using element.style.visibility = 'hidden')
document.body.querySelector("select").addEventListener("change",function(e){
  for(const i of list.children)
  {
    //if important 
    if(this.value=="important franchises")
    {
      if(i.classList.contains("important"))i.style.visibility="visible";
      else i.style.visibility="hidden";
    }
    //else show all
    else i.style.visibility="visible";
  };
});
// Add an eventListener on the document body, listening for keyup.  r key >shuffle list, keep F&F #1
document.body.addEventListener("keyup",function(e){
  if (e.keyCode===82){
    for (let i = 0; i < list.childElementCount; i++) {
      let randomi=Math.floor(Math.random()*(list.childElementCount));
      console.log(randomi);
      if(list.childNodes[randomi].textContent !== "Fast and Furious")list.appendChild(list.childNodes[randomi]);
    };
  };
  //clone f&f on d key press
  if (e.key==="d") list.prepend(list.childNodes[0].cloneNode(true));
});