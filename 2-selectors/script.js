//Add a title attribute to every element that has the important class, stating This is an important item. 
//Tip: adding a title attribute to an element is different from changing the title of a document.
let array = document.querySelectorAll(".important");
array.forEach(element => {
  element.setAttribute('title','This is an important item');
});
// Select all the img tags and loop through them. If they have no important class, turn their display property to none
array=document.querySelectorAll('img');
array.forEach(element => {
  if(element.classList.contains('important')){
    element.parentElement.style.display="block";
  } 
  else{
    element.parentElement.style.display="none";
  }
});
// Loop through all the paragraphs and display their content in the console. If the paragraph has a class,
// display its classname as well
// Give each of the paragraph a random text color (different for each one)
// UNLESS it has a class then leave it as it is.


array=document.querySelectorAll('p');
array.forEach(element => {
  let classname=element.hasAttribute('class');
  console.log(element);
  if(classname===false)
  {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    element.style.color=bgColor;
  }
  else{
    console.log(element.className);
  }
});