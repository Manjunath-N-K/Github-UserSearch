import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error,LoginUser, Signin} from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Switch>
             <PrivateRoute path='/' exact >
               <Dashboard ></Dashboard>
             </PrivateRoute>
             <Route path='/login'>
                <Login   />
             </Route>
             <Route path='/loginUser'>
                <LoginUser   />
             </Route>
             <Route path='/signin'>
                <Signin  />
             </Route>
             <Route path='*'>
                <Error   />
             </Route>
             </Switch>
        </Router>
        </AuthWrapper>
     
    </div>
  );
}

export default App;
