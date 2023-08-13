async function displayGithubDetails(){
    try{
        const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUserName);
    const commits = await getCommits(repos[1]);
    console.log(commits);
    }
    catch(err){
        console.log('Error Occured\n',err.message);
    }
}
displayGithubDetails();