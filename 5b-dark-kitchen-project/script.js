import {collection}  from "./collection.js";

function computeResult(str){
  return Function('return ' + str)()
}
document.body.style.color="#FFFFFF";
document.body.style.fontFamily="san-serif";
//header
let docheader=document.body.querySelector("header");
docheader.style.alignContent="center";
docheader.style.textAlign="center";
docheader.style.width="100vw";
docheader.style.minHeight="10vw";
// docheader.style.backgroundColor="#101010"
docheader.style.display="flex";
docheader.style.justifyContent="space-evenly";

let titleDiv=document.createElement("div");
titleDiv.style.paddingRight="100px";
let title=document.createElement("h1");
title.innerHTML="Food Archive";
let titleText=document.createElement("h2");
titleText.innerHTML="Welcome to the restaurant, take a look around";
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
// docmain.style.backgroundColor="#505050";
docmain.style.flexWrap="wrap";
docmain.style.justifyContent="space-evenly";

//iterate every item 
collection.forEach(element => {

  //basic card layout per element in collection
  let card=document.createElement("div");
  card.classList.add("Card");
  // let spacelessName=element.name.replace(/\s/g, '');
  // card.classList.add(spacelessName);
  card.style.margin="10px";
  card.style.padding="10px";
  card.style.maxWidth="400px";
  card.style.borderRadius="5px";
  card.style.textAlign="center";
  // card.style.backgroundColor="#303030";

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

  //title
  let cardTitle=document.createElement("h3");
  cardTitle.innerHTML=element.name;
  cardTitle.style.marginBottom="0px";
  //price
  let cardprice=document.createElement("h4");
  cardprice.innerHTML=element.price;
  cardprice.style.marginBottom="5px";
  cardprice.style.marginTop="5px";

  //add everything
  card.appendChild(cardImg);
  card.appendChild(cardTitle);
  card.appendChild(cardprice);
  card.appendChild(cardGenres);
  docmain.appendChild(card);
});

//footer / shopping cart
let docfooter=document.body.querySelector("footer");
docfooter.style.alignContent="center";
docfooter.style.textAlign="center";
docfooter.style.width="100vw";
docfooter.style.minHeight="15vw";
// docfooter.style.backgroundColor="#101010";

let shoppingCart=[];
let shoptotal=0;
let cartui=document.createElement("div");
cartui.classList.add("cart");
let cardTitle=document.createElement("h2");
cardTitle.innerHTML="Your order";
docfooter.appendChild(cardTitle);
let cardPay=document.createElement("a");
cardPay.innerHTML="Order total:"+shoptotal +"$";
docfooter.appendChild(cardPay);
let cartnames=document.createElement("div");
cartnames.classList.add("cartnames");
let cartamounts=document.createElement("div");
cartamounts.classList.add("cartamounts");
let cartprices=document.createElement("div");
cartprices.classList.add("cartprices");
function cartitem(name, price, count) {
  this.name = name;
  this.price = price;
  this.count = count;
}
let cards = document.getElementsByClassName("Card");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function() 
  {
    let item=new cartitem(this.children[1].textContent,this.children[2].textContent,1);
    let found=false;
    for(let i=0;i<shoppingCart.length;i++)
    {
      if (shoppingCart[i].name==item.name)
      {
        shoppingCart[i].count++;
        
        found=true;
        break;
      }
    };
    if(!found){
      shoppingCart.push(item);
      //100% sure this can be simplified a lot
      let text=document.createElement("p");
      let textamount=document.createElement("p");
      let price=document.createElement("div");
      price.classList.add("price");
      let textprice=document.createElement("p");
      let textremove=document.createElement("a");
      let textadd=document.createElement("a");
      textadd.innerHTML="+";
      textadd.addEventListener("click",()=>{
        item.count++;
        updatecart();
      });
      textremove.innerHTML="-";
      textremove.addEventListener("click",()=>{
        if(item.count>1)item.count--;
        else {
          let index=-1;
          for(let i=0;i<cartnames.children.length;i++){
            if(cartnames.children[i].textContent===item.name)index=i;
          }
          cartnames.removeChild(cartnames.children[index]);
          cartamounts.removeChild(cartamounts.children[index]);
          cartprices.removeChild(cartprices.children[index]);
          console.log(shoppingCart);
          shoppingCart.pop(item);
        };
        updatecart();
      });
      text.innerHTML=item.name;
      textamount.innerHTML=' x'+item.count;
      textprice.innerHTML=item.price+'$';
      cartnames.appendChild(text);
      cartamounts.appendChild(textamount);
      price.appendChild(textprice);
      price.appendChild(textadd);
      price.appendChild(textremove);
      cartprices.appendChild(price);
      cartui.appendChild(cartnames);
      cartui.appendChild(cartamounts);
      cartui.appendChild(cartprices);
    }
    updatecart();
  });
}
function updatecart(){
  shoptotal=0;
  for(let i=0;i<shoppingCart.length;i++){
    cartui.querySelector(".cartamounts").children[i].textContent="x"+shoppingCart[i].count;
    shoptotal+=shoppingCart[i].price*shoppingCart[i].count;
  };
  cardPay.innerHTML="Order total:"+shoptotal +"$";
};

docfooter.appendChild(cartui);
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
      let genres= cards[card].querySelector(".genres");//list
      let found=false;
      // console.log(actors);
      if (series.toUpperCase().indexOf(filter) > -1) {
        found=true;
      }
      if(genres.childElementCount>0){
        for (let i = 0; i < genres.childElementCount; i++) {
          if (genres.children[i].textContent.toUpperCase().indexOf(filter) > -1)found=true;
        };
      };
      if(found) cards[card].style.display = "";
      else cards[card].style.display = "none";

    };
  };
};