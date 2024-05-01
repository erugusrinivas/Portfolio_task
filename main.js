var url='https://dummyjson.com/users';
async function getData() {
    const response = await fetch('users.json');
    const data = await response.json();
    console.log(data);
    return data;
   }
   
   function showData(data) {
    let temp = '';
    data.users.forEach(e => {
      console.log(e);
       temp += `
       <div class="section">
       <div class="container">
       <div class="row">
       <div class="col-md-6">
       <div class="card">
           <img src="${e.image}" alt="profile picture" class="card-img">
           <h1 class="card-name">${e.firstName} ${e.lastName}</h1>
           <p class="card-title">${e.university}</p>
           <p class="card-email">${e.email}</p>
           <div class="card-stats">
             <div class="stat">
               <h3>120</h3>
               <p>followers</p>
             </div>
             <div class="stat">
               <h3>300</h3>
               <p>follow</p>
             </div>
             <button class="card-btn">contact</button>
           </div>
         </div>
         </div>
         </div>
         </div>
         </div>
        `
    });
    document.getElementById('card').innerHTML = temp;
   }
   
   getData().then(data => {
    showData(data);
   });