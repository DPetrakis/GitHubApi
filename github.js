class GitHub {

 constructor(){
   this.repos_count = 5;
   this.repos_sort = 'created: asc';
 }

 async getUser(user){
    const headers = {
        "Authorization": 'Token  734fe1198aceedc6071ef8b08e11a3b55cb42e78 '
    }

    const profileResponse = await fetch('https://api.github.com/users/' + user,{
        "method": "GET",
        "headers" : headers
    }); 

    

    const repoResponse = await fetch('https://api.github.com/users/' + user + '/repos?per_page=' + this.repos_count + '&sort=' + this.repos_sort,{
        "method": "GET",
        "headers" : headers
    }); 
    
    const profileData = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
        profile :profileData,
        repos : repos

    }

}



}
