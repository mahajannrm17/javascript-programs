console.log("========function without arguments and no return value=====");
function show(){
    console.log("Inside show function");
}
show(); //Function call/Invoke

console.log("=====Function with Arguments and No return value");
function multiply(n1,n2){
    console.log("Given numbers:",n1,n2);
    var result = n1*n2;
    console.log("Multiplication is:",result);
}
multiply(8,9);
multiply(100,300);
multiply(123.67,98.77);
multiply(70);

console.log("=======Function with NO Arguments and return value=====");
function demo(){
    console.log("Inside demo function");
    return "All Done!!!";
}
var result= demo();
console.log(result);

function square(num){
    console.log("Given number for square is:", num);
    var result= num*num;
    return result;
}
var returnValue = square(5);
console.log("Square is: ", returnValue);

