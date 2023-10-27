import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import Followers from '../components/Followers';

const rootUrl = 'https://api.github.com';

const GithubContext=React.createContext();
//acess to provider and consumer

 const GithubProvider=({children})=>{
    const [GithubUser,setGithubUser]=useState(mockUser);
    const [repos,setRepos]=useState(mockRepos);
    const [followers,setFollowers]=useState(mockFollowers);
    const [isLoading,setIsLoading]=useState(false)
    const [requests,setRequest]=useState(0);
    const [error,setError]=useState({show:false,msg:''})
    const [isUserLoggedIn,setIsUserLoggedIn]=useState(false);
    const [loggedUser, setLoggedUser] = useState([])
    
    const searchGithubUser=async(user)=>{
       toggleError();
       setIsLoading(true); 
       const response=await axios(`${rootUrl}/users/${user}`)
       .catch((err)=>console.log(err));
       
       if(response){
          
          console.log(response.data);
           setGithubUser(response.data);
           const {login,followers_url}=response.data;
// axios(`${rootUrl}/users/${login}/repos?per_page=100`).then((response)=>{
//    setRepos(response.data)
// });


// axios(`${followers_url}?per_page=100`).then((response)=>{
//    setFollowers(response.data)
// });
          //repos
        
          await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`),axios(`${followers_url}?per_page=100`),])
          .then((results)=>{
             const [repos,followers]=results;
             const status='fulfilled'
             if(repos.status===status){
                setRepos(repos.value.data);
             }
             if(followers.status===status){
                setFollowers(followers.value.data);
             }
          })
          .catch(err=>console.log(err));
       }
else{
          toggleError(true,'There is no user with that username');
       }
       checkRequest();
       setIsLoading(false);
    } 







//check rate
const checkRequest=()=>{
   axios(`${rootUrl}/rate_limit`).then(({data})=>{
  let {rate:{remaining},}=data;
  setRequest(remaining);
  if(remaining===0){
     //throw eerror
toggleError(true,'sorry, u have exceeded ur hourly limit!!');
  }
   }).catch((err)=>console.log(err))
}

function toggleError(show=false,msg=''){
   setError({show,msg})
}

    useEffect(checkRequest,[])
    return (
         <GithubContext.Provider value={{
            GithubUser,
            repos,
            followers,
            requests,
            error,
            searchGithubUser,
            setGithubUser,
            loggedUser,
            setLoggedUser,
            isUserLoggedIn,
            setIsUserLoggedIn,
            isLoading}}>
            {children}
     </GithubContext.Provider>
        );
    
 };


 export {GithubContext,GithubProvider};

