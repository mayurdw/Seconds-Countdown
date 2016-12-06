//global variables
var numberValue = document.getElementById("area");
var intervalHandle;
//To ensure that textbox is null when start
function startUp() {
document.getElementById("area").value = " ";
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
//main program
startUp();
document.getElementById("start").onclick = function(){
  if(isNaN(numberValue.value)){
    alert("enter number only!");
    return;
  }else{
    intervalHandle = setInterval(startCount,1000);
    }
};
