//global variables
var numberValue = document.getElementById("area");
var intervalHandle;
var numPad = [document.getElementById("one"), document.getElementById("two"), document.getElementById("three"),
              document.getElementById("four"), document.getElementById("five"), document.getElementById("six"),
              document.getElementById("seven"), document.getElementById("eight"), document.getElementById("nine"), document.getElementById("zero")];


//To ensure that textbox is null when start
function startUp() {
numberValue.value = " ";
}

//To reset
document.getElementById("reset").onclick = function(){
  startUp();
}
//To count to zero
function startCount() {
  if(numberValue.value > 1) {
    numberValue.value--;
  } else{
  clearInterval(intervalHandle);
  alert("Reset");
  startUp();
  }
}

//main program
startUp();

for (var i = 0; i < numPad.length; i++) {
    numPad[i].onclick = function(){
    numberValue.value = numberValue.value + this.value;
  };
}

document.getElementById("start").onclick = function(){
  if(isNaN(numberValue.value)){
    alert("enter number only!");
    return;
  }else{
    intervalHandle = setInterval(startCount,1000);
  }
};
