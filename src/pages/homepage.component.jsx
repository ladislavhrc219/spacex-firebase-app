import React from 'react';
import {withRouter} from 'react-router-dom';
import Directory from '../components/directory/directory.comp'
import MenuItem from './../components/menu-item/menu-item.component'
import Linkbar from '../components/linkbar/Linkbar';
// import Header from './../components/header/header.component';

import './homepage.styles.scss';


const Homepage = () => (
    <div className="homepage">
        <div className="directory-menu">
          
            {/* <div className="menu-item">
                <div className="content"> 
                    <h1 className="title">
                        SPACE     
                     </h1>
     
                </div>
            </div> */}
        
        {/* <Header/> */}
           
           <Linkbar/>
           <MenuItem/>

            <Directory/>







        </div>
    </div> 

    

);
export default withRouter(Homepage);