import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from '../src/pages/homepage.component.jsx';
import Header from './components/header/header.component';

import SignInSignUp from './pages/sigin-signup.pages/signin-signup.pages'

import {auth} from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state ={
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;
  //for firebase auth
  componentDidMount() {
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this. unsubscribeFromAuth();

  }

  render(){
    return (
      <div>
  
  
  
        <Header currentUser={this.state.currentUser}/>
        <Switch> 
       <Route  exact path='/' component={Homepage}/>
       <Route path='/login' component={SignInSignUp}/>
       {/* <SignInSignUp/> */}
       {/* <Route path="" component={}  /> */}
       </Switch>
      </div>
    );
  }
  
  
}

export default App;

// import Login from './components/directory/Test';