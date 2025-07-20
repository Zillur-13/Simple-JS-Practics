
//! 1. trim()
const text = "  Hello World  ";
const text2 = text.trim();
console.log(text2.toUpperCase());

// ! Task 2: Check with startsWith and endsWith
let texts = 'Hello world How are you?';
console.log(texts.startsWith('Hello'));
console.log(texts.endsWith('you?'));


// !Task 3: Count word using split

let splists = 'I am learning java in ChatGpt' ;
console.log(splists.split(' ').length);


// ! Task4 replace
const replaces = 'Hello java';
console.log(replaces.replace('java', 'javascript'))


// ! Task5: Mask phone number
function maskPhoneNumber(lastDigits) {
    const maskedPart = "*".repeat(11 - lastDigits.length); // যতটা * দরকার
    return maskedPart + lastDigits;
  }
  
  console.log(maskPhoneNumber("7890")); // *******7890
  



// ! Task6: Check if the text includes the word
const mytext = 'Learning javascript is really fun and powerful';
const textResult = 'fun';

if(mytext.includes(textResult)){
    console.log('Yes, it includes the text');
}else{
    console.log('No, it does not include the text');
}



