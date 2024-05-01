// mathFunction:  mathfunction is used perform as mathmatical functions.
// mathmatical functions are built-in functions.

//example like as:
//math.pi:3.14.
//math.E:its based an eulers formula the value is 2.74
//math methods : those are classified as 
// 1.sign,2.abs,3.pow,4.squre,5.min,6.max,7.round,8.ceil,9.floor,10.log,11.random,12.trunc.

//1.sign
// document.writeln(Math.sign(-8)+"<br>");
// document.writeln(Math.sign(8)+"<br>");
// document.writeln(Math.sign("a")+"<br>");
//2.abs
// document.writeln(Math.abs(8)+"<br>");
// document.writeln(Math.abs(-10)+"<br>");

//3.sqrt:to find the square root of a number.

// document.writeln(Math.sqrt(64)+"<br>");
// document.writeln(Math.sqrt(9)+"<br>");
//pow:its used to squaring the two elements instead of intiallizing the elements into the paranthesis in parameters.
//ex:(2,3) as 2^3; the first element is base and second element is top.

// document.write(Math.pow(2,3)+"<br>");
// document.write(Math.pow(4,4)+"<br>");

//min():it used to specified as to find the minimum value of an array
//ex:
// var arr=[10,7,1,9,20];
// console.log(Math.min(...arr));
// //...a its specifed as spread operator.

// //max(): it used to finding as maximum number ina given array
// //ex:
// var arr=[10,7,1,9,20]
// console.log(Math.max(...arr));


// //round(): it used to determines as to get the nearest number
// //ex:if you mention 0.1-4 decimal numbers takes as left side number only
// //if you mention 0.5-9 decimal number takes as next number.
//  console.log(Math.round(5.4));
// console.log(Math.round(6.7));

// //floor()method:it used to specied as to remove rigth side decimal value and  makes to provide the output as left side number only.
// //ex:
// console.log(Math.floor(6.9));

// //ceil: its used to taking as next number only.
// //ex:
// console.log(Math.ceil(6.4));

// //trunc():method is used to delete the decimal number.

// //Ex:
// console.log(Math.trunc(699.9));

// //random: random()method to get the values from 0t1 only and not 1 the value present only form o to 0.9.
//  console.log(Math.random());

// //random()*10:if i want elements from 0 to 10 i want to multiply the elements with 10 only it gives elements from 0 to 9.99 only.
// console.log(Math.random()*10);

// //using random()*10 to  get the only integer number then i use floo()method it used to delete the factional number only diplays the  integer number.

// //Ex:
// console.log(Math.floor(Math.random()*20));

// //log:it used to get the log number 
// //ex: if i give log2 it provides as a log number of 2
// // the default log number is 'e'=>its used to returns as 2.14 only
// //ex: if i give log2(4):it means how many times to get 4 value by using log2 '2' is used to specified as base value
// // log2(10): to get the output as ://5 because to get 10 means we have to iterate the value on 2* 2* 2* 2* 2* 5 times of iteration then only we get 10 as output.

// console.log(Math.log2(16));


// otp creation

// var otp="";
// for(i=0;i<=5;i++){
//     otp=otp+Math.floor(Math.random()*10)

    
// }
// setTimeout(()=>{
// document.write("your otp is:"+otp)
// },1000)

var otp="";
for(i=0;i<=5;i++){
    otp=otp+Math.floor(Math.random()*10)
}
intervalId=setInterval(()=>{
    document.write("YOUR OTP IS:"+otp )
    clearInterval(intervalId)
},1000)