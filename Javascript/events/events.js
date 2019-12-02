var numone = document.getElementById("num1");
var numtwo = document.getElementById("num2");
var addsum = document.getElementById("sum");

numone.addEventListener("input",add);
numtwo.addEventListener("input",add);
function add(){
    var one = parseFloat(numone.value)||0;
    var two=parseFloat(numtwo.value)|0;
    addsum.innerHTML= one+two;
}
