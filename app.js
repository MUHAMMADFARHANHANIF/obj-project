let users = document.querySelector('#users')






function submint() {
    
const username = document.querySelector('#inputname')
const email = document.querySelector('#inputemail')
const age = document.querySelector('#inputage')
const city = document.querySelector('#inputcity')

    let obj = {
        username: username.value,
        email: email.value,
        age: age.value,
        city: city.value,
    }





let usersarray = [
    // {
    //     name: "Alice",
    //     age: 25,
    //     hobbies: ["Reading", "Painting"]
    // },
    // {
    //     name: "Bob",
    //     age: 30,
    //     hobbies: ["Playing guitar", "Cooking"]
    // },
    // {
    //     name: "Charlie",
    //     age: 22,
    //     hobbies: ["Hiking", "Photography"]
    // },
    // {
    //     name: "David",
    //     age: 28,
    //     hobbies: ["Running", "Watching movies"]
    // },
    // {
    //     name: "Ella",
    //     age: 35,
    //     hobbies: ["Traveling", "Knitting"]
    // },
    // {
    //     name: "Frank",
    //     age: 20,
    //     hobbies: ["Gaming", "Drawing"]
    // },
    // {
    //     name: "Grace",
    //     age: 27,
    //     hobbies: ["Singing", "Dancing"]
    // },
    // {
    //     name: "Hannah",
    //     age: 32,
    //     hobbies: ["Cooking", "Yoga"]
    // },
    // {
    //     name: "Ian",
    //     age: 24,
    //     hobbies: ["Playing football", "Reading"]
    // },
    // {
    //     name: "Jessica",
    //     age: 29,
    //     hobbies: ["Writing", "Cycling" , 'swimming']
    // }
];

usersarray.push(obj)
 
// for(let j = 999 ; j  < 100   00 ; j++){


for(let i = 0 ; i  < usersarray.length ; i++){
    // let hobbieslist = ''

    // let cardNo = use
    // for (let j = 0; j < usersarray[i].hobbies.length; j++) {
    //   hobbieslist.innerHTML +=  `<li>${usersarray[i].hobbies[j]}</li>`
        
    // }
    // for(let j = 0 ; i  < usersarray.length ; i++){


    // console.log(hobbieslist);
   users.innerHTML +=  `
   <div class="card" style="width: 18rem;">
   <img src="https://img.freepik.com/free-vector/creative-welcome-team-banner-corporate-hiring_1017-43282.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714608000&semt=sph" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${usersarray[i].username}</h5>

     <p class="card-text">Hamare team mein aane ke liye khushamdeed! Aapka tajurba aur josh hamare liye ahem hain 
     </p>
   </div>
   <ul class="list-group list-group-flush ">
     <li class="list-group-item bg-warning "><h3>Name [ ${usersarray[i].username}</h3></li>
     <li class="list-group-item">Age : ${usersarray[i].age} </h3></li>
     <li class="list-group-item">City : ${usersarray[i].city}</h3> </h2></li>

     <li class="list-group-item">Email : ${usersarray[i].email}</h3></li>
   </ul>
  
 </div>







    

    


    
    
     `
 console.log(usersarray.length);
     



}
 username.value =''
     email.value = ''
     age.value = ''
 city.value = ''


}

