//1. 
console.log("========function without arguments and no return value=====");
function show(){
    console.log("Inside show function");
}
function display(){
    console.log("Inside Display() function");

}
show(); //Function call/Invoke
display(); // calling function without return type and arguments...
// Q2.
console.log("Function personalDetails() with Arguments...");
function personalDetails(firstName, lastName,collegeName){
    console.log("Inside a function");
}
personalDetails();
//Q3.
console.log("Function with 3 parameters with addition performed");
function addThreeValues(a,b,c) {
  
   let result= a+b+c;
   console.log("Result ="+result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");


