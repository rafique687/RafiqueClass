
function calculate()
{
	
let firstnum=document.getElementById('num1').value;
let second=document.getElementById('num2').value;
let operation=document.getElementById('operation').value;

//let operation = "0";
let res;
switch (operation) {
  case '+' :
    res = Number(firstnum)+ Number(second);
    console.log(res);
    break;
  case'*':
    res = firstnum*second;
    console.log(res);
    break;
    case '-':
    res = firstnum-second;
    console.log(res);
    break;
     case '/':
    res = firstnum/second;
    console.log(res);
    break;
  default:
   console.log('not found operation');
}
 document.getElementById("res").innerHTML = res;
}