let url = window.location.href;
console.log(url);
url = new URL(url);
let id_user = url.searchParams.get("id");

var data_url = `https://dummyjson.com/products/${id_user}`;
const getData = async()=>{
    var data = await fetch(data_url);
    var mydata = await data.json();
    console.log(mydata);
}
getData();