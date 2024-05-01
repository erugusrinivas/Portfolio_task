//synatx osf an array..
// var varible_name=new Array[]
// var courses=["java ","html","java"];
// console.log("craetion of an Array:"+courses);
//Accesing of an Array..by using index numbers written in square brackets..[]
// var courses=["java","html","css"];
// // console.log(courses[0]);
// courses[1]="java script";
// console.log(courses[1]);
// console.log(courses[10]);
// var a=new Array(5);
// a[0]=10;
// a[1]=20;
// a[2]=30;
// a[3]=40;
// a[4]=50;
// a[5]=60;
// a[6]=70;
// a[7]=80;
// a[8]=90;
// a[9]=40;
// a[11]=40;
// for(i=0;i<a.length;i++){
//     console.log(a[i]);
// }




//methods of an Array


//1.Array Length:it specifys the length of an Array
//2.Array concat
//3.Array toString
//4.pop
//5.push
//6.shift
//7.unshift
//8.join 
//9.delete
//10.slice
//11.slice
//To get the lenght ofa an Array
//it will returns the total length of an array.
//if the array length is empty it will returns 0.
var names=["hlo","grats","mrng"]
    console.log(names.length);
//2.concat() the method allows you to join array and entirely creates new array
var a=[2,3,5];
var b=[4,6,7];
console.log(a,b);
console.log("To get the a:"+a);
console.log("To get the b:"+b);
var c=a.concat (b);
console.log("TO get the C:"+c);
//To String method: it's also known as type casting.
//if you want to convert one type to another type.
//if i use string type data will be convert to int type data.
// var fruits=["banana","Apple",123]; 
// console.log(type[0]);
// var Ingridients=fruits.toString();
// console.log("before the type conversion:"+Ingridients);
// console.log(fruits.toString());
//pop()method in Array:
//it used dleting the last element ofa an Array.
var a=[1,2,3,4];
var b=[10,20,30];
console.log("inserting an element:"+a);
console.log(b);
a.pop();
console.log(a);
b.pop();
console.log(b);
a.push("hello");
console.log("After inserting an element into the a:"+a);
b.push("hi");
console.log(b);
//by using delete method we used to specific element by using index number only.
//Ex:
var names=["hlo","grats","hii"];
console.log(names);
delete names[0];
console.log(names);
//unshift:it is used  to add the element at first position and it's reverse operation of an push menthod.
var fruits=["mango","Apple","lemon"];
console.log("before unshift:"+fruits);
fruits.unshift("grap");
console.log("After applying unshift:"+fruits);
//shift method: it is used to dleting the first elemnt of an array and it's reverese operation of an pop.
var cars=["bmw","suzuki","maruthi"];
cars.shift();
console.log(cars);
//index of: it used define the each varible index number.
//ex:
var products=["santoor","lux","cintool"];
console.log(products.indexOf("lux"));
//slice method:it used to separating the elemets with commas.
var fruits=["banana","mango","apple"];
// console.log(fruits);
console.log(fruits.slice(0,3));
var scores=[1,2,3,4,5];
var deletedscores=scores.splice(0,3);
console.log(scores.splice());
console.log(scores);
console.log(deletedscores);

