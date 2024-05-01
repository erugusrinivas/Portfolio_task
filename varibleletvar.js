// {
//     let names="srinivas";//let will not allow the elements with the same name.
//     let names="hari";
// }
// {
//     let age=20;
//     console.log(age);//we can access the call the let varible inside the block only
// }
// // console.log(age);//we can't call varible at outside the block
// {
//     var age=30;
//     console.log(age);//we can the element at inside block and outside and outside the block by using var data type.
// }
// console.log(age);
// var x=10;
//  console.log(x);
// {
//     var x=20;
//      console.log(x);         //By using  var data type we can decleared the element at inside the block and outside block and we can easily callead it. 
// }
// var x=30;
// console.log(x);
// let age=10;

// {
//     var age=30;
//      console.log(age);
// }


// let age=20


// function test(){
//     var x=10;
//     return x
// }
// var y=x+10;
// console.log(y);


// function fun(){
//     var x=10;
//     var y=x+10;
//     console.log(y);
// }



// var x=10;
// function fun(){
//     var x=20;
//     console.log(x);
// }
// console.log(x);



// var int=20;
// var data="30";
// if(int===data){
//     console.log(int);
// }
// else{
//     console.log(data);
// }


// function test(){
//     console.log(x);
// }
// {
//     let x=90;
//     x=100;
//     console.log(x);
// }
// test();


//global scope (): global scope is mainly used var keyword we can access it any where in the js.
//Ex:

// var x=20;
// console.log(x);

//var using inside the block level

// {
//     var y=300;
// }
// console.log(y);


//var using keyword using inside the fun we can acceess inside the curly braces only({ })

// function fun(){
//     var x=500;
//     console.log(x);
// }

// fun();






// Async And await
// Async is used to returns some promise:then is used when promise becomes true.
// Await is used to wait until the promise become true then execute next line of code.
// async function test(){
// var x=await 5+7;
// console.log("inseide fun");
// return x;

// }


// console.log("outside function");

// var res=test();
//  res.then(function(data){
//     console.log(data);
// })

//await is used to wait until the promise becomes true then it will excute the next line of code.
// async function test(){
//     var x=await 5+7;
//     console.log("inside fun");
//     return x;
// }
// test();
// console.log("outside fun");     
// var res=test();
// res.then (function(sum){
//     console.log(sum);
// })   


// this:Using this is used to specified the current object.
// In JavaScript,this refers to the current object in which the function is being executed.
// If a function is called as a method of an object,this will refer to that object.
// if a function is called outside any object,this will refer to the window or global object.
// var person={
//     name:"srinivas",
//     age:23,
//     Email:'Srinivas@gmail.com',
//     getUserName:function (){
//         uname="xyz"
//        return `hlo Mr.${this.name} and your email is:${this.Email} and username is:${uname}`
//     }
// }
// console.log(person.getUserName());


// const personal_details={
//     fname:"erugu",
//     lname:"srinivas",
//     mobilenum:7815867946,
//    userName: function num(){
//         uname="xyz"
//         return `ur firstName is: ${this.fname}and your last Name is:${this.lname}`
//     }

// }
// console.log(personal_details.userName());

// document.querySelectorAll('.first');

// Shallow Copy:shallow copy is more efficient in terms of pert

// const obj={
//     name:"srinivas",
//     age:23,
//     city:"blr"
// }
// obj1=obj
// obj1.age=29;
// console.log(obj1);
// console.log(obj);
// // Shallow copy


// // Deep copy:when u change the copied obj it does not effect to the originginal obj by using spread operator..
// const person={
//     name:"Srinivas",
//     age:29,
//     city:"Blr",
//     pin:1234,
// }
// person1={...person}
// person1.age=35,
// console.log(person1);
// console.log(person);



  function countCharacters(str){
    charCounts={};
    for(i=0;i<str.length;i++){
       const currentChar=str[i];
        if(charCounts[currentChar]){
            charCounts[currentChar]++;
        }
        else{
            charCounts[currentChar]=1
        }
        
        }
        for(const char in charCounts){
            console.log(`Character ${char} total Char${charCounts[char]}`);
    }
}
const inputString="Hello world";
countCharacters(inputString);


function checkpallindrom(string) {
    var len=string.length
    for(i=0;i<str.len/2;i++){
        if(string[i]!==string[len-1-i]){
            return 'is not a pallindrom'
        }
        else{
            return 'is a pallindrom'
        }
    }
}
let string=prompt("enter a string")
console.log(checkpallindrom(string));