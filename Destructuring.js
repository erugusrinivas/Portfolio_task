// obj :in object wew can decleared with the const keyword.
// in object contains key value pairs.
// we can call the obect with obj name.propnme.
// Nested obj:insed an object we can pass another objet as an property.
// const person={
//     name:"srinivas",
//     age:23,
//     city:"bglr",
//     Address:{
//         pin:517644,
//         state:"KA",


//     }
// }
// let {name,age,city,Address:{pin}}=person
// // console.log(name,age,Address.pin,city);
// console.log(pin);


// // 1.Destructuring is used to unpack to unpack the array of elements
// var arr=[10,"hello",true];
// let [a,b,c]=arr;
// console.log(a);
// console.log(b);

// 1.Dest:Was introduced in ES6 version.
// 2.Destructring :Destructring make it used extract only what is needed.

// THis is old processing of accesing old array elements
// var arr=[10,20,30,40,50]
// var first=arr[0];
// var second=arr[1];
// var third=arr[2];
// console.log(first);

// // Now we can use used the destructuring concept to extract value from array or Unpack value from array
// // Now we are using shorthand property.
// // we give ,(comma)to extract next value.
// var[f1,,f3]=arr;
// console.log(f1,f3);



// Now we are taking one object..
// const obj={
//     name:"Srinivas",
//     age:23,
//     city:"blr",
//     Adreess:{
//         pin:517644,
// //         State:"KA"
// //     }
// // }
// // let{nam="nam",age,city,Adreess:{pin}}=obj;
// // console.log(nam);
// // name="hlo"
// // name:nam



// var arr=[10,20,30,40,50]
// var[a,...b]=arr
// console.log(b);

// // Destructuring->TO unpack each elememnt.
// // Destructuring make it easy to exactract only wht is needed.....
// // Destructuring:It was introduce in Es6 version.
// // This concept is depends upons the arrays and objects.
// // in arrays it used to unpack the values  with using [].
// // in objects it used to unpack the properties using {}.
// // Destructuring is also knkown as short hand Notation, in a single line we can acess it....(values or propertys)
// // Here is the old way of assigning Aray of items to a varible.
// // Ex:
// var arr=[10,20,3,40,50]
// var f1=arr[0]
// console.log(f1);

// // here we use new  way of assigning of Array items to a varible..
// // Ex:
// var arr=[10,20,30,40,50]
// var[f1,f2,f3]=arr
// var [x,...y]=arr
// console.log(f1);
// console.log(f2);
// // or ineed only for the certain elemnts
// var[f1,,f3]=arr
// console.log(f3);


// // objects:using Destructring it is used unpack the properties from an object..
// // ex:
// const obj={
//     name:"xyz",
//     age:23,
//     pin:517644,
//     Address:{
//         city:"BLR",
//         State:"KA",

//     }
// }
// // in normal we can call the object as
// console.log(obj.name);

// // No, we are destructuring to unpack the propertys
// // in objects we use corect property name other wise it will display  undefined as keyword
// var{name,age,pin}=obj
// console.log(name);
// console.log(nam);
// // if we want to access the nemsted object that tyme we use 
// var {nam="srinivas",age,pin,Address:{city}}=obj
// console.log(nam);


//concat()
// let a=["a","b","c"];
// let b=["d","e"]
// console.log(a.concat(b));

// //toString()
// var arr=["apple","banana","orange"]
// console.log(arr.toString(arr()));
// fun();
// function fun(a,b){
//      x=a+b;
//     return x;
// }
// console.log(fun(10,20));


// 1.Restparameter:restparameter is the last parameter int he function.
// Rest->Reamining
// Rest parameter is used to group the separaterd elements in an array.
// Symbol of rest parameter  is three dots ("...") .
// It allows to pass any number of arguments to the function.
// In this case you don't know how many argument user going to send so you have to
// take all those values into one variable using rest parameter.

// EX:
// function add(b,c,...a){
//     console.log(b,c,a);
    
// }
// add(10,20,30,40,50)


// // We can use single varible to assign multiple values...using rest operator


// // Spreadoperator:spread operator is used to unpack the elements..(it is used separated the group of elements)
// // spread operator is used copy all the parts of existing array or object  into new arrray or object...
// // Ex:
// var data=[10,20,30,40,50]
// var mydata=[60,70,80,90]
// var newdata=[...data,...mydata]
// console.log(newdata);

// // Object:
// // Here we can copy all the parts of existing object to new object..
// const vehicle={
//    name:"suzuki",
//    model:"mustung",
//    color:"black"

// }
// let updatedvehicle={
//     type:"car",
//     year:2021,
//     color:"yellow"
// }
// const myUpdatedvehicle={...vehicle,...updatedvehicle};
// console.log(myUpdatedvehicle);


// var count=0;
// var count=count+1


// setInterval(()=>{
//     console.log(count++);
    
// },1000)



// Strct Mode:1.Strict mode  is a special mode,
            // 2.  it is used to provide security of a code
            // 3.the strict mode is used to avoid unforseen erorrs
            // We can declared the strict mode in single coats or double coats.
            // We decleared the strict mode before its code intiallization.
            // Ex1:
                // "use strict"
                // num="Hello";
                // console.log(num);  
                // o/p:ERORR
            // here if your not mentioning any var, let, const keyword it will not allows to excute..
            // using string mode you can must and should use the keywords...
            // Ex2:
            // "use strict"
        //     "use strict"

        //   num1="world"
            
        //     console.log(num1);

            // Ex3:for example your not mentioned any strict key before the code intiallization..its not allowed to use
            
            
            //  n="hiii"
            
            // console.log(n);

            // Ex4:
            // "use strict"

            // let isELigibleForvoting=false;
            // let isFullAge=true;

            // if(isFullAge){
            //     isELigibleforvoting=true;
            // }
            // console.log(isELigibleForvoting);
        
            // here we are not using any 'strict mode'it will show an Wrong output...
            // the devoloper doesnt know whether he getting corect o/p or not...
            // using strict mode to find unknown erors easily...
                
            // "use strict"
            // let isEligibleForvoting=false
            // let isFullAgeage=true;

            // if(isFullAgeage){
            //     isEligibleForvoting=true;
            // }
            // console.log(isEligibleForvoting);