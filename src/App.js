import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from '../src/pages/homepage.component.jsx';
import Login from './components/directory/Test';

import Header from './components/header/header.component';


function App() {
  return (
    <div>

      <Header/>
      <Switch> 
     <Route  exact path='/' component={Homepage}/>
     <Route path='/login' component={Login}/>
     {/* <Route path="" component={}  /> */}
     </Switch>
    </div>
  );
}

export default App;
