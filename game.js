//* ============================================================
//*  GUESS MY NUMBER
//*  Game Logic
//* ============================================================

//? PC  1-20 arasında rastgele bir sayı hesaplasın
let randomNumber = Math.ceil(Math.random()*20);
console.log(randomNumber);

//?selectors

const again=document.querySelector(".again");
const check=document.querySelector(".check");
const msg=document.querySelector(".msg");

//?Variables
let score=10;
let topScore=0;

//?check butonu tıklandığında

check.onclick=()=>{

const guess=document.querySelector(".guess").value;



//?sayı girilmeden check e basılırsa uyarı versin

if(!guess){
  msg.textContent = "Please Enter Your Guess";
  
  //?eğer tahmin doğruysa
}else if(guess==randomNumber){

msg.textContent="Congrulations 🎉";
document.querySelector("body").style.backgroundColor="green";
document.querySelector(".number").textContent=randomNumber;
if(score>topScore)
{topScore=score;

 document.querySelector(".top-score").textContent=score;
}
}
else{

//?eğer tahmin yanlışsa
if(score>1)
{score--;

guess < randomNumber? (msg.textContent = "📈 Increase!!!"): (msg.textContent = "📉 Decrease!!!");
 document.querySelector(".score").textContent = score;

}else{
 msg.textContent="Sorry you lost!😞"
 document.querySelector(".score").textContent=0;
 document.querySelector("body").style.backgroundColor="red";
}


}}

//? Again butonuna basıldığında

again.onclick = ()=>{
    randomNumber = Math.ceil(Math.random() * 20);
    console.log(randomNumber);
    
    score=10;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent="?";
    document.querySelector("body").style.backgroundColor = "#2d3436";
    msg.textContent="Starting...."
    document.querySelector(".guess").value="";
    
    }