
let list=document.body.querySelector("ul");
for(const i of list.childNodes)
{
  //Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
  if(i.nodeType===1)
  {
    //Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
    //add a class .important to the element
    if(i.textContent=="Fast and Furious"){
      list.prepend(i);
      i.classList.add("important");//why doesnt it know classlist exists here?? tf
    }
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
  let list=document.body.querySelector("ul");
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
