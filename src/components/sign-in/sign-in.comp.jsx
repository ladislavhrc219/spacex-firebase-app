import React from 'react';

import './sign-in.styles.scss';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''

        }

       
    }

    handleSubmit=event=>{
        event.preventDefault();

        this.setState({email:'', password:''})


    }

    handleChange = event => {
        const {value, name} =event.target;

        this.setState({ [name]: value})

    }


    render(){
        return(

            <div className="sign-in">

            <h3> I already have and account </h3>
            <span> Sign in with y e and passwrd </span>

            <form onSubmit={this.handleSubmit}> 

                <input 
                name="email" 
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                required />
                <label> Email</label>


                <input 
                name="password" 
                type="password"
                value={this.state.password} 
                onChange={this.handleChange}
                required />

                <label> Password</label>

                <input type="submit" value="submint form" />
            </form>


            </div>
        )
    }
}

export default SignIn;