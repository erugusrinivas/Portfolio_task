//forin LOOp:for inloop is used in objects as specifiying as the keys.
//Ex:
// var obj={
//     name:"John",
//     age:25,
//     city:"New York",
//     Address:{
//         pin:524126,
//         state:"Ap",
//         country:"India"
//     } 
// }
// console.log(obj);
// for( var x in obj){
    // console.log(x);
//     console.log(`mr. ${x}: ${obj[x]} ${obj.Address.pin} ${obj.Address.state}`);
// }
//In strings forIn is used to specified as each character
// var Str="srinivas";
// for(x in Str){
//     console.log(Str[x]);
// }

// In Arrays forIn is used to specified as Index values.
//Ex:
// var arr=[10,20,30,40,50,60,70];
// for(var res in arr){
//     console.log(res);
// }

// for OF: for Of loop mainly used to denoted as values only.
// var obj={
//     name:'srinivas',
//     age:25,
//     city:"blr",
//     Address:{
//         pin:524126,
//         country:"india",
//         state:"Ap"
//     }
// }
// for(var x in obj){
//     console.log(x);
//     console.log(`${obj.name}`);
// }

//for of loop is mainly used to array's only and it will be mainly denoted as values.
// var arr=[];
// arr[0]=5;
// arr[99]=99;
// for(var res of arr){
//     console.log(res);
// }



//map():map method is used to creates a new array based on existing array.
//it does not modify the original arry length it just modify the elements inside the array. based on return statement

// var arr=[10,20,30,40,50,60,70]
// var res=arr.map((ele,id,arr)=>{
//     console.log(ele,id,arr);
//     return ele * ele;
// })
// console.log(res);


// var arr=[10,22,33,41,55,63]
// var res=arr.filter((digi)=>{
  
//     return digi%2==0;

// });
// console.log(res);
// var arr=[5,1,3,2,6];

//  var res=arr.filter((x)=>{
//     console.log(x);
//     return x%2==0;
// });
//  console.log(res);


//filter():filter method is used to filter the elements based on the condition.
//if condition 
// var arr=[1,2,3,4,5,6,7,8,9];
// var res=arr.filter((x)=>{
//     return x>5;
// })
// console.log(res);

// let arr=[10,20,30,40,50];
// let res=arr.filter((x)=>{
//     return x>20;
// })
// console.log(res);


//reduce(); reduce method is used to reduce the array into single value.
//reduce passes two arguments one is accumlator(intial vaue) another one is current(ele)or(next value).
// var arr=[10,20,30,40,50]
// var sum=arr.reduce((accum,currnt)=>{
// var orgin=accum-currnt;
// console.log(accum);
// return orgin;
// })
// console.log(sum);

//map():map method is used to creates new array based on the return stmt 
//it doesnot modify the original array length it just modify the array elem based on the return stmt.
//Ex:
// var arr=[
//     {
//         name:"John",
//         age:28,
//     },
//     {
//         name:"Rahul",
//         age:25,
//     },
//     {
//         name:"David",
//         age:22,
//     }
// ]
// var sum=arr.map((ele,ind,arr)=>{
//     return ele.name;

// })
// console.log(sum);

// var arr1=[
//     {
//     name:"maha",
//     marks:500,

// },
// {
//     name:'sara',
//     marks:320,
// },
// {
//     name:"amaz",
//     marks:470,
// },
// {
//     name:"srinivas",
//     marks:595,
// }
// ]
// var marks=arr1.filter((ele,indx,arr)=>{
//     return ele.marks>=500;
// })
// console.log(marks);

//reduce method(): reduce method is used to reduce an array into single element.
//reduce method(): reduce method contains two elements one is accum and anothwr one currnt


// var list=[10,20,30,40,50]
// var res=list.reduce((accum,currnt,Index,arr)=>{
//     var sum=accum+currnt
   
//     if(Index==list.length-1){
//         return sum/2;
//     }
//     else{
//         return sum;
//     }
// })
// console.log(res);


//forEach(): forEach method calls a function for each element in an array.
//forEach():forEach method doesnot excutes the empty array elements
// var arr=[10,20,30,40,50];
// var res=arr.forEach((temp,index,arr)=>{
//     console.log(temp);
// })
//forEach ():forEach method calls a fnction forEach element in an array.
//forEach():forEach method doesnot excutes for empty elements.
//  var salaries=[1000,5000,2000,6000,9000]
//   salaries.forEach((slary,index)=>{
//     var increment=slary/10;
//     salaries[index]=slary+increment
//   })
//   console.log(salaries);



//   var a=10;
//   function fun(){
//     console.log(this.a);
//   }
//   fun();

  // document.getElementById("btn").onclick = function(){
  //   console.log(this);
  // }
  // document.getElementById("btn").onclick=this.Style.backgroundcolor="blue";

  var obj={
   fname:"Erugu",
   lName:"srinivas",
   Age:"23",
   fullName:function fun(){
    return this.fname +" "+this.lName;
   }
   
  }
 obj.fullName();

var x=30;
setInterval(function(){
console.log(x)
},3000)