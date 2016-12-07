//global variables
var numberValue = document.getElementById("area");
var intervalHandle;

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
function buttonTransfer() {
  var buttonNum = document.getElementById("buttons");
  numberValue.value = numberValue.value + buttonNum.innerHTML;
  console.log(buttonNum.innerHTML);

}
//main program
startUp();
document.getElementById("buttons").onclick = function(){
  buttonTransfer();
};
document.getElementById("start").onclick = function(){
  if(isNaN(numberValue.value)){
    alert("enter number only!");
    return;
  }else{
    intervalHandle = setInterval(startCount,1000);
    }
};
