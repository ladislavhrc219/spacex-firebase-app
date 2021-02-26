import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from '../src/pages/homepage.component.jsx';
import Header from './components/header/header.component';

import SignInSignUp from './pages/sigin-signup.pages/signin-signup.pages'

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      // createUserProfileDocument(user);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          // console.log(snapShot.data());
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({currentUser:userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();

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