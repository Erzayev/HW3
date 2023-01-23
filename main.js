
let origArray = [2,3,4];
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");

button3.addEventListener("click", ToTheFourth);



document.addEventListener('DOMContentLoaded', function() 
{
  ////////////////   ARRAY   ////////////////
  document.getElementById('num1').value = origArray[0];
  document.getElementById('num2').value = origArray[1];
  document.getElementById('num3').value = origArray[2];
});

////////////////    FUNCTIONS  ////////////////

function Square() {         // FUNCTION FOR ONLCICK 1ST BUTTON
  var newArray = origArray.map(function(x) {
    return x * x;
  });
  document.getElementById('num1').value = newArray[0];
  document.getElementById('num2').value = newArray[1];
  document.getElementById('num3').value = newArray[2];
}


button2.addEventListener("click", function () {   // ANONYMOUS FUNCTION FOR 2ND BUTTON
  var newArray = origArray.map(function(x) {
    return x * x * x;
  });
  document.getElementById('num1').value = newArray[0];
  document.getElementById('num2').value = newArray[1];
  document.getElementById('num3').value = newArray[2];
});



function ToTheFourth() {
  var newArray = origArray.map(function(x) {   // CALLED FUNCTION FOR 3RD BUTTON
    return x * x * x * x;
  });
  document.getElementById('num1').value = newArray[0];
  document.getElementById('num2').value = newArray[1];
  document.getElementById('num3').value = newArray[2];
}






