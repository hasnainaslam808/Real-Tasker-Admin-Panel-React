import React from 'react';
import './login.css';
import logo from '../../assets/logo.png';
const Login = () => {
    return (
        <>
            <div className='background'>
                <div className='content-div'>
                    <div id='logo'>
                        <img src={logo} alt="logo" />
                    </div>


                    <form >
                        <label htmlFor="name">USERNAME</label><br></br>
                        <input type="text" placeholder='Your Username' /><br></br>
                        <label htmlFor="password">PASSWORD</label><br></br>
                        <input type="password" placeholder='Password' /><br></br>
                        <button>Login</button>
                    </form>

                </div>
            </div>
      
        </>
    )
}

export default Login