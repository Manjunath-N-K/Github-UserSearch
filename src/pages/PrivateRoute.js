import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { GithubContext } from '../context/context';

const PrivateRoute = ({children,...rest}) => {
  // const {isAuthenticated,user}=useAuth0();       - Using authO is commented out 

  const {isUserLoggedIn,loggedUser} = React.useContext(GithubContext);
  const [user, setUser] = useState(loggedUser);

  const isUser=isUserLoggedIn && user;
  return <Route {...rest} 
  render={()=>{
    return isUser ? children:<Redirect to='login'></Redirect>
  }}>
    </Route>;
};


export default PrivateRoute;
