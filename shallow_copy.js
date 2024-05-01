// const product={name:"realme"};
// console.log(product);
// product.name="redmi";
// console.log(product );

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// console.log(arr2); 
// arr2[1]=10;
// console.log(arr2);

// const arr4= [1, 2, 3];
// const arr3 = [...arr4];
// console.log(arr4); 
// arr3[2]=30;
// console.log(arr3);


//shallow copy:assiging array or object or value from one varible to another varible(it will add same memory location)
// var arr1=[9,90,80];
// var arr2=arr1;
// console.log(arr2);
// arr2[1]=50;
// console.log(arr2);

// shallow copy on object
// var obj1={
//     name:"srinivas",
//     age:25,
// }
// console.log(obj1);
// obj2=obj1,
// obj2.age=28,
// console.log(obj2);


// // shallow copy on Array's
// var arr1=[10,20,30,40,50]
// var arr2=arr1;
// console.log(arr1);
// arr2[3]=100;
// console.log(arr2);



//shallow copy:Assigning values,objects,array from one varible to another varible.
//shallow copy more efficient in terms of performance it will changes to the copyied objects it will effect to the original object.

// var object1={
//     name:"srinivas",
//     age:23,

// }
// object2=object1
// object2.age=25;
// console.log(object2);


// // Deep copy: it will stores key value pairs at different memory location's.
// // deep copy will changes the copyied object's it doesnot effects on the original objects.

// object1={
//     name:"good mrng",
//     age:23,
// }
// console.log(object1);
// object2={...object1}


// object2.age=28;
// console.log(object2);


// //freeze:in freeze we can't change the object, varible ,array once we can declared obj.freeze() it will be decleadred asa final keyword.we can't insert the data,update the data,(or) delete the data once we decleared asa obj.freeze().
// // it isa immutable
// const arr10=[10,20,30,40,50]
// // object.freeze(arr10);
// console.log(arr10);
// arr10[1]=70;
// console.log(arr10);


// const profile={
//     name:"srinivas",
//     age:23,
//     Adreess:{
//         city:"blur",
//         pin:1234
//     }

// }
// // console.log(object.name);

// console.log(profile.name);
// object.freeze(profile);
// profile.name="hari";
// console.log(profile.name);



// var arr=[10,20,30,40,50];
// console.log(arr);
// arr[1]=100;
// console.log(arr);




// setTimeout(function() {
//     alert("function called")

// },300,); 
// console.log("hello");



// setTimeout(()=>{
// alert("function calling");
// },3000);
// console.log("helo");


// var x=setTimeout(test,5000,"xyz")
//     console.log(x);
//     console.log("hello");
//     function test(name){
//         alert("hello"+name)
//     }

// let intervalid=setInterval(alert,3000,"hii"+counter);
// console.log(intervalid);
// if (counter>5){
//     clearInterval(intervalid);
// }


// function x(){
//     let i=1;
//     setTimeout(function(){
//         console.log(i,"hii");
//     },5000)

// console.log("hello");
// }
// x();



// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//         console.log(i);
//         },i*2000);
//     }
//      console.log("namastey java");   

// }
// x();


// function x() {
//     var i = 1;
//     setTimeout(function () {
//         console.log(i);
//     }, 3000);
//     console.log("hello");

// }
// x();




// function x(){
//     for(let i=1;i<=5;i++){
//                 setInterval(function(){
//                 console.log(i);
//                 },i*2000);
//             }
//              console.log("namastey java");   
        
//         }
//     x();



//set timeout method:set time out method will calls a function aftr a number of milliseconds.
// set time out method will excute only one time.
//it conatins two parameters 1.function and another one is milliseconds

// function x(){
//     i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000)
//     console.log("hello");
// }
// x();


// function x(){
   
//     setInterval(function(){
//         alert("helo");
//     },3000)
   
// }
// x();


//shallow copy: shallow copy is more efficient in trms of performance if i changed copied objects it will effects to the original object then its called shallocopy.
// var obj={
//     name:"srinivas",
//     age:23,
//     Address:{
//         city:"bglr",
//         pin:12434,
//     }
// }
// console.log(obj.Address.city);

// object2=obj;
// object2.name="hari";
// console.log(object2.name);


//Deep copy():Deep copy method will change copied object it doesnt effect on the original object
var obj={
    name:"srinivas",
    age:23,
    Address:{
        city:"bglr",
        pin:12434,
    }
}
object2=[...obj]
object2.name="manmohan";
console.log(object2);