import React, { useState } from 'react';
import './SettingsPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
    const [theme, setTheme] = useState('light');
    const [email, setEmail] = useState('user@example.com');
    const [password, setPassword] = useState('');
    const [language, setLanguage] = useState('mk');
    const [notifications, setNotifications] = useState(true);


    const navigate = useNavigate();
    const handleLogOut = () => {
        
        navigate('/started'); 
    };

    const handleProfileClick = () => {
        navigate('/profile'); 
    };
    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleNotificationsChange = (event) => {
        setNotifications(event.target.checked);
    };

    return (
        <div className={`settings-page ${theme}`}>
            <header className="header">
                <div className="logo">
                    <img src='logo.png' alt="Logo" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="/#">Почетна</a></li>
                        <li><a href="/my-tasks">Мои обврски</a></li>
                        <li><a href="/calendar">Календар</a></li>
                        <li><a href="/settings">Опции</a></li>
                    </ul>
                </nav>
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-bar"
                />
           <div className="header-icons">
                    <FontAwesomeIcon icon={faUser} className="icon profile-icon" title="Profile" onClick={handleProfileClick}/>
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon logout-icon" title="Logout" onClick={handleLogOut}/>
                </div>
            </header>

            <main className="main-content">
                <h1 className="page-title">Поставувања</h1>
                
                <section className="profile-settings card">
                    <h2>Профил</h2>
                    <form>
                        <div className="form-groups">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="form-input"
                                placeholder="user@example.com"
                            />
                        </div>
                        <div className="form-groups">
                            <label htmlFor="password">Лозинка:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="form-input"
                                placeholder="********"
                            />
                        </div>
                    </form>
                </section>

                <section className="theme-settings card">
                    <h2>Тема</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="theme">Избери Тема:</label>
                            <select
                                id="theme"
                                value={theme}
                                onChange={handleThemeChange}
                                className="form-select"
                            >
                                <option value="light">Светла</option>
                                <option value="dark">Темна</option>
                            </select>
                        </div>
                    </form>
                </section>

                <section className="language-settings card">
                    <h2>Јазик</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="language">Избери Јазик:</label>
                            <select
                                id="language"
                                value={language}
                                onChange={handleLanguageChange}
                                className="form-select"
                            >
                                <option value="en">Англиски</option>
                                <option value="mk">Македонски</option>
                                <option value="es">Шпански</option>
                                <option value="fr">Француски</option>
                            </select>
                        </div>
                    </form>
                </section>

                <section className="notification-settings card">
                    <h2>Уведувања</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="notifications">
                                <input
                                    type="checkbox"
                                    id="notifications"
                                    checked={notifications}
                                    onChange={handleNotificationsChange}
                                    className="form-checkbox"
                                />
                                Вклучи Уведувања
                            </label>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default SettingsPage;