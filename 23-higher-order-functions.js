function sayHello(callbacks){ //callbacks has function greet...
    console.log("hello....");
    callbacks();
    let tata=function(){
        console.log('Good Bye...');
    }
    return tata; 
}

let greet = function(){
    console.log("good evening...");

}
let result = sayHello(greet);// in greet gets function...
result();

// sayHello(greet)();