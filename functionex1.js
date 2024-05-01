function sum(num1,num2,num3){
    result=num1+num2+num3;
     return result;//if u not mention this return stmt it specified asa undefined
}
console.log(sum(1,2,3));
//function expression
//if you assign whole function into one varible is called as function expresion.
//Ex:
var rel=function product(num1,num2,num3){
    result=num1*num2*num3;
     
    return result;
    
}
console.log(rel(2,2,2));
//Anonmous function: it doesnt have a function name.
//it will decleared only with function keyword.
// we can't call anounmous function directly.
//we can call function with only varible name.
//ex:
var product=function(num1,num2){
    result=num1*num2;
    return result;
}
console.log(product(2,3));
//immediately innvoked function expression.
(function product(num1,num2){
    sum=num1+num2;
    // return sum;
    console.log(sum);
})(6,8);
//Arrow function
// it doesnot have any function name and function keyword.
//Ex:
var product=(num1,num2)=>num1*num2;
console.log(product(2,3));
//forms:
//1.one staement:
var sum=num1=>num1*num1*num1;
console.log(sum(2));
//2.No argument
//ex:
 var product=()=>
 console.log("hello");
 product();
 //3.paranthesis
 var product=_=>
 console.log("hi");
 product();



