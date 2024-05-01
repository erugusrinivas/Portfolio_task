// function a(){
//     console.log(b);
// }
// var b=10;
// a();
// function a(){
//     c(); 
//     function c(){
//         console.log(b);
//     }
//     var b=10;
//     a();
// }














//local scope...
//the values will be instiallize inside the loop only

// function sum(){
//     var x=100;
//     //  return x; 
//     // var y=x;//inside only we can intiallize the varible
//     console.log(y); 
//   }
//   var y=x;//in local scope we are not intiallize the varible outside.
//   sum();

// we are access the elements inside the block only.

// {
//     let x=100;
//     console.log(x); 
// }


//global scope

// function sum(){
//     console.log(y);

//     var x=y+10;
// }
// var z=100;
// console.log(z);
// y=10;

// sum();


// {
//     console.log(z);
// }


// when we decleared two elements with same name one is inside the function another one is decleared the outside the function.
//first it will takes on inside the function only.


// function test(){
//     // var x=10;
//     console.log(x)
// }
// var x=110;
// test();







// function test(){
//     console.log(x);
//     console.log(y);
// }

// var y=200;
// // console.log(x);
// {
//     var x=100;
//     console.log(x);
// }
// test();

// block level scope mainly used for the var only
// it is not useful for the let and const

// function test(){
//     console.log(a);
// }
// {
//     let a=10;
//     console.log(a);
// }
//  test();




//for loop

// for(i=1;i<=50;i++){
//     console.log("page number is"+i);
// }



//jump stmt: it consists of break,continue stmts.


// for(i=1;i<=50;i++){
//     if(i==5){
//         console.log("continue stmt is ocuured"+i);
//         continue;
//     }
//     if(i==10){
//         console.log(i);
//         break;
//     }
// }