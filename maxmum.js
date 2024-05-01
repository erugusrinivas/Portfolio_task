//1. var arr=[2,10,12,5,6,8];
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if (arr[i]<arr[j]){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);



// finding on maximum number


// var arr=[70,65,3,5,8,9,95,22,10]
// var max=arr[0];
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>=max){
//         max=arr[i]
//     }
// }
// console.log(max);



// var arr=[10,20,30,90,40,22]
// var max=arr[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]>=max){
//        max=arr[i]
//     }
// }
// console.log("to get the max num:\t"+max);




// To get the minimum number



//2. var arr=[70,65,3,5,8,9,95,22,2,10];
// var min=arr[0];
// for(i=0;i<arr.length;i++){
//     if(arr[i]<min){
//        min=arr[i];
//     }

// }
// console.log(min);




// var arr=[70,65,3,5,8,9,95,22,10];
// var min=arr[0];
// for(i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i]

//     }
// }
//  console.log("To get the minimum value is:"+min);












// finding the avg of an array


//3. var grades=[70,65,3,5,8,9,95,22,10];
// // grades.length=30;
// var count=0;
// var total=0;
// for(var i=0;i<grades.length;i++){
//     if(grades[i] !==undefined){
//         count++;
//         total+=grades[i]
//     }
// }
// var avg=total/count;
// console.log(avg);









// var averageArray=[70,65,3,5,8,9,95,22,10];
// var averageArrayNum=0;
// for(i=0;i<averageArray.length;i++){
//     averageArrayNum +=averageArray[i] /averageArray.length;
// }    
// console.log(averageArrayNum);




//prime numbers
//4. for(var i=2;i<=100;i++){
//     for(var j=2;j<i;j++){
//         if(i%j==0){
//             break;
//         }
//     }
//         if(i==j){
//             console.log(i);
//         }

// }

// exist an array or not?

// 5.var arr=[1,2,9,7,5];
// var num=10;
// for(var i=0; i<arr.length; i++){
//     if(arr[i]==num){
//         console.log(i);
//         break;
//     }
//    else if(i==arr.length-1){
//     console.log("value is not exists");
//    }
// } 


// var string=prompt("pls enter a valid details");
// console.log(string);


//6. var str="madam";
// for(i=0;i<str.length;i--){
//     if(i>str){
//     }
// }
// console.log(str);



// var k=["1bhk","2bhk","3bhk"]
// for(i=0;i<k.length;i++){
//     console.log(k[i]);
// }



// var arr=[1,2,4,5,6,3,4,7,8,6,5,4];

// for(var i=0;i<=arr.length;i++){
//     for(var j=0;j<=arr.length;j++){
//         if(i!=j){
//             if(arr[i]===arr[j]){
//                 arr.splice(j,1)
//             }
//         }
//     }
// }
// console.log(arr);




//Pallindrome

//6.
//  var str_name="madam";
// var str_length=str_name.length;
// var pallindrome=true;
// for(i=0;i<str_length/2;i++){
//     if(str_name[i]!=str_name[str_length-1-i]){
//     pallindrome=false;
//     }
// }
// console.log(pallindrome);



// for(i=2;i<=100;i++){
//     for(j=2;j<i;j++){
//         if(i%j==0){
//            break; 
//         }  
//     }
//     if(i==j){
//         console.log(i);   
//     }
// }

// // for(i=2;i<=100;i++){
// //     if(i%2!=0){
// //         console.log(i);
// //     }
// }

// excercise.../////////////////////////////////////////////////////////////////////


//maximum number



// 1.var arr=[10,20,30,60,80,90];
// var max=arr[0];
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>=max){
//     max=arr[i];
//     }
// }
// console.log(max);


//2.Ascending given elements

// var arr=[20,30,3,7,50,60];
// for( var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[i]<rr[j]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// document.write(arr);



//average Number

// var arr=[10,20,3,5,40,60];
// sum=0;
// for(var i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// avg=sum/arr.length;
// console.log(avg);


//checking the value is present or not
// var arr=[10,20,30,40,50];
// var checkvalue=30;
// var present=false;
// for(i=0;i<arr.length;i++){
//     if(arr[i]===checkvalue){
//         present=true;
//         break;
//     }
// }
// console.log(present);


//pallindrome
// var str_name="srinivas";
// var str_len=str_name.length;
// pallindrome="true";
// for(i=0;i<str_len/2;i++){
//     if(str_name[i]!=[str_name-i-1]){
//         pallindrome="false";
//     }
// }
// console.log(pallindrome);


//checking value
// var arr=[10,20,30,40,50];
// var checking=100;
// var value=false;
// for(i=0;i<arr.length;i++){
//     if(arr[i]==checking){
//         value=true;
//     }
// }
// console.log(value);

//maximum number
// var arr=[2,10,12,20,4];
// var max=arr[0];
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>max){
//        var max=arr[i];
//     }
// }
// document.write(max);


//minimum Number

// var arr=[10,2,40,5,9,60,70];
// var min=arr[0];
// for(i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }
// document.write(min);

//Ascending order....
// var arr=[10,20,40,9,80];
// for(var i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// document.write(arr);


//descending order

// var arr=[10,30,40,3,4,80,11];
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// document.write(arr);


//prime numbers

// for(i=2;i<=100;i++){
//     for(j=2;j<i;j++){
//         if(i%j==0){
//             break;
//         }
//     }
//     if(i==j){
//         document.write(i);
//     }
// }


//Average Number
//  var num=[10,20,5,8,1,9];
//  var sum=num[0];
//  for(i=0;i<num.length;i++){
//     sum+=num[i];
//     var avg=sum/num.length
//  }
//  document.write(avg);


//Given string is present or not?

// var stri="Srinivas";
// var checkstri="d";
// present=false;
// for(i=0;i<stri.length;i++){
//     if(stri[i]===checkstri){
//         present=true;
//         break;
//     }
// }
// console.log(present);


//pallindrome

// var str_name="abba";
// var str_len=str_name.length;
// pallindrome="false";
// for(var i=0;i<str_len/2;i++){
//     if(str_name[i]==str_name[str_len-1-i]){
//         pallindrome="true";
//     }
// }
// document.write(pallindrome);


//Average Number
//  var num=[10,20,8,1,9];
//  var sum=num[0];
//  for(i=0;i<num.length;i++){
//     sum+=num[i];
//     var avg=sum/num.length
//  }
//  console.log(avg);

// var align = {
//    user_name: "hello",
//    tesh: JSON,
//    laptop: {
//       cpu: "core i5",
//       ram: 4,
//       brand: "lenovo",
//    }
// }
// for (var key in align) {
//    console.log(key);
// }


// console.log(align);



// <h1>this is heading</h1>
// setTimeout(function() {
//     alert("function called")
// },3000); 
// console.log("hello");



// var arr=[10,3,5,6,9]
// for(i=0;i<arr.length;i++){
//    for(j=i+1;j<arr.length;j++){
//       if(arr[i]>arr[j]){
//          temp=arr[i]
//          arr[i]=arr[j]
//          arr[j]=temp
//       }
//    }

// }
// console.log(arr);




// for(i=0;i<=10;i++){
//    console.log(i);
// }

// for(i=10;i>0;i--){
//    console.log(i);
// }

// for(i=0;i<10;i++){
//    if(i%2==0){
//       console.log(i);
//    }
// }

// for(i=0;i<10;i++){
//    if(i%2!==0){
//       console.log(i);
//    }
// }

for (i = 2; i <= 100; i++) {
   for (j = 2; j < i; j++) {
      if (i % j == 0) {
         break;
      }
   }
   if (i == j) {
    console.log(i)
   }
}

var arr=[10,20,30,40,50]
sum=0;
for(i=0;i<arr.length;i++){
sum+=arr[i]
}
var avg=sum/arr.length
console.log(avg);


var arr=[10,20,30,40,50]
var min=arr[0]
for(i=0;i<arr.length;i++){
if(arr[i]<=min){
min=arr[i]
}
}
console.log("Minimum value is:"+min)
var arr=[10,20,40,19]
var max=arr[0]
for(i=0;i<arr.length;i++){
if(arr[i]>=max){
max=arr[i]
}
}
console.log(max);


var arr=[10,20,3,5,7]
for(i=0;i<arr.length;i++){
for(j=i+1;j<arr.length;j++){
if(arr[i]>=arr[j]){
temp=arr[i];
arr[i]=arr[j];
arr[j]=temp;
}
}
}
console.log(arr);

arr=[10,2,5,9,20]
for(i=0;i<arr.length;i++){
for(j=i+1;j<arr.length;j++){
if(arr[i]<=arr[j]){
temp=arr[i];
arr[i]=arr[j]
arr[j]=temp;
}
}
}
console.log(arr);


var str="HLO Guru javascr"
var res=str.split('')
console.log(res);
var res=res.join('')
console.log(res);

var arr=[10,20,30,40,50]
var max=arr[0]
for(i=0;i<arr.length;i++){
if(arr[i]>=max){
max=arr[i]
}
}
console.log(max);