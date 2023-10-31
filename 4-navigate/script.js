//Select the last child of the <ol> tag and put it at the beginning of the list
let list=document.body.querySelector("ol");
let lastchild=list.lastElementChild;
list.prepend(lastchild);

//Move the <h2> of the third section in the second one and vice-versa
let hList=document.body.querySelectorAll("h2");
let h3=hList[2].outerHTML;
let h2=hList[1].outerHTML;
hList[2].outerHTML=h2;
hList[1].outerHTML=h3;

//Delete the last section from the DOM, we don't need it anyways*/
// console.log(document.body.children);
// document.body.removeChild(document.body.lastElementChild);
// document.removeChild(document.firstChild);