import React from 'react';
import FormInput from './../form-input/form-input.comp';
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
                 <h2> SIGN IN</h2>
            <h3> I already have and account </h3>
            <span> Sign in with y e and passwrd </span>

            <form onSubmit={this.handleSubmit}> 

                <FormInput 
                name="email" 
                type="email"
                value={this.state.email}
                label="Email" 
                handleChange={this.handleChange}
                required />
                {/* <label> Email</label> */}


                <FormInput 
                name="password" 
                type="password"
                value={this.state.email} 
                label="Password" 
                handleChange={this.handleChange}
                required />

                {/* <label> Password</label> */}

                <input type="submit" value="submint form" />
            </form>


            </div>
        )
    }
}

export default SignIn;