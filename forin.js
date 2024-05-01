// var person={
//     username:"srinivas",
//     Age:25,
//     city:'ka',
//     Activestatus:true,
//     Adress:{
//         city:'blur',
//         pincodecode:2133,
//         state:'ka',
//     }
// }
// console.log(person);
// for(var x in person){
//      console.log(x);//it display propertys.
//      console.log(x,person[x]);
//  }

// var str="srinivas";
// for(var x in str){
//     console.log(str[x]);
// }

// var arr=[];
// for(k in arr){
//     console.log(k);
// }


//for Of
// var nums=[];
// nums[1]=1;
// nums[99]=9;
// // for(var values of nums){
// //     console.log(values);

// // }
// // console.log(nums);
// for(var x of nums){
//     console.log(x);
// }
// for(var y in nums){
//     console.log(y);
// }


//for each() method:
//its used to get the each element ina separate way.
//

//ex:
// var salaries=[2000,5000,6000,1000]
// salaries.forEach((salary,index,salaries)=>{
// console.log(salary);
// console.log(index);
// console.log(salaries);
// })
// for each

var salaries=[20000,50000,60000,10000]

salaries.forEach(function nums(salary,index,salaries){

    var increment=salary/10;
    salaries[index]=salary+increment
})
console.log(salaries);


//namedfunction


// var salaries=[1000,2000,3000,4000,5000]

// salaries.forEach(function sal(salary,index,salaries){
//     console.log(salary);
//     console.log(index);
//     console.log(salaries);
// })

//incrementing salaries on 10%;
// var salaries=[1000,2000,3000,4000,5000]
// salaries.forEach(function sal(salary,index,salaries){
//     increment=salary/10;
//     salaries[index]= salary+increment;
//     console.log(salary);
//     console.log(index);
// })
// console.log(salaries);
// console.log(index);



//for in elements

// var personl_details={   //its an object it will be used to inside the block of code and it contains key value pairs
//       user_name:"srinivas",
//       user_age:25,
//       mobile_num:7815867946,
//       Address:{
//         city:"bnglr",
//         country:"india",
//         pin:12345,
//       }
//                                                                                        //           =>propertys and values
// }
// for(x in personl_details){
//     console.log(x,personl_details[x]);  //arrayname [x] it used to specified (or) gives as values of an array
// }
///    for in :it is used to specified as keys only in an objects.
// for in: it used to specified in arrays as index values.
//for in:it used speciefied in strings as characters.


//using object and call with the function

// var obj={
//     user_name:"srinivas",
//     age:25,
//     city:'bnglr',
//     Address:{
//         user_name:"maha",
//          city:"ntp",
//         pin:1234,
//         state:'KA',

//     },
//     getuserData:function(){
//         return `welcome mr.${this.user_name} he is from :${this.Address.city} temporary Adress from :${this.city} ${this.user_name}`
//     }
// }
// // console.log(obj.user_name,obj.age);
// getData=obj.getuserData();
// console.log(getData)












// var obj={
//     user_name:"srinivas",
//     age:25,
//     city:'bnglr',
//     city:"Nlr",
//     Address:{
//         user_name:"maha",
//          city:"ntp",
//         pin:1234,
//         state:'KA',

//     },

// getuserData:function(){
//     return `he is mr. ${this.user_name} he is from:${obj.city} age of:${this.age} user_name:${obj.Address.user_name}`
// }
// }
// userdata=obj.getuserData();
// console.log(userdata);



//while condition :it used to iterate condition  when is to be true.
//it is used to be stop the condition when the condition bcms false.
// i=10;
// while(i>0){
//     console.log(i);
//     i--;
// }
// console.log(i);


// i=1

// while(i<10){
//  console.log(i);
// i++;
// }
// console.log(i);


// i=10;
// while(i>0){
//     console.log("hello",i);
//     i--;
// }


//Do while

// i=10;

// do{
//     console.log("hello",i);
//     i++
// }while(i<5)


// i=0;
// do{
//     console.log("hlo",i);
//     i++
// }while(i<10)



// var str = {
//     fuser_name: "Srinivas",
//     luser_name: "Erugu",
//     age: 24,
//     Adress: {
//         city: "blr",
//         pin: 123344,
//         state: 'KA',
//     },


//     getuserData: function () {
//         return ` mr. ${this.fuser_name}${this.luser_name} your Age is-${this.age} your Adress is:${this.Adress.city} pin: ${this.Adress.pin} state: ${this.Adress.state}`
//     }
// }
// userdata = str.getuserData();
// console.log(userdata);





// var obj = {
//     user_name: "srinivas",
//     age: 25,
//     city: 'bnglr',
//     city: "Nlr",
//     Address: {
//         user_name: "maha",
//         city: "ntp",
//         pin: 1234,
//         state: 'KA',

//     },

//     getuserData: function () {
//         return `he is mr. ${this.user_name} he is from:${obj.city} age of:${this.age} user_name:${obj.Address.user_name}`
//     }
// }
// userdata = obj.getuserData();
// console.log(userdata);



//object :object isa real world entity run time environment

// var align={
//     name:"navin",
//     tech:"software",
//     work_exp:4,
// }
// console.log(align.name,align.tech,align.work_exp);
// console.log(align.tech);


//using function

// var align = {
//     name: "navin",
//     tech: "software",
//     work_exp: 4,
//     ph_no: 7815867946,
//     Address: {
//         city: 'blr',
//         pin: '517644',
//         state: 'KA',

//     },
//     getmydata: function () {
//         return `my name is:${this.name} technowledge is: ${this.tech} total work experience is: ${this.work_exp}   PHNO:${this.ph_no} my Adress:${this.Address.city} pin:${this.Address.pin} state:${this.Address.state}`
//     }

// }
// details = align.getmydata();
// console.log(details);
// // getuserData: function () {
// //         return `he is mr. ${this.user_name} he is from:${obj.city} age of:${this.age} user_name:${obj.Address.user_name}`
// //     }
// // }
// // userdata = obj.getuserData();
// // console.log(userdata);


// // for(i=0;i<100;i++){
// //     if(i%2==0){
// //         console.log("even num:"+i)
// //     }
// //     // else{
// //     //     console.log("not a even:"+i);
// //     // }
// // }

// //  a=[1,2,3,4,5]
// //  b=[1,2,3,4,5]
// // console.log(a===b);



// //map()method

// // var arr=[10,20,30,40,50]
// // var res=arr.map(()=>{
// //     return 8;


// // })
// // console.log(res);


// // filter method is used to filter the elements based on the condition .
// //if the condition is true then only it will used to create new array.
// // if the condition is false it will returns to display empty curly braces.

// //ex:

// // let arr = [10, 20, 30, 40, 50]

// // let res = arr.filter((x) => x>40) 
// // console.log(res);
    
// // let arr = [5,1,3,2,6];
// // function isEven(x){
// //     return x%2===0
// // }
// // var output=arr.filter(isEven);
// // console.log(output);

// // var arr=[5,1,3,2,6];

// // var res=arr.filter((x)=>{
// //     // console.log(x);
// //     return x%2==0;
// // });
// // console.log(res);


// var arr=[5,10,30,1,8]
// var res=arr.filter((x)=>{
//     return x>5;
// })
// console.log(res);



// //by using loop to finding sum

// // var arr=[5,10,30,1,8]
// // var sum=0;
// // function findsum(){
// // for(i=0;i<arr.length;i++){
// //     sum=sum+arr[i];
// // }
// // return sum;
// // }
// // console.log(findsum(arr));

// //finding maximum

// // var arr=[5,10,30,1,8]
// // max=0;
// // for(i=0;i<arr.length;i++){
// //     if(arr[i]>max){
// //         max=arr[i]
// //     }
// //     return max;
// // }
// // console.log(max);

// var users=[
//     {firstName:"srinivas",lastName:"erugu",age:24},
//     {firstName:"ramu",lastName:"singh",age:55},
//     {firstName:"raju",lastName:"roy",age:11},
//     {firstName:"raghu",lastName:"babu",age:30},

// ];
// var output=users.reduce(function(acc,currnt){
//     if(acc[currnt.age]){
//         acc[currnt.age]
//     }
// })

// var output=users.filter((x)=>{

//     {return x.lastName+x.age};
    

    
// })
// console.log(output);




// Things learned:
// 1. map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the arrar to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// 4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.
// 5. Homework:
// var users=[
//     {firstName:"srinivas",lastName:"erugu",age:24},
//     {firstName:"ramu",lastName:"singh",age:55},
//     {firstName:"raju",lastName:"roy",age:11},
//     {firstName:"raghu",lastName:"babu",age:30},

// ];
// var output = users.reduce(function(acc, curr){
//     if (curr.age < 30){
//         acc.push(curr.firstName);
//     }
//     return acc;
// }, [ ])

// console.log(output);



// var arr=[10,20,30,40,50]

// var res=arr.reduce((accu,curr)=>{
//     sum=accu+curr;
//     return sum;
    
// })
// console.log(res);


// var arr=[5,10,3,8,16]
// var res=arr.map((x)=>{
//     return 8;

// })
// console.log(res);


// var pro=arr.filter((x)=>{
//     return x%2==0;

// })
// console.log(pro);


// var age=arr.filter((x)=>{
//     return x>10;
// })
// console.log(age);


// var sum=arr.reduce((accu,curr)=>{
//     res=accu+curr;
//     return res;
// })
// console.log(sum);

// var users=[
//         {firstName:"srinivas",lastName:"erugu",age:24},
//         {firstName:"srinivas",lastName:"erugu",age:24},
//         {firstName:"ramu",lastName:"singh",age:55},
//         {firstName:"raju",lastName:"roy",age:11},
//         {firstName:"raghu",lastName:"babu",age:30},
    
//     ];
//     var output=users.reduce((accum,currnt)=>{
//         if(accum[currnt.age]){
//             accum [currnt.age]=++accum[currnt.age];

//         }
//         else{
//             accum[currnt.age]=1
//         }
//         return accum;
//     },{})
//     console.log(output);


// var str="srinivas"
// console.log(str.split('a'));
// console.log(str.length);
// console.log(str.slice(1,4));


// var users=[
//     {firstName:"srinivas",lastName:"erugu",age:24},
//     {firstName:"srinivas",lastName:"erugu",age:24},
//     {firstName:"ramu",lastName:"singh",age:55},
//     {firstName:"raju",lastName:"roy",age:11},
//     {firstName:"raghu",lastName:"babu",age:30},

// ];
// // var out=users.reduce((accum,currnt)=>{
// //     if(accum[currnt.age]){
// //         accum[currnt.age]=+accum[currnt.age]
// //     }
// //     else
// //     {
// //         accum[currnt.age]=1
// //     }
// //     return accum;
// // }
// // )
// // console.log(out);

// let new_users = [];
// users.forEach(e=>{
//     if( e.age>11) {
//         new_users.push(e)
//     }
// })
// console.log(new_users)



// //map

// var x=[10,20,30,40,50]
// var res=x.map((x)=>{
//     return 8
    
// })
// console.log(res);

// var x=[10,20,30,40,50]
//  var res=x.map((a,i,arr)=>{
//     return 100
//  })
//  console.log(res);


//  //filter

//  var x=[2,5,10,3,8]
//  var pro=x.filter((ele)=>{
//     return ele%2==0;
//  })
//  console.log(pro);

//  var x=[10,20,30,40,50]

//  var mul=x.filter((val)=>{
//     return val>10;
//  })
//  console.log(mul);


//  //reduce

//  //reduce is used when we want to reduce an array into single value(max,min,sum)
// //  reduce is used to pass two arguments one is (accumlator(intial)and cuneent (nxt value))

// var x=[10,20,30,40,50]
// var sum=x.reduce((accum,curnt)=>{
//     var rel=accum-curnt
//     return rel;
// })
// console.log(sum);

//String:string is a immutable and it contains collection of sequence of charcters.
// once we create a string we can't change it.
// string is primitive data type.

//[]array.
//() method
//{}object

//  var string ="srinivas";
//  console.log(string.charAt(5));//it used to specify the character with index number
//  console.log(string.charAt(20));

// var a="hlo grats";
// var b=new String("welcome")
// console.log(a);
// console.log(b);


// var x="java script";
// var y="srinivas";
// console.log(y.indexOf('s'));  // it will spcifys the index number of an string or(element)
// // console.log(x.lastIndexOf('scrip'));
// console.log(y.lastIndexOf('s'));
// // console.log(y.length);

// console.log(x.toUpperCase());
// console.log(x.toLowerCase());

// //concat: it used to concat mehod to concat with the  varibles.
// // x concat y

// var x="hello";
// var y="world";
// var z="welcomeTO"
// console.log(x.concat(y,z));
// //trim:it used trim (remove)spaecs from left and right only.
// var x="     srinivas ";
// console.log(x);
// console.log(x.trim());

// //split ():it used to convert one method to another method.
// //like as:string to array,string to boolean.
// // var x="srinivas";
// // console.log(x.split(""));
// // console.log(x.split());
// // console.log(x.join(""));


// var x="narayana";
// console.log(x.split(""));// it will separates the elememnts wuth commas
// console.log(x.split());//it will convert one type to another type string to another type array.

// //starts with(): it will returns on only true or false,and it wil checks the case sensitive also,
// // if the condition is true it will returns true if the condition is fasle returns false.
 
// var x="srinivas";
// console.log(x.startsWith('S'));
// console.log(x.endsWith('a'));
// console.log(x.slice(1,5));


// //sliceing:it used to slicing the element from one 

// var x="hello welcome guru";
// console.log(x.slice(1,7));
// console.log(x.charAt(7));
// console.log(x.slice(1));
// console.log(x.slice(7,1));


// var users=[
//     {firstName:"srinivas",lastName:"erugu",age:24},
//     {firstName:"ramu",lastName:"singh",age:55},
//     {firstName:"raju",lastName:"roy",age:11},
//     {firstName:"raghu",lastName:"babu",age:30},

// ];
// // var output=users.reduce(function(acc,currnt){
// //     if(acc[currnt.age]){
// //         acc[currnt.age]
// //     }
// // })

// var output=users.filter((x)=>{

//     return x.age>11;
    

    
// })
// console.log(output);


// var persons=[
//     {firstName:"srinivas",lastName:"erugu",age:25},
//     {firstName:"hari",lastName:"hell",age:10},
//     {firstName:"balaji",lastName:"muduru",age:35},
//     {firstName:"ramu",lastName:"don",age:15} 
// ]
// var users=persons.map((x)=>{
//     if (x.age>25){
//     //     x.present=true;
//     // }
//     // else{
//     //     x.notpresent=false;
//     // }
//     // return x;
   
//     return x;
//     }
// })
// console.log(users);

 



// var persons=[{firstName:"srinivas",lastName:"erugu",age:12},
//             {firstName:"sri",lastName:"dom",age:11},
//             {firstName:"vas",lastName:"kin",age:10}
// ]
// output=persons.reduce((accum,currnt)=>{
//     if(accum[currnt.age]){
//         accum[currnt.age]=++accum[currnt.age]
//     }
//     else{
//         accum[currnt.age]=1;
//     }
//     return accum;
// },{})
// console.log(output);
    


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


// programs
// function checkpallindrome(string){
// var len=string.length
// for(i=0;i<len/2;i++){
//     if(string[i]!=string[length-i-1]){
//         return 'it is a pallindrom'
//     }
// }
// return 'it is not a pallindrom'

// }
//  const string="madam";
//  console.log(checkpallindrome(string));


//  function checkpallindrom(string){
//     var len=string.length;
//     for(i=0;i<len/2;i++){
//         if(string[i]!=string[len-i-1]){
//             return'the given string not a palll';
//         }
//     }
//     return 'the given string is pall';
// }
// const string="madam";
// console.log(checkpallindrom(string));


// for(i=2;i<100;i++){
//     for(j=2;j<i;j++){
//         if(i%j==0){
//            break;
//         }
//         }
//         if(i==j){
//             console.log(i);
//         }
//     }

// // even numbers

// for(i=0;i<10;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }


const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
  };
  
  for (let key in student) {
    console.log(key + ' - ' + student[key]);
  }
  const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}
const myObject = {
    first: 'one',
    second: 'two',
  };
  
  for (const [key, value] of Object.entries(myObject)) {
    console.log(key, value);
  }
  