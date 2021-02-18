import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from '../src/pages/homepage.component.jsx';
import Header from './components/header/header.component';

import SignInSignUp from './pages/sigin-signup.pages/signin-signup.pages'

function App() {
  return (
    <div>

      <Header/>
      <Switch> 
     <Route  exact path='/' component={Homepage}/>
     <Route path='/login' component={SignInSignUp}/>
     {/* <SignInSignUp/> */}
     {/* <Route path="" component={}  /> */}
     </Switch>
    </div>
  );
}

export default App;

// import Login from './components/directory/Test';