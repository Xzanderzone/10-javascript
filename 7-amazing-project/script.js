
let CURRENTLEVEL=[];
let playerLocationX=0;
let playerLocationY=0;
let highestlevel=1;
const LEVEL_1 = [
  ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
  ["*","S",".",".",".",".",".","*","*",".","*",".","T"],
  ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
  ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
  ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
  ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
  ["*","*","*","*","*",".",".",".",".",".",".",".","*"],
  ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
  ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
  ["*",".","*","*","*","*","*","*",".",".",".","*","*"],
  ["*",".",".",".",".","*","*","*","*","*","*","*","*"],
  ["*","*","*","*","*","*","*","*","*","*","*","*","*"]
]

const LEVEL_2 = [
  ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
  ["*",".",".","S",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
  ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*",".","*"],
  ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
  ["*",".","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
  ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","T"],
  ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
]

const LEVEL_3 = [
  ["*","*","*","*","*","*","*","*"],
  ["*","*","*","*","S","*","*","*"],
  ["*","*","*","*",".","*","*","*"],
  ["*","*","*","*",".","*","*","*"],
  ["*","*","*","*",".","*","*","*"],
  ["*",".",".",".",".",".",".","*"],
  ["*",".","*","*","*","*",".","*"],
  ["*",".",".","*","*","*",".","*"],
  ["*",".",".","*","*","*",".","*"],
  ["*","*",".","*","*","*","*","*"],
  ["*","T",".","*","*","*","*","*"],
  ["*","*","*","*","*","*","*","*"]
]
const LEVELS=[LEVEL_1,LEVEL_2,LEVEL_3];

function generateArea(level){
  playerLocationX=0;
  playerLocationY=0;
  CURRENTLEVEL=level;
  let area=document.body.querySelector("main");
  let maze=document.createElement("div");
  maze.classList.add("maze");
  CURRENTLEVEL.forEach((collum,colindex)=> {
    let col=document.createElement("div");
    col.classList.add("collum");
    collum.forEach((element,rowindex) => {
      let segment=document.createElement("div");
      if(element==="*"){
        segment.classList.add("wall");
      }
      else if(element==="."){
        segment.classList.add("floor");
        //border => if connected to wall
        if(rowindex==0 || CURRENTLEVEL[colindex][rowindex-1]==="*") segment.classList.add("borderL");//left
        if(rowindex==0 || CURRENTLEVEL[colindex][rowindex+1]==="*") segment.classList.add("borderR");//right
        if(colindex==0 || CURRENTLEVEL[colindex-1][rowindex]==="*") segment.classList.add("borderU");//up
        if(colindex==0 || CURRENTLEVEL[colindex+1][rowindex]==="*") segment.classList.add("borderD");//up
      }
      else if(element==="S"){
        segment.classList.add("floor");
        //border => if connected to wall
        if(rowindex==0 || CURRENTLEVEL[colindex][rowindex-1]==="*") segment.classList.add("borderL");//left
        if(rowindex==0 || CURRENTLEVEL[colindex][rowindex+1]==="*") segment.classList.add("borderR");//right
        if(colindex==0 || CURRENTLEVEL[colindex-1][rowindex]==="*") segment.classList.add("borderU");//up
        if(colindex==0 || CURRENTLEVEL[colindex+1][rowindex]==="*") segment.classList.add("borderD");//up
        segment.classList.add("player");
        playerLocationX=rowindex;
        playerLocationY=colindex;
      }
      else if(element==="T"){
        segment.classList.add("end");
      };
      segment.classList.add("C"+colindex+"R"+rowindex);
      col.appendChild(segment);
    });
    // col.style.width=(75);
    // col.style.height=(50);
    maze.appendChild(col);
  });
  
  // maze.style.width=(CURRENTLEVEL[0].length*50);
  // maze.style.height=(CURRENTLEVEL.length*50);
  area.append(maze);
};

document.body.addEventListener("keydown",(e)=>{
  
  if(e.key==="ArrowDown" && CURRENTLEVEL[playerLocationY+1][playerLocationX]==="T")GameWon()
  else if(e.key==="ArrowDown" && CURRENTLEVEL[playerLocationY+1][playerLocationX]==="."){
    //old way -keeping
    CURRENTLEVEL[playerLocationY][playerLocationX]=".";
    CURRENTLEVEL[playerLocationY+1][playerLocationX]="S";
    //better way
    document.body.querySelector(".C"+playerLocationY+"R"+playerLocationX).classList.remove("player");
    playerLocationY+=1;
  }
  else if(e.key==="ArrowUp" && CURRENTLEVEL[playerLocationY-1][playerLocationX]==="T")GameWon();
  else if(e.key==="ArrowUp" && CURRENTLEVEL[playerLocationY-1][playerLocationX]==="."){
    CURRENTLEVEL[playerLocationY][playerLocationX]=".";
    CURRENTLEVEL[playerLocationY-1][playerLocationX]="S";
    document.body.querySelector(".C"+playerLocationY+"R"+playerLocationX).classList.remove("player");
    playerLocationY-=1;
  }
  else if(e.key==="ArrowLeft" && CURRENTLEVEL[playerLocationY][playerLocationX-1]==="T")GameWon();
  else if(e.key==="ArrowLeft" && CURRENTLEVEL[playerLocationY][playerLocationX-1]==="."){
    CURRENTLEVEL[playerLocationY][playerLocationX]=".";
    CURRENTLEVEL[playerLocationY][playerLocationX-1]="S";
    document.body.querySelector(".C"+playerLocationY+"R"+playerLocationX).classList.remove("player");
    playerLocationX-=1;
  }
  else if(e.key==="ArrowRight" && CURRENTLEVEL[playerLocationY][playerLocationX+1]==="T")GameWon();
  else if(e.key==="ArrowRight" && CURRENTLEVEL[playerLocationY][playerLocationX+1]==="."){
    CURRENTLEVEL[playerLocationY][playerLocationX]=".";
    CURRENTLEVEL[playerLocationY][playerLocationX+1]="S";
    document.body.querySelector(".C"+playerLocationY+"R"+playerLocationX).classList.remove("player");
    playerLocationX+=1;
  }
  
  document.body.querySelector(".C"+playerLocationY+"R"+playerLocationX).classList.add("player");
  console.log(playerLocationX,playerLocationY);
});

function GameWon(){
  highestlevel+=1;
  document.body.querySelector("main").innerHTML=[];
  generateArea(LEVELS[(highestlevel-1)%LEVELS.length]);
}

generateArea(LEVELS[0]);
