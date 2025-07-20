// task01

const fruits = ["apple", "banana", "mango", "pineapple"];
const fruitsResult = fruits.splice(1,1,'orange','graph');
console.log(fruits)

// includes
const names = ["Anik", "badhon", "zILLUR", "Rahim"];
const toLowerCase = names.map((name)=> name.toLowerCase());
const zILLUR = toLowerCase.includes('zillur');
console.log(zILLUR)

// indexOf
const items = ["apple", "banana", "apple", "orange"];
const firstIndex = items.indexOf("apple");
const secondIndex = items.indexOf("apple",firstIndex+1)
console.log(secondIndex)

// join
const joins = ["z", "i", "l", "l", "u", "r"];
const email = joins.join("")+"@gmail.com";
console.log(email)


const first = ["Md"];
const middle = ["Zillur"];
const last = ["Rahman"];
const resultss = [...first, ...middle, ...last];
console.log(resultss)

// reverse   
const texts = 'Zillur';
const reverse = texts.split("").reverse().join("");
console.log(reverse)

// sort
const nums = [15, 2, 100, 45, 8];
const numsResult = nums.sort((a,b)=> a-b);
console.log(numsResult)


// forEach
const letters = ["a", "b", "c"];
 letters.forEach((letter,index)=>{
    console.log(` ${index}: ${letter}`)  
});


const namess = ["Anik", "Badhon", "Zillur"];
namess.map((name)=>{
    console.log("Mr. " + name)
})