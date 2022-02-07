// level {1/2/3}
// level 2
let removeEvenNumbers = (arr) => {
    let oddNumArr = arr.filter((item) => (item % 2));
    return oddNumArr;
}

console.log(removeEvenNumbers([1, 3, 4, 6, 7, 8])); //remove even numbers




// Replace all the vowels in a string with uppercase vowels
let replaceVowels = (str) => {
    let strArr = str.split("");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newArr = [];

    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i].toLowerCase())) {
            newArr.push(strArr[i].toUpperCase());
        } else {
            newArr.push(strArr[i]);
        }
    }

    return newArr.join("");

}
console.log(replaceVowels('Elie'));