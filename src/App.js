import React from 'react';
import logo from './GriffonLogo.jpg';
import './App.css';
import ReactDOM from 'react-dom';


function register(){
  ReactDOM.render(<SignUp />, document.getElementById('root'));
}

function LoginScreen(){
  ReactDOM.render(<App />, document.getElementById('root'));
}

function ToMainScreen(){
  ReactDOM.render(<MainScreen />, document.getElementById('root'));
}


function MainScreen(){
  return(
      <div className="App">
          <div className="Secretary">
            
          </div>
          <div className="Items"> 
          Hello There!
          </div>
      </div>
    );
}

function SignUp(){
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome Back Commander!
          <div className="LoginData">
            <div>
              Username:
              <input className="LoginInput" name="username" type="text"/>
            </div>
            <div>
              Password: 
              <input className="LoginInput" name="contraseña" type="password"/>
            </div>
            <div className='Buttons'>
              <button className="LoginButton" onClick={ToMainScreen}>Log In</button>
              <button className="LoginButton" onClick={register}>Create Account</button>
            </div>
          </div>
          
      </header>
      
    </div>
  );
}

export default App;
