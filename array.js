// ! Array Methods......
const array = [1,2,3,4,5,6];
const result = array.slice(1,4);

console.log(result);  // !output: [2,3,4]


// !splice method
 
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const result2 = fruits.splice(1, 1,'Malta');
console.log(fruits);  // !output: ['cherry', 'date', 'elderberry']


// !includes method
const text = 'Hello World How are you ?';
const result3 = text.includes('?');
console.log(result3);  // !output: true


// !indexOf method

const car = ['BMW', 'Mercedes', 'Audi', 'Toyota'];
const carResult = car.indexOf('Audi');
console.log(carResult);  // !output: 2


// !join method

const country = ['India', 'USA', 'Canada', 'Australia'];
const countryResult = country.join(' - ');
console.log(countryResult);  // !output: India,USA,Canada,Australia


// !concat method

let conuntry1 = ['India', 'USA', 'Canada', 'Australia'];
let conuntry2 = ['Japan', 'China', 'Russia', 'Brazil'];;
let conuntry3 = ['France', 'Germany', 'Italy', 'Spain'];

let concatresult =  [...conuntry1, ...conuntry2, ...conuntry3];
console.log(concatresult.join(" "))  // !output: ['India', 'USA', 'Canada', 'Australia', 'Japan', 'China', 'Russia', 'Brazil', 'France', 'Germany', 'Italy', 'Spain']


// ! reverse 

let reverses = [1,2,3,4,5];
let reverseresult =  reverses.reverse();
console.log(reverseresult)


// ! sort method;

let sortMethod = ["Zillur", "Anik", "Badhon"];
const sortresult = sortMethod.sort();
console.log(sortresult)


// ! sort for number Small to large number

let numbers = [23,67,1,9,2,5,7,4];
numbers.sort((a,b)=>{
    return a-b
})
console.log(numbers)

// ! forEach....

let forEach = [2,4,21,56,9,56,23];
forEach.map((n)=>{
    console.log(n)
})


// ! filter method

let filterMethod = [10,4,9,43,6,54];
let filterResult = filterMethod.filter((n)=>n%2===0 && n%3===0);
console.log(filterResult)


let everyMethod = [10,9,43,6,54];
let everyMethodResult = everyMethod.every((n)=> n > 4);
console.log(everyMethodResult)