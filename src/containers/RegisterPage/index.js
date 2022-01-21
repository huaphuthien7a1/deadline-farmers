import React from 'react';
import './style/Reset.css';
import './style/Signup.css';
import signupLogo from './src/Book lover-bro.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function RegisterPage(props) {
    return (
        <div class="signup">
            <div class="signup__left">
                <h1 class="signup__title">Sign up</h1>
                <h2 class="signup__desc">Start for free</h2>
                <form autocomplete="off" id="signup__form" class="signup__form">
                    <div class="signup__information">
                        <div class="signup__fullname">
                            <label for="fullname" class="signup__label signup__label--input">Full name</label>
                            <input type="text" name="fullname" id="fullname" class="signup__input" required/>
                        </div>
                        <div class="signup__username">
                            <label for="username" class="signup__label signup__label--input">User name</label>
                            <input type="text" name="username" id="username" class="signup__input" required/>
                        </div>
                        <div class="signup__email">
                            <label for="email" class="signup__label signup__label--input">Email</label>
                            <input type="email" name="email" id="email" class="signup__input" required/>
                        </div>
                        <div class="signup__password">
                            <label for="password" class="signup__label signup__label--input">Password</label>
                            <input type="password" name="password" id="password" class="signup__input" required/>
                        </div>
                        <div class="signup__phone">
                            <label for="phone" class="signup__label signup__label--input">Phone number</label>
                            <input type="tel" name="phone" id="phone" pattern="[0-9]{4} [0-9]{3} [0-9]{3}" class="signup__input" required/>
                        </div>
                        <div class="signup__address">
                            <label for="address" class="signup__label signup__label--input">Address</label>
                            <input type="text" name="address" id="address" class="signup__input" required/>
                        </div>
                    </div>
                    <div class="signup__term">
                        <input type="checkbox" id="checkbox" class="signup__checkbox" required/>
                        <label for="checkbox" class="signup__label signup__label--checkbox">I've read and agree with Terms of Service and Privacy Policy</label>
                    </div>
                    <button  type="submit" form="signup__form"  value="Submit" class="signup__button">
                        Sign up
                    </button>
                </form>
                <div class="signup__redirect">
                    Already have an account? 
                    <Link to="../login"> Sign in</Link>
                </div>
            </div>
            <div class="signup__right">
                <img src={signupLogo} alt="" class="signup__image"/>
            </div>
        </div>
    );
}

export default RegisterPage;