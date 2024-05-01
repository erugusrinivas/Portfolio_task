//Even NUmbers
// 0 1,2,3,4,5,6,7,8,9,10
var i=[0,1,2,3,4,5,6,7,8,9,10,]
// for(i=0;i<=10;i++){
//     if(i%2==0){
//         console.log("The even number is "+i);
//     }
// }

// for(i=0;i<=10;i++){
//     if(i%2!==0){
//         console.log("The odd number is "+i)
//     }
// }

//prime NUmber:A number which is divisibel by 1 and itself is prime number.
// prime Number cant be divisible with 0 if prime divisible by 0 condition becomes false 
// prime number must divisible by 1 or both numbers becomes equal A==B then only it will becomes primenumber

// so we can say that a number is prime if it's not divisble by any other number apart from 1 & itself.
for(i=2;i<100;i++){
    for(j=2;j<i;j++){
        if(i%j==0){
            break;
        }
    }
        if(i==j){
            console.log(i);
        } 
        }
       

