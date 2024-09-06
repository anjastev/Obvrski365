import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartedPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const StartedPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(true);
    const navigate = useNavigate(); 

   
    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    const handleLogin = () => {
        if (email && password) {
            navigate('/');
        } else {
            alert('Молам внесете валиден email и лозинка.');
        }
    };

    const handleRegister = () => {
        if (email && password) {
            alert('Регистрацијата е успешна!');
            navigate('/');
        } else {
            alert('Молам внесете валиден email и лозинка.');
        }
    };

    return (
        <div className="started-pageh">
            <header className="headerh">
                <div className="logoh">
                    <img src="logonajava.png" alt="Лого" />
                </div>
            </header>

            <main className="main-contenth">
                <div className="form-container">
                    <h2 className='h2n'>{isLoginMode ? 'Најави се' : 'Регистрирај се'}</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Внеси email"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Лозинка:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Внеси лозинка"
                                className="form-input"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={isLoginMode ? handleLogin : handleRegister}
                            className="action-button"
                        >
                            {isLoginMode ? 'Најави се' : 'Регистрирај се'}
                        </button>
                    </form>
                    <p className="toggle-mode-text">
                        {isLoginMode
                            ? 'Немате профил?'
                            : 'Веќе имате профил?'}
                        <span onClick={toggleMode} className="toggle-mode-link">
                            {isLoginMode ? ' Регистрирај се' : ' Најави се'}
                        </span>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default StartedPage;
