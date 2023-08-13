console.log('Before');

// CALLBACK HELL  
// Complex Nested Structured Function
// with so many nested Callback Functions
getUser(1,'Dhruv',function(user){
    console.log('User ID : '+user.id+'\nUserName : '+user.gitHubUserName);
    getRepositories(user.gitHubUserName,(repos)=>{
        console.log('Repositories : '+repos)
    });
});

console.log('After')
// using Callback

function getUser(id,name,callback){
    setTimeout(()=>{
        console.log('Reading user from database');
        callback({id:id , gitHubUserName:name});
    });
}
function getRepositories(username,callback){
    setTimeout(()=>{
        console.log('Calling Github Repositories API...')
        callback(['repo1','repo2','repo3']);
    },2000);
}

function getCommits(username , callback){
    setTimeout(()=>{
        console.log('Calling Github Commits API...');
        callback(['Commit 1' , 'Commit 2' ,'Commit 3']);
    });
}
