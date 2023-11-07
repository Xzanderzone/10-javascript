function computeResult(str){
  return Function('return ' + str)()
}
let previous=0;
function createButton(className,buttonName,number){

  let newDiv= document.createElement("div");
  newDiv.classList.add(className);
  newDiv.classList.add("button");
  if(number!=undefined)newDiv.classList.add(number);
  newDiv.innerHTML=buttonName;
  newDiv.addEventListener("click",()=>{
    if(className=="number"){
      inputArea.innerHTML+=(number);
    }
    else if(className=="equal"){
      previous=inputArea.innerHTML;
      outputArea.innerHTML=previous;
      inputArea.innerHTML=computeResult(inputArea.innerHTML);
    }
    else if(className=="subtract"){
      inputArea.innerHTML+="-";
    }
    else if(className=="point"){
      inputArea.innerHTML+=".";
    }
    else if(className=="add"){
      inputArea.innerHTML+="+";
    }
    else if(className=="multiply"){
      inputArea.innerHTML+="*";
    }
    else if(className=="divide"){
      inputArea.innerHTML+="/";
    }
    else if(className=="bracketopen")inputArea.innerHTML+="(";
    else if(className=="bracketclose")inputArea.innerHTML+=")";
    else if(className=="modulo")inputArea.innerHTML+="%";
    else if(className=="clear")inputArea.innerHTML="";
  });
  return newDiv;
}
document.addEventListener("keypress",(key)=>{
  if(key.key=="Enter" || key.key=="="){
    previous=inputArea.innerHTML;
    outputArea.innerHTML=previous;
    inputArea.innerHTML=computeResult(inputArea.innerHTML);
  }  
  else if(key.key=="+"||key.key=="-"||key.key=="*"||key.key=="/"||key.key=="%"||key.key=="0"||key.key=="1"||key.key=="("||key.key==")"
  ||key.key=="2"||key.key=="3"||key.key=="4"||key.key=="5"||key.key=="6"||key.key=="7"||key.key=="8"||key.key=="9"){
    console.log('test');
    inputArea.innerHTML+=key.key;
  }
  });

//display screen
let calculator=document.body.querySelector('main');
let inputArea=document.createElement("div");
inputArea.classList.add("inputArea");
let outputArea=document.createElement("div");
outputArea.classList.add("outputArea");
calculator.appendChild(outputArea);
calculator.appendChild(inputArea);

//number-pad
let numberPad=document.createElement("div");
numberPad.classList.add("numberpad");
// for(i=9;i>=0;i--)numberPad.appendChild(createButton("number",i,i));
numberPad.appendChild(createButton("number",7,7));
numberPad.appendChild(createButton("number",8,8));
numberPad.appendChild(createButton("number",9,9));
numberPad.appendChild(createButton("number",4,4));
numberPad.appendChild(createButton("number",5,5));
numberPad.appendChild(createButton("number",6,6));
numberPad.appendChild(createButton("number",1,1));
numberPad.appendChild(createButton("number",2,2));
numberPad.appendChild(createButton("number",3,3));
numberPad.appendChild(createButton("number",0,0));
numberPad.appendChild(createButton("point","."));
numberPad.appendChild(createButton("equal","="));
calculator.appendChild(numberPad);

//oparation-pad
let operationPad=document.createElement("div");
operationPad.classList.add("operationpad");
operationPad.appendChild(createButton("bracketopen","("));
operationPad.appendChild(createButton("bracketclose",")"));
operationPad.appendChild(createButton("clear","c"));
operationPad.appendChild(createButton("divide","/"));
operationPad.appendChild(createButton("multiply","*"));
operationPad.appendChild(createButton("add","+"));
operationPad.appendChild(createButton("subtract","-"));
operationPad.appendChild(createButton("modulo","%"));
calculator.appendChild(operationPad);


