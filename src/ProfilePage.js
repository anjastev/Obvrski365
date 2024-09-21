import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    const [name, setName] = useState('Име на корисник');
    const [email, setEmail] = useState('user@example.com');
    const [bio, setBio] = useState('Ова е кратка биографија.');
    const [location, setLocation] = useState('Скопје, Македонија');
    const [website, setWebsite] = useState('www.example.com');
    const [profilePicture, setProfilePicture] = useState('profile-picture-placeholder.png');
    const [isSaving, setIsSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');

    const handleInputChange = (setter) => (event) => setter(event.target.value);

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setSaveMessage('Профилот е зачуван!');
            setTimeout(() => setSaveMessage(''), 3000); 
        }, 1000); 
    };

    return (
        <div className="profile-page">
            <header className="profile-header">
                <h1>Мој Профил</h1>
            </header>
            <main className="profile-content">
                <section className="profile-info">
                    <div className="profile-picture">
                        <img src={profilePicture} alt="Profile" />
                        <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
                    </div>
                    <div className="profile-details">
                        <label htmlFor="name">Име:</label>
                        <input type="text" id="name" value={name} onChange={handleInputChange(setName)} />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={handleInputChange(setEmail)} />
                        <label htmlFor="bio">Биографија:</label>
                        <textarea id="bio" value={bio} onChange={handleInputChange(setBio)} maxLength={200} />
                        <span>{bio.length}/200</span>
                        <label htmlFor="location">Локација:</label>
                        <input type="text" id="location" value={location} onChange={handleInputChange(setLocation)} />
                        <label htmlFor="website">Веб-страница:</label>
                        <input type="text" id="website" value={website} onChange={handleInputChange(setWebsite)} />
                    </div>
                </section>
                <button onClick={handleSave} className="save-button">
                    {isSaving ? 'Зачувување...' : 'Зачувај'}
                </button>
                {saveMessage && <p className="save-message">{saveMessage}</p>}
            </main>
        </div>
    );
};

export default ProfilePage;
