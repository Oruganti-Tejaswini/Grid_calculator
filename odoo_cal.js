"use strict";

let allowOperator = false;
let currentInput = "";
let currentInput1 = "";
let inputArray = [];
let buttons = document.getElementsByTagName("button");
let numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
let operators =["Random","Start"]
let index = ""

function setHTML(element, html) {
  document.getElementById(element).innerHTML = html;
}

function updateDisplay() {
setHTML("display", inputArray.join(" ") + " " + currentInput);
currentInput1 = []
}

function updateDisplayRandom() {
  setHTML("display", inputArray.join(" ") + " " + currentInput1);
  currentInput = []
}


function appendNum(num) {
  let numTooLong = false;

  if (currentInput == "" && inputArray.length > 0 && allowOperator === true) {
    currentInput = inputArray.pop();
    currentInput += num;
  } else if (numTooLong === false) {
    currentInput += num;
  }
  
}
function getNumber(num) {
    currentInput1 = num;
}

function getDisplay(index) {
  currentInput1 = ""
   currentInput = ""
  setHTML("display", index);
}


function buttonPressed(userInput) {
  switch(true) {
    case(numbers.includes(userInput)):
       appendNum(userInput);
      allowOperator = true;
        updateDisplay();
      break;
      

    case(operators.includes(userInput)):
    
    if(userInput == "Random"){
     var urlString = "https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new"
	fetch(urlString)
	.then(res => res.text())
	.then(text => {
	getNumber(text);
  	updateDisplayRandom();
 
  	console.log(text);

	})   
    allowOperator = false;
    
    }
    if (userInput == "Start"){
   
    let temp =  document.getElementById("display");
    temp = (temp.innerText);
   
   if(temp.length>0){
   console.log(temp, typeof temp.length, temp.length)
   temp = parseInt(temp)
 
   for (index = temp; index >=0; index--) {
   console.log(index);
   
	getNumber(index);
	updateDisplay();
   allowOperator = false;
   if (index == 0)
   {
    	getNumber("Happy Birthday");
    	updateDisplayRandom();
   }
	}
   }
    }   
  }
}


for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    let userInput = this.innerHTML;
    buttonPressed(userInput);
  });
}


function toggleKeyColor(key, action) {
  let theButton;
  let bgColor = "#74f790";
  switch(key) {
    case("1"):
      theButton = "btn-one";
      break;
    case("2"):
      theButton = "btn-two";
      break;
    case("3"):
      theButton = "btn-three";
      break;
    case("4"):
      theButton = "btn-four";
      break;
    case("5"):
      theButton = "btn-five";
      break;
    case("6"):
      theButton = "btn-six";
      break;  
    case("7"):
      theButton = "btn-seven";
      break;
    case("8"):
      theButton = "btn-eight";
      break;
    case("9"):
      theButton = "btn-nine";
      break;
    case("0"):
      theButton = "btn-zero";
      break;
    case("Start"):
      theButton = "btn-start";
      break;
  
    case("random"):
      theButton = "btn-Random";
      break;
  }  
}






