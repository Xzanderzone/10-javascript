let inputs=document.body.querySelectorAll("input");
let age=[];
let pw,pwc;
inputs.forEach(i => {
  //Add a keyup listener on the first input field, so that once you type a letter in this field, 
  //it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
  if(i.name=="firstname")i.addEventListener("keyup",function(e){
    let displayfirst=document.body.querySelector("#display-firstname");
    if(e.keyCode==8 )displayfirst.lastChild.remove();
    if((e.keyCode>64 && e.keyCode<90) || e.keyCode==32)displayfirst.append(e.key.toString());
  });
  //Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden,
  //otherwise show them this hard to swallow fact.
  else if(i.name=="age")i.addEventListener("keyup",function(e){
    if(e.keyCode==8 && age.length>0)age.pop();
    else if((e.keyCode>95&& e.keyCode<105)||(e.keyCode>47&& e.keyCode<57))age.push(e.key);
    let truth=document.body.querySelector("#a-hard-truth");
    console.log(age.join(""), age.join("").toString()>17);
    if(age.join("").toString()>17)truth.style="visibility:visible";
    else truth.style="visibility:hidden";
  });
  //Well this is a common one. Add a keyup listener on both fields and show a visual hint 
  //(for instance turn the field red) if the password is too short (less than 6 characters) 
  //or if the password and its confirmation do not match.
  else if(i.name=="pwd" || i.name=="pwd-confirm")i.addEventListener("keyup",function(e){
    if(i.name=="pwd")pw=i.value;
    else if(i.name=="pwd-confirm")pwc=i.value;
    
    if(pw.length<6 || pwc!=pw )i.style.backgroundColor="red";
    else if(pw.length>=6 &&pwc==pw)i.style.backgroundColor="green";
    else i.style.backgroundColor="white";

  });

  //use a change listener on the <select> field to toggle a dark mode on the whole page. 
  document.body.querySelector("#toggle-darkmode").addEventListener("change",function(e){
    var bgColor = "rgb(" + 255 + "," + 255+ "," + 255 + ")";
    var color = "rgb(" + 0 + "," + 0+ "," + 0 + ")";
    if(this.value=="dark"){
      document.body.style.backgroundColor=color;
      document.body.style.color=bgColor;
    }
    else if(this.value=="light"){
      document.body.style.backgroundColor=bgColor;
      document.body.style.color=color;
    }
  });
});