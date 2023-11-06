import {collection}  from "./collection.js";
//completely useless fade in on page load but its fun xd
function unfade(element) {
  let op = 0.1;  
  let timer = setInterval(function () {
      if (op >= 1)clearInterval(timer);
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.02;
  }, 10);
};

document.body.style.color="#FFFFFF";
document.body.style.fontFamily="san-serif";
//header
let docheader=document.body.querySelector("header");
docheader.style.alignContent="center";
docheader.style.textAlign="center";
docheader.style.width="100vw";
docheader.style.minHeight="10vw";
docheader.style.backgroundColor="#101010";
docheader.style.display="flex";
docheader.style.justifyContent="space-evenly";

let titleDiv=document.createElement("div");
titleDiv.style.paddingRight="100px";
let title=document.createElement("h1");
title.innerHTML="Series Archive";
let titleText=document.createElement("h2");
titleText.innerHTML="Welcome to the internet, take a look around";
let titleImg=document.createElement("img");
titleImg.src="./images/headericon.png";
titleImg.style.maxWidth="200px";
titleImg.style.maxHeight="200px";
titleImg.style.width="20vw";
docheader.appendChild(titleImg);
titleDiv.appendChild(title);
titleDiv.appendChild(titleText);
docheader.appendChild(titleDiv);

//main
let docmain=document.body.querySelector("main");
docmain.style.display="flex";
docmain.style.alignContent="center";
docmain.style.textAlign="center";
docmain.style.width="100vw";
docmain.style.minHeight="15vw";
docmain.style.backgroundColor="#505050";
docmain.style.flexWrap="wrap";
docmain.style.justifyContent="space-evenly";

//iterate every item 
collection.forEach(element => {

  //basic card layout per element in collection
  let card=document.createElement("div");
  card.classList.add("Card");
  card.style.margin="10px";
  card.style.padding="10px";
  card.style.maxWidth="400px";
  card.style.borderRadius="5px";
  card.style.textAlign="center";
  card.style.backgroundColor="#303030";

  //top image
  let cardImg=document.createElement("img");
  cardImg.style.maxWidth="400px";
  cardImg.style.minWidth="200px";
  cardImg.style.width="20vw";
  cardImg.src=element.picture;

  //genres
  let cardGenres=document.createElement("div");
  cardGenres.classList.add("genres");
  element.genre.forEach(elementGenre => {
    let genre=document.createElement("p");
    genre.style.display="inline";
    genre.style.marginLeft="7px";
    genre.style.padding="1.5px";
    genre.style.backgroundColor="#004040";
    genre.style.borderRadius="7px";
    genre.innerHTML=elementGenre;
    cardGenres.appendChild(genre);
  });

  //title and author
  let cardTitle=document.createElement("h3");
  cardTitle.innerHTML=element.name;
  cardTitle.style.marginBottom="0px";
  let cardDirector=document.createElement("h4");
  cardDirector.style.marginTop="0px";
  cardDirector.innerHTML=element.director;

  //description
  let cardSummary=document.createElement("h5");
  cardSummary.style.marginLeft="75px";
  cardSummary.style.marginRight="75px";
  cardSummary.innerHTML=element.summary;

  //cast --hiddden if not expanded
  let cardCast=document.createElement("div");
  cardCast.classList.add("Cast");
  cardCast.style.display="none";
  cardCast.style.marginTop="20px";
  element.cast.forEach(elementCast => {
    let cast=document.createElement("p");
    cast.style.display="inline";
    cast.style.marginLeft="8px";
    cast.style.padding="1.5px";
    cast.style.backgroundColor="#400040";
    cast.style.borderRadius="7px";
    cast.innerHTML=elementCast;
    cardCast.appendChild(cast);
  });
  //add everything
  card.appendChild(cardImg);
  card.appendChild(cardTitle);
  card.appendChild(cardDirector);
  card.appendChild(cardSummary);
  card.appendChild(cardGenres);
  card.appendChild(cardCast);
  docmain.appendChild(card);
});

let docfooter=document.body.querySelector("footer");
docfooter.style.alignContent="center";
docfooter.style.textAlign="center";
docfooter.style.width="100vw";
docfooter.style.minHeight="15vw";
docfooter.style.backgroundColor="#101010";

// Now that we are aware of events let's pimp our collection and add some interactivity. For example: When hovering on the card, 
//it should increase that card in size and create a darker background over everything else.
let cards = document.getElementsByClassName("Card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function() {
    this.classList.toggle("focus");
    let cast=this.querySelector(".Cast");
    if(cast.style.display==="none")cast.style.display="";
    else cast.style.display="none";

  });
}

//part 2 of the pointless/fun on load fade 
docmain.querySelectorAll(".Card").forEach(element => {
  element.addEventListener('mouseover', unfade(element));
});

// Add some filtering: Searchbar that will filter the cards on title names.
document.body.addEventListener("keyup",myFunction);
function myFunction(){
  let filter = document.body.querySelector(".myInput").value.toUpperCase();
  if(filter.length<1){
    let cards=document.body.getElementsByClassName("Card");
    for(let card=0;card<cards.length;card++){
      cards[card].style.display = "";
    };
  }
  else{
    let cards=document.body.getElementsByClassName("Card");
    for(let card=0;card<cards.length;card++){
      let series =cards[card].querySelector("h3").textContent;//title
      let creator=cards[card].querySelector("h4").textContent;//creator
      let genres= cards[card].querySelector(".genres");//list
      let actors=collection[card].cast;//omg i could have just selected them like this.....xD
      let found=false;
      // console.log(actors);
      if (creator.toUpperCase().indexOf(filter) > -1) {
        found=true;
      }
      else if (series.toUpperCase().indexOf(filter) > -1) {
        found=true;
      }
      if(genres.childElementCount>0){
        for (let i = 0; i < genres.childElementCount; i++) {
          if (genres.children[i].textContent.toUpperCase().indexOf(filter) > -1) {
            found=true;
          }
        };
      };
      if(actors.length>0){
        for (let i = 0; i < actors.length; i++) {
          // console.log(actors[i]); 
          if (actors[i].toUpperCase().indexOf(filter) > -1) {
            found=true;
          };
        };
      };
      if(found) cards[card].style.display = "";
      else cards[card].style.display = "none";

    };
  };
};