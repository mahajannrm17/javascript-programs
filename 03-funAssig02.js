console.log("Q1.1 to log values for the parameters of function bankDetails on same line");
function bankDetails(bankName,accountNum,location,pinCode){
    console.log("  Bank Name:"+bankName , "  Account Number:"+accountNum, "  Location:"+location,"  Pincode:"+pinCode );
    
}
bankDetails();
console.log("Q1.2--->Invoke function with the bankDetails assigned as arguments");
bankDetails("CITI Bank",3456782345,'Pune',432102);
bankDetails("Axis Bank",7856782345,'Mumbai',441202);
bankDetails("HDFC Bank",8956782345,'Pune',631202,"Open");


