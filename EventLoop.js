// console.log("start");
// setTimeout(function callback(){
// console.log("call back");
// },5000)
// console.log("END");

// console.log("start");
// document.getElementById("btn")
// .addEventListener("click",function cb(){
//     console.log("callback");
// });
// cb();
// console.log("END");



console.log("start");
setTimeout(function cbt(){
    console.log("CB Set timeout");
},5000)
fetch("https://www.google.com")
.then(function cbf(){
    console.log("CB Netflix");
});
console.log("END");
