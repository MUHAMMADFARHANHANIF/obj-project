// // let users = document.querySelector('#users')

// // const username = document.querySelector('#inputname')
// // const email = document.querySelector('#inputemail')
// // const age = document.querySelector('#inputage')
// // const city = document.querySelector('#inputcity')



// // let usersarray = [
     
// // ];


// // function submint() {
    
    
// //     // usersarray = [
     
// //     // ];


    
// //     let obj = {
// //         username: username.value,
// //         email: email.value,
// //         age: age.value,
// //         city: city.value,
// //     }
    


// // usersarray.push(obj)
 



// // for(let i = 0 ; i < usersarray.length ; i++){
// // //   users.innerHTML = ""

// // //    users.innerHTML +=  `
// // //    <div class="card" style="width: 18rem;">
   

// // //    <img src="https://img.freepik.com/free-vector/creative-welcome-team-banner-corporate-hiring_1017-43282.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714608000&semt=sph" class="card-img-top" alt="...">
// // //    <div class="card-body">
// // //      <h5 class="card-title">${usersarray[i]}</h5>

// // //      <p class="card-text">Hamare team mein aane ke liye khushamdeed! Aapka tajurba aur josh hamare liye ahem hain 
// // //      </p>
// // //    </div>
// // //    <ul class="list-group list-group-flush ">
// // //      <li class="list-group-item bg-warning "><h3>Name [ ${usersarray[i].username}</h3></li>
// // //      <li class="list-group-item">Age : ${usersarray[i].age} </h3></li>
// // //      <li class="list-group-item">City : ${usersarray[i].city}</h3> </h2></li>

// // //      <li class="list-group-item">Email : ${usersarray[i].email}</h3></li>
// // //    </ul>
  
// // //  </div> `

// // console.log(usersarray);

// //  console.log(usersarray.length);
     





// // }

// // username.value =''
// // email.value = ''
// // age.value = ''
// // city.value = ''

// // // usersarray = []
// // }


// let users = document.querySelector('#users');

// const username = document.querySelector('#inputname');
// const email = document.querySelector('#inputemail');
// const age = document.querySelector('#inputage');
// const city = document.querySelector('#inputcity');

// let usersarray = [];

// function submit() {
//     let obj = {
//         username: username.value,
//         email: email.value,
//         age: age.value,
//         city: city.value,
//     };
    
//     usersarray.push(obj);

//     // Clear the input fields after submission
//     username.value = '';
//     email.value = '';
//     age.value = '';
//     city.value = '';


//     // Display the users as cards
//     displayUsers();
// }

// function displayUsers(index) {
//     users.innerHTML = ''; // Clear previous content
//     usersarray.forEach(user => {
//         users.innerHTML += `
//             <div class="card" style="width: 18rem;">
//                 <img src="https://img.freepik.com/free-vector/creative-welcome-team-banner-corporate-hiring_1017-43282.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714608000&semt=sph" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${user.username}</h5>
//                     <p class="card-text">Hamare team mein aane ke liye khushamdeed! Aapka tajurba aur josh hamare liye ahem hain</p>
//                 </div>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item bg-warning"><h3>Name: ${user.username}</h3></li>
//                     <li class="list-group-item">Age: ${user.age}</li>
//                     <li class="list-group-item">City: ${user.city}</li>
//                     <li class="list-group-item">Email: ${user.email}</li>
//                 </ul>
//             </div>
//         `;
//     });

//     // console.log(index);
// }










let users = document.querySelector('#users');

const username = document.querySelector('#inputname');
const email = document.querySelector('#inputemail');
const age = document.querySelector('#inputage');
const city = document.querySelector('#inputcity');

let usersarray = [];

function submit() {
    let obj = {
        username: username.value,
        email: email.value,
        age: age.value,
        city: city.value,
    };
    
    usersarray.push(obj);

    // Clear the input fields after submission
    username.value = '';
    email.value = '';
    age.value = '';
    city.value = '';

    // Display the users as cards
    displayUsers();
}

function displayUsers() {
    users.innerHTML = ''; // Clear previous content
    for (let i = 0; i < usersarray.length; i++) {
        let user = usersarray[i];
        users.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="https://img.freepik.com/free-vector/creative-welcome-team-banner-corporate-hiring_1017-43282.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714608000&semt=sph" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${i}</h5>
                    <p class="card-text">Hamare team mein aane ke liye khushamdeed! Aapka tajurba aur josh hamare liye ahem hain</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-warning"><h3>Name: ${user.username}</h3></li>
                    <li class="list-group-item">Age: ${user.age}</li>
                    <li class="list-group-item">City: ${user.city}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>
                <button type="submit" onclick="delet(${i})">submint</button>
            </div>

            
        `;
    }
}


function delet(index) {
console.log(usersarray[index].username);
console.log(usersarray[index].age);

// console.log(index.age);


    // const updatedVal = prompt('enter updated value');
    // usersarray.splice(index , 1 , updatedVal);


    // submit()
}
