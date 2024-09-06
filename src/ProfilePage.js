import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    const [name, setName] = useState('Име на корисник');
    const [email, setEmail] = useState('user@example.com');
    const [bio, setBio] = useState('Ова е кратка биографија.');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleSave = () => {
        // Logic for saving the profile information
        alert('Профилот е зачуван!');
    };

    return (
        <div className="profile-page">
            <header className="profile-header">
                <h1>Мој Профил</h1>
            </header>
            <main className="profile-content">
                <section className="profile-info">
                    <div className="profile-picture">
                        <img src="profile-picture-placeholder.png" alt="Profile" />
                    </div>
                    <div className="profile-details">
                        <label htmlFor="name">Име:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />

                        <label htmlFor="bio">Биографија:</label>
                        <textarea
                            id="bio"
                            value={bio}
                            onChange={handleBioChange}
                        />
                    </div>
                </section>
                <button onClick={handleSave} className="save-button">Зачувај</button>
            </main>
        </div>
    );
};

export default ProfilePage;
