// 1. Function to check a griven string is PALINDROME or not.
// madam, dad, hello
console.log("check for PALINDROME: ");
function checkPalindrome(str) {
   
    str = str.toLowerCase();
    
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    
    return str === reversedStr;
}


console.log("if 'madam' is palindrome?: "+checkPalindrome("madam")); // true
console.log("if 'DAD' is palindrome?: "+checkPalindrome("dad"));   // true
console.log("if 'hello' is palindrome?: "+checkPalindrome("hello")); // false

// 2. To check whether string given is anagram or not.
// a. silent,listen
// b. Hello, World
// c. Such, Much.
console.log("\n check for ANAGRAMS: ");
function checkAnagram(a, b) {

    
    if (a.length !== b.length) {
        return false;
    }


    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');

    let result = (str1 === str2);
    return result;
}

// Checking the output
console.log("a.silent,listen: "+checkAnagram('silent', 'listen'));
console.log("b. Hello, World: "+checkAnagram('Hello', 'World'));
console.log("c. Such, Much.: "+checkAnagram('Such', 'Much'));
