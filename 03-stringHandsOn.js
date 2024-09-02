console.log("To use string template to log Output");

function stringHandsOn() {
    const str = "  Hey you are doing good, keep it up  ";
    console.log(`Given String ==> ${str}`); // use of Backticks
    console.log(`1. Print the string as it is on console---> ${str}`);
    console.log(`2. Calculate length of the string= ${str.length}`);
    const trimmedStr = str.trim();
    console.log(`3. Removing leading and trailing extra spaces and then count string length ---> ${trimmedStr.length}`);
    const originalLength = str.length;
    const trimStr = str.trim();
    const trimmedLength = trimStr.length;
    const extraSpacesCount = originalLength - trimmedLength;
    console.log(`4. To print total number of EXTRA SPACES count that is removed in step-3---> ${extraSpacesCount}`);
    const firstChar = trimmedStr.charAt(0);
    const lastChar = trimmedStr.charAt(trimmedStr.length - 1);
    console.log(`5. First and Last character on same line after trim() in step-3---> ${firstChar} and ${lastChar}`);
    const wordCount = trimmedStr.split(' ').filter(word => word !== '').length;
    console.log(`6. Total words available in string after step3---> ${wordCount}`);    
    const indexOfGood = str.indexOf("good");
    console.log(`7. Index of word "good" from given string = ${indexOfGood} `);
    const subString_22 = str.substring(22);
    console.log(`8. Using substring(),print substring strating from index 22 = ${subString_22}`);
    
    const endsWithUp = trimmedStr.endsWith("up");

    console.log(`9. CHECK: if sting ends with word "up" after step3---> ${endsWithUp} ,it ends with "up"`);
    const startsWithHey = trimmedStr.startsWith("Hey");

    console.log(`10. CHECK: if string starts with the word "Hey" after trimming in step 3 ---> ${startsWithHey}`);
}

 stringHandsOn();