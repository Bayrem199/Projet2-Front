import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [lightOn, setLightOn] = useState(false); // État pour activer/désactiver la lumière
  const navigate = useNavigate();

  const toggleLight = () => {
    setLightOn(!lightOn); // Bascule entre ON et OFF
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Redirige vers la page d'inscription
  };

  return (
    <div className="login-container" style={{ background: 'linear-gradient(180deg, #000000, #434343)', animation: 'fadeIn 1s' }}>
      {lightOn && <div className="light-beam"></div>}
      <div className={`login-box ${lightOn ? 'light-on' : ''}`}>
        <h1 className="login-title">Login</h1>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" />
            <span className="icon">📧</span>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
            <span className="icon">🔒</span>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#forgot">Forgot Password?</a>
          </div>
          <button className="login-button">Login</button>
        </form>
        <p className="register">
          Don't have an account?{" "}
          <span onClick={handleRegisterClick} className="register-link red-text">
            Register
          </span>
        </p>
      </div>
      <div className="switch" onClick={toggleLight}>
        <div className="switch-button">{lightOn ? "OFF" : "ON"}</div>
      </div>
    </div>
  );
};

export default Login;
