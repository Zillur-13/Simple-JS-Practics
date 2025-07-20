
// const numbers = [10, 21, 33, 40, 55, 66];

// const result = numbers.filter((num)=>num%2==!0)
// console.log(result)


// ! first ar sob word capital letter a convert kro...
const sentence = "javascript is really cool";
const result = sentence.split(" ").map(word=>word.charAt(0).toUpperCase()+ word.slice(1)).join(" ")
console.log(result)

// ! first ar sob word capital letter a convert use with function...
const capitalizer = (str)=>{
    return str.split(" ").map(word=>word.charAt(0).toUpperCase()+ word.slice(1)).join(" ")
}
console.log(capitalizer("i love bangladesh i wanna to visit bangladesh"))
console.log(capitalizer("programming is very easy if you understand"))