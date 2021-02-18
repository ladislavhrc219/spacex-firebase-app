import React from 'react';
import {withRouter} from 'react-router-dom';

const MenuItem = ()=> (
    <div className="menu-item">
                <div className="content"> 
                    <h1 className="title"> menu item component </h1>
                    <span className="subtitle"> Space XXX </span>
     
                </div>
            </div>
);
export default withRouter(MenuItem);