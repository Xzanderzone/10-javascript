const collection =[ 
  {
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    picture: "./images/pulpfiction.jpg",
    genre: ["Crime", "Drama"],
    cast: ["John Travolta", "Samuel L Jackson", "Uma Thurman", "Amanda Plummer"],
    summary:"The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who in the name of charity and good will shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children."
  },  
  {
    name: "Vox Machina",
    director: "Neal Acree",
    releaseYear: 2008,
    picture: "./images/voxmachina.jpg",
    genre: ["action", "adventure","comedy drama","fantasy"],
    cast: ["Matthew Mercer", "Marisha Ray", "Ashley Johnson", "Laura Bailey","Sam Riegel","Travis Willingham","Liam O'Brien","Taliesin Jaffe"],
    summary:"Vox Machina, a band of eight unlikely heroes, find themselves on a quest to save the realm of Exandria from dark magical forces"
  
  },
  {
    name: "Breaking Bad",
    director: "Vince Gilligan",
    releaseYear: 2008,
    picture: "./images/breakingbad.jpg",
    genre: ["Crime", "Drama","Thriller","Dark Comedy","Neo-western","Tragedy"],
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris","RJ Mitte","Bob Odenkirk","Betsy Brandt","Jonathan Banks"],
    summary:"Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse."
  },
  {
    name: "Supernatural",
    director: "Eric kripke",
    releaseYear: 2005,
    picture: "./images/supernatural.jpg",
    genre: ["Action", "Adventure","Drama","Fantasy","Horror","Mystery"],
    cast: ["Jensen Ackles","Jared Padelecki","Misha Collins","Mark Sheppard","Jeffrey Dean Morgan","Jim Beaver"],
    summary:"When a woman mysteriously dies due to a supernatural event, her husband and her sons set out on a mission to find out the truth, while battling various paranormal beings."
  },
  {
    name: "Lucifer",
    director: "Alex Katsnelson",
    releaseYear: 2021,
    picture: "./images/lucifer.jpg",
    genre: ["Mystery","Occult","detective fiction","Urban fantasy","Police procedural","Comedy drama",],
    cast: ["Tom Elis","Lauren German","Kevin Alejandro","Lesley-Ann-Brandt","D.B>Woodside","Aimee Garcia","Rachael Harris","Scarlett Evstevez"],
    summary:" the original fallen angel, who has become dissatisfied with his life in hell. After abandoning his throne and retiring to Los Angeles"
  },
  {
    name: "Vox Machina",
    director: "Neal Acree",
    releaseYear: 2022,
    picture: "./images/voxmachina.jpg",
    genre: ["action", "adventure","comedy drama","fantasy"],
    cast: ["Matthew Mercer", "Marisha Ray", "Ashley Johnson", "Laura Bailey","Sam Riegel","Travis Willingham","Liam O'Brien","Taliesin Jaffe"],
    summary:""
  },
  {
    name: "Vox Machina",
    director: "Neal Acree",
    releaseYear: 2022,
    picture: "./images/voxmachina.jpg",
    genre: ["action", "adventure","comedy drama","fantasy"],
    cast: ["Matthew Mercer", "Marisha Ray", "Ashley Johnson", "Laura Bailey","Sam Riegel","Travis Willingham","Liam O'Brien","Taliesin Jaffe"],
    summary:""
  },
  {
    name: "Vox Machina",
    director: "Neal Acree",
    releaseYear: 2022,
    picture: "./images/voxmachina.jpg",
    genre: ["action", "adventure","comedy drama","fantasy"],
    cast: ["Matthew Mercer", "Marisha Ray", "Ashley Johnson", "Laura Bailey","Sam Riegel","Travis Willingham","Liam O'Brien","Taliesin Jaffe"],
    summary:""
  },
  {
    name: "Vox Machina",
    director: "Neal Acree",
    releaseYear: 2022,
    picture: "./images/voxmachina.jpg",
    genre: ["action", "adventure","comedy drama","fantasy"],
    cast: ["Matthew Mercer", "Marisha Ray", "Ashley Johnson", "Laura Bailey","Sam Riegel","Travis Willingham","Liam O'Brien","Taliesin Jaffe"],
    summary:""
  },
  {
    name: "Vox Machina",
    director: "Neal Acree",
    releaseYear: 2022,
    picture: "./images/voxmachina.jpg",
    genre: ["action", "adventure","comedy drama","fantasy"],
    cast: ["Matthew Mercer", "Marisha Ray", "Ashley Johnson", "Laura Bailey","Sam Riegel","Travis Willingham","Liam O'Brien","Taliesin Jaffe"],
    summary:""
  },
];

function unfade(element) {
  var op = 0.1;  
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}

//header
let docheader=document.body.querySelector("header");
docheader.style.alignContent="center";
docheader.style.textAlign="center";
docheader.style.width="100vw";
docheader.style.minHeight="10vw";
docheader.style.backgroundColor="red";
docheader.style.display="flex";
docheader.style.justifyContent="space-evenly";

let titleDiv=document.createElement("div");
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
docmain.style.backgroundColor="green";
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
  card.style.backgroundColor="gray";

  //top image
  let cardImg=document.createElement("img");
  cardImg.style.maxWidth="400px";
  cardImg.style.minWidth="200px";
  cardImg.style.width="20vw";
  cardImg.src=element.picture;

  //genres
  let cardGenres=document.createElement("div");
  element.genre.forEach(elementGenre => {
    let genre=document.createElement("p");
    genre.style.display="inline";
    genre.style.marginLeft="7px";
    genre.style.padding="2px";
    genre.style.backgroundColor="yellow";
    genre.style.borderRadius="5px";
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
  cardSummary.style.flexWrap="wrap";
  cardSummary.innerHTML=element.summary;


  //add everything
  card.appendChild(cardImg);
  card.appendChild(cardGenres);
  card.appendChild(cardTitle);
  card.appendChild(cardDirector);
  card.appendChild(cardSummary);
  docmain.appendChild(card);
});

//hover functionallity
docmain.querySelectorAll(".Card").forEach(element => {
  element.addEventListener('mouseover', unfade(element));
});


let docfooter=document.body.querySelector("footer");
docfooter.style.alignContent="center";
docfooter.style.textAlign="center";
docfooter.style.width="100vw";
docfooter.style.minHeight="15vw";
docfooter.style.backgroundColor="blue";

// Move your const collectionfrom your script.js to a new file called collection.js and Import that collection into your script file.

// Now that we are aware of events let's pimp our collection and add some interactivity. For example: When hovering on the card, it should increase that card in size and create a darker background over everything else.
// Add some filtering: Searchbar that will filter the cards on title names.