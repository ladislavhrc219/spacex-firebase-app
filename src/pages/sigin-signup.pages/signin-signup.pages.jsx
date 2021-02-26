import React from 'react';
import './signin-signup.styles.scss';
import SignIn from './../../components/sign-in/sign-in.comp';
import SignUp from '../../components/sign-up/sign-up.comp'


const SignInSignUp =()=>(
    <div className='sign-in-and-sign-up'> 
            {/* Sing In  */}


            <SignIn/>

            <SignUp/>
    </div>
);

export default SignInSignUp;

