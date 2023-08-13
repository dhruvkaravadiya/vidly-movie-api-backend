async function getCustomerDetalis(){
    try{
    const customer = await getCustomer(2);
    console.log('Customer : ',customer);
    if(customer.isGold){
       const topmovies = await getTopMovies();
       console.log('Top Movies : ',topmovies);
       await sendEmail(customer.email,topmovies);
    }
    }
    catch(err){
        console.log('Error Occured while getting Customer Details\n',err.message)
    }
}
getCustomerDetalis();
// getCustomer(2, (customer) => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });
const movielist = [
  { id: 1, name: "Mosh Hamedani", isGold: true, email: "moshhamadani@gmail.com" },
  { id: 2, name: "Dhruv Karavadiya", isGold: true, email: "karavadiadhruv22@gmail.com" },
];
// function getCustomer(id, callback) {
//   setTimeout(() => {
//     const foundObject = movielist.find(movie => movie.id == id);
//     callback(foundObject);
//   }, 4000);
// }
// function getTopMovies(callback) {
//   setTimeout(() => {
//     callback(["movie1", "movie2"]);
//   }, 4000);
// }
// function sendEmail(email, movies, callback) {
//   setTimeout(() => {
//     callback();
//   }, 4000);
// }


function getCustomer(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const foundObject = movielist.find(movie => movie.id == id);
            resolve(foundObject);
          }, 4000);
    }   
    );
  }
  function getTopMovies() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(["movie1", "movie2"]);
          }, 4000);
    });
  }
  function sendEmail(email, movies) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
          }, 4000);
          console.log('Email Sent to ',email);
    });
  }
  