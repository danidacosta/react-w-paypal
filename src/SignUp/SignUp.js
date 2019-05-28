import React from 'react';
import ReactDOM from 'react-dom';



export default function SignUp(){
    return(
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            Griffon and Kruyger Needs you, Join Now!
            <div className="LoginData">
              <div>
                Username:
                <input className="LoginInput" name="username" type="text"/>
              </div>
              <div>
                Email:
                <input className="LoginInput" name="email" type="text"/>
              </div>
              <div>
                Password:
                <input className="LoginInput" name="password" type="password"/>
              </div>
              <div>
                Confirm Password:
                <input className="LoginInput" name="password" type="password"/>
              </div>
              <div className='Buttons'>
                <button className="LoginButton" onClick={LoginScreen}>Go Back</button>
                <button className="LoginButton" onClick={LoginScreen}>Confirm Creation</button>
              </div>
            </div>
        </header>
      </div>
    );
  }
  