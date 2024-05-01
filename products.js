var url='https://dummyjson.com/products';
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
   }
   function showData(data) {
    let temp = '';
    data.products.forEach(e => {
      console.log(e);
       temp += `
       <div class="section1">
       <div class="container">
       <div class="row">
       <div class="col-md-1">
       <div class="card">
           <img src="${e.thumbnail}"alt="profile picture" class="card-img">
           <h1 class="card-title">${e.title}</h1>
           <p class="card-description"></p>
          
            
               
             
           </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         `
        
    });
    document.getElementById('products').innerHTML = temp;
   }
   
   getData().then(data => {
    showData(data);
   });