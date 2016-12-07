//global variables
var numberValue = document.getElementById("area");
var intervalHandle;
var numPad = [document.getElementById("buttons"), document.getElementById("two"), document.getElementById("three")];
console.log(numPad);

//To ensure that textbox is null when start
function startUp() {
numberValue.value = " ";
}

//To count to zero
function startCount() {
  if(numberValue.value > 1) {
    numberValue.value--;
  } else{
  clearInterval(intervalHandle);
  alert("Stop");
  startUp();
  }
}

function buttonTransfer(array) {
  var buttonNum = document.getElementById("buttons");
  numberValue.value = numberValue.value + buttonNum.value;
  console.log(buttonNum.value);
}

//main program
startUp();
for (var i = 0; i < numPad.length; i++) {
  console.log(numPad[i].value);
numPad[i].onclick = function(){
  buttonTransfer(numPad[i]);
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
