

  // let x = Math.floor(Math.random() * 256);
  // let y = Math.floor(Math.random() * 256);
  // let z = Math.floor(Math.random() * 256);
  // let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  // let invertedcolor = "rgb(" + (255-x) + "," + (255-y) + "," + (255-z) + ")";

// Modify the script.js to create a new <section> with a random background-color for each learner in your group.
// This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

// const newsection=document.createElement("section");
// const newcontent=document.createTextNode("Learner");
// newsection.style.color=invertedcolor;
// newsection.style.backgroundColor=bgColor;
// newsection.appendChild(newcontent);
// const currentdiv=document.querySelector("article");
// currentdiv.appendChild(newsection);

// If the background is dark the text should be white, if the background is light the text should be black

// Find a way so that everytime you load the page the order of the elements changes!

function Learner(learnername,newsection){
  //color
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let mymath=(x+y+z)/3;
  let textcolor;
  if(mymath>100)textcolor=0;
  else textcolor=255;
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  let invertedcolor = "rgb(" + textcolor + "," + textcolor + "," + textcolor + ")";
  // let invertedcolor = "rgb(" + (255-x) + "," + (255-y) + "," + (255-z) + ")"; //<-inverted colors but its ugly/unreadable sometimes

  //creating text
  const newparagraph=document.createElement("p");
  newparagraph.innerHTML=learnername;
  newparagraph.style.color=invertedcolor;
  newparagraph.style.width="200px";
  newparagraph.style.backgroundColor=bgColor;
  const newcontent=document.createTextNode(learnername);
  newsection.appendChild(newparagraph);
}

const newsection=document.createElement("section");

// Learner("Pieter Ophalvens",newsection);
// Learner("Alex ",newsection);
// Learner("Kelsey",newsection);
// Learner("Mohammed",newsection);
// Learner("Jonasi",newsection);
// Learner("Eduarda",newsection);
// Learner("Becca",newsection);
// Learner("All the others xD",newsection);

// If the background is dark the text should be white, if the background is light the text should be black

// Find a way so that everytime you load the page the order of the elements changes!
let list=["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", "Eduarda", "Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "Jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave", "Sezin", "Thierry", "Sylvie", "Anaïs"];
let listlength=list.length;
for (let i = 0; i < listlength; i++) {
  let randomi=Math.floor(Math.random()*list.length);
  console.log(randomi,list.length,list[randomi]);
  Learner(list.pop(randomi),newsection);
}
document.querySelector("article").appendChild(newsection);