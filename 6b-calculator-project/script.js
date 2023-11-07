function computeResult(str){
  return Function('return ' + str)()
}
let previous=0;
function createButton(className,buttonName,number){

  let newDiv= document.createElement("div");
  newDiv.classList.add(className);
  newDiv.classList.add("button");
  newDiv.classList.add(number);
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
    else if(className=="add"){
      inputArea.innerHTML+="+";
    }
    else if(className=="multiply"){
      inputArea.innerHTML+="*";
    }
    else if(className=="divide"){
      inputArea.innerHTML+="/";
    }
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
  else if(key.key=="+"||key.key=="-"||key.key=="*"||key.key=="/"||key.key=="%"||key.key=="0"||key.key=="1"
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
for(i=9;i>=0;i--)numberPad.appendChild(createButton("number",i,i));
numberPad.appendChild(createButton("point","."));
numberPad.appendChild(createButton("equal","="));
calculator.appendChild(numberPad);

//oparation-pad
let operationPad=document.createElement("div");
operationPad.classList.add("operationpad");
operationPad.appendChild(createButton("clear","c"));
operationPad.appendChild(createButton("divide","/"));
operationPad.appendChild(createButton("multiply","*"));
operationPad.appendChild(createButton("add","+"));
operationPad.appendChild(createButton("subtract","-"));
operationPad.appendChild(createButton("modulo","%"));
calculator.appendChild(operationPad);


