// for (i = 2; i <= 10; i++) {
//         if (i % 2 == 0) {
//         document.write(i+"</br>");
//         }
//     }
// for(i=2;i<=10;i++){
//     if(i%2!=0){
//         document.write(i+"</br>");
//     }
// }
//  var i = 5;
// for (var i = 0; i < 10; i++) {
//     // some statements
    
//   }
//   console.log(i);
// var person = {fname:"John", lname:"Doe", age:25};

// //  var text = "Srinivas";
// for (var x in person) {
//   //  text += person[x];
//   console.log(person[x]);
  
// }
//  var cars={fcar:"bmw",scar:"suzuki",pcar:"maruthi"};
//  var text="benz";
// for(var x in cars){
//   text+=cars[x];
  
// }
// console.log(text);
var numbers=[1,2,3,4,5];
var text="";




//prime numers

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// Check if the number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
    // Loop through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is not a prime number`);
    }
} else {
    console.log("The number is not a prime number.");
}