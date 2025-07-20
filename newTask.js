
// let a = 20;
// let count = 0;

// if(a<22){
//     let timerId = setInterval(() => {
//         console.log(`fail not entry`)
//         count++
//         if(count == 3){
//             clearInterval(timerId)
//         }
//     }, 1000);

    
// }else{
//      let timerId = setInterval(() => {
//         console.log(`pass please login`)
//          count++

//         if(count == 3){
//             clearInterval(timerId)
//         }
//     }, 1000);
// }


// let switchStatement = 'orange';
// switch (switchStatement) {
//     case 'Orange':
//     console.log(`Hurah...! match it's orange`);
//     break;

//     case 'Watermelon':
//     console.log(`Hurah...! match it's watermelon`);
//     break;

//     case 'Apple':
//         console.log(`Match..! one apple a day keeps the doctor away..! `)
//         break;

//         default:
//         console.log("Invalid Day");
// }

// ! I Learn Javascript in regularly..........

let arryItems = [2,4,6,8,10,12];
let objeItems = {
    name : `Zillur`,
    age  : 23,
    dep  : `CSE`
}

let invalid = `This is Invalid Text`;
let arrayAndobjectItem = 'objecet';


if(arrayAndobjectItem == 'array'){
    for(let arrays of arryItems){
        console.log(arrays)
    }

}else if(arrayAndobjectItem == 'objecet'){
   for(let obje in objeItems){
    console.log(objeItems[obje])
   } 

}else{
    console.log(`${invalid}`)
}

