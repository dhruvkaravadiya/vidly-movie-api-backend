//if promise is already resolved
const p = Promise.resolve({id:1});

p.then(result=>console.log(result))

//if promise already has a error
//const p = Promise.reject(new Error('Reason for Rejectionn'))
// p.then(error=>console.log(error))

