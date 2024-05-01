// Creation of A function...
// function add(num1,num2){
//     result=num1+num2;
//     return result;                

// }
// console.log(add(10,20));




// 2. function Expression
// now i am assigining a varible to total function is simply as function expression
// res=function product(num1,num2,num3){
//     sum=num1*num2*num3;     //just assiging a values to the sum
//     return sum;
// }
// console.log(res(10,20,30));



// types OF A Functions
// 1.Named Function.
// 2.Announmous Function.
// 3.Immidiate Invoked function Excution(IIFE).
// Arrow Function.


// 1.Named function:the Named function is same as a function definition
// Example:function keyword,function_name,arguments(parameters) will be instilliazing into the paranthesis()
// { }->its specifies like an block inside this stmt what we write those all are taken as an stmts..
// Ex:
// function sum(num1,num2){
//     add=num1+num2;
//     return add;
// }
// console.log("output is:"+sum(10,20));
// output is:30;



// 2.Anonmous Function:
// it specified as it does not contains any function name .
// without function name we can't call this function.
// we can call this function just by assigning varible to this whole function, then only we can this function.
// Example:
// var names=function(name1,name2,name3){
//     string=name1+name2+name3;
//     return string;
// }
// console.log(names("hlo"   ,"grats", "Srinivas"));
// 3.Immediately Innvoked Function Expression(IIFE).
// * its mainly used for we will get instant output.
// *it will provide more security to the code.
// *it does not useful for the code reusabiliy.
// Example:
// (function product (num1,num2){
//     result=num1*num2;
//     return result;
    
// console.log(result);
// })(2,3);
//Arrow function:it does not used specifie any function keyword and function name.
//in Arrow function we should mention ARROW (=>) compulsary.
//ex:
// var product=(num1,num2)=>{
//     var result=num1*num2;
//    return result;
// }
// console.log(product(10,5));
//forms of an Arrow function:
//1.one statement
var product=(num1,num2)=>num1+num2;
console.log(product(10,20));
//2.we have to mention only one parameter(one argument).
var product=num1=>num1*num1*num1;
 console.log(product(2));
 //3.No,parameteres.
var sum=()=>console.log("good morning");
sum();
    //(OR)
//4.underscore(_)parameter.
var product=_=>console.log("hi");
product();
