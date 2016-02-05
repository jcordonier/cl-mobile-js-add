
function check(ifNum){
  var num = isNaN(ifNum);
  return num;
}

var num1 = prompt("Enter a number please.");

// Remember scope: We define a variable before we can use it
var num1check = check(num1);

// Remember comparisons: '=' means assignment; '==' means check for equality
while(num1check == true){
  var num1 = prompt("Enter a valid number please.")
  num1check = check(num1);
}

var num2 = prompt("Enter another number.");
var num2check = check(num2);

while(num2check == true){
  num2 = prompt("Enter another number.");
  num2check = check(num2);
}

var Number1 = Number(num1);
var Number2 = Number(num2);

var sum = (Number1 + Number2);
alert(sum);
//
