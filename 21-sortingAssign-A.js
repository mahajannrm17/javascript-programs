//1. Reverse Array
const arrayRollnumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(arrayRollnumbers);
const revRoll= arrayRollnumbers.reverse();
console.log(revRoll);
//2. sorting without custom logic!
const sortRoll= arrayRollnumbers.sort();
console.log(sortRoll);
//3. sorting in ascending order with custom logic.
const customRoll= arrayRollnumbers.sort((n1,n2) => {
    return n1>n2 ? 1 : -1 ;

});
console.log(customRoll);
//4. Greatest number from Array...
function greatestElement(arrayRollnumbers) {
    if (arrayRollnumbers.length === 0) {
        console.log("Array is empty");
    }

    return arrayRollnumbers.reduce(function (a, b) {
        return (a > b) ? a : b});

}
console.log("Greatest number from array is " + greatestElement(arrayRollnumbers));
// 5. Smallest number from array...
function minNum() {
    
    const minNum = Math.min(...arrayRollnumbers);
    console.log("Smallest number from array is:" + minNum);
    
}
minNum();
//6. Remove Duplicates from array...
function removeDuplicates(arrayRollnumbers) {
return arrayRollnumbers.filter((item,
  index) => arrayRollnumbers.indexOf(item) === index);
}
console.log("After removing Duplicate elements from array: "+removeDuplicates(arrayRollnumbers));
