//to create a promise ,use a promise constructor  , which takes a function as a argument
//this function is called Executor Function , and it takes two function as arguments  , Resolve ,Reject , 
//resolve is used to fullfill the promise , 
//reject is used to reject promise with an error
// const p = new Promise((resolve,reject)=>{
//      setTimeout(() => {
//         //Promise State : Pending => Fulfilled / Resolved
//         resolve(1);
//         //Promise State : Pending => Rejected
//         reject(new Error('Cannot Resolve'));
//      }, '2000');
// });

// p   
//     .then(result=>console.log('Result : ',result))
//     .catch(err=>console.log('Error :',err.message));

console.log('Before');
// getUser(1)
//     //if the function inside the .then() returns a value , then we will wrap it in a promise
//     .then(user=>getRepositories(user.gitHubUserName))
//     .then(repos=>getCommits(repos))
//     .then(commits=>console.log('Commits :',commits))
//     .catch(err=>console.log('Error Occured',err.message));
//using asynce await
console.log('After');
// async function displayGithubDetails(){
//     try{
//         const user = await getUser(1);
//     const repos = await getRepositories(user.gitHubUserName);
//     const commits = await getCommits(repos[1]);
//     console.log(commits);
//     }
//     catch(err){
//         console.log('Error Occured\n',err.message);
//     }
// }
// displayGithubDetails();
//using Promise
function getUser(id,name){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log('Reading user from database');
           resolve({id:id,gitHubUserName:name});
       },2100);
   });
}

function getRepositories(username){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log('Calling Github Repositories API...')
            resolve(['repo1','repo2','repo3']);
            reject('Cannot get Repositories');
        },2000);
   });
}

function getCommits(username){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log('Calling Github Commits API...');
           resolve(['Commit 1' , 'Commit 2' ,'Commit 3']);
       });
   });
   
}