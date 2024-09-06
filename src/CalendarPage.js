import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import './CalendarPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CalendarPage = () => {

    const navigate = useNavigate();
    const handleLogOut = () => {
        
        navigate('/started'); 
    };
    const handleProfileClick = () => {
        navigate('/profile'); 
    };
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState({});
    const [newEvent, setNewEvent] = useState('');
    const [notes, setNotes] = useState({});


    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    
    const handleAddEvent = () => {
        const formattedDate = date.toDateString();
        setEvents({
            ...events,
            [formattedDate]: [...(events[formattedDate] || []), newEvent]
        });
        setNewEvent('');
    };

   
    const handleAddNote = () => {
        const formattedDate = date.toDateString();
        setNotes({
            ...notes,
            [formattedDate]: newNote
        });
        setNewNote('');
    };

    const [newNote, setNewNote] = useState('');

    return (
        <div className="calendar-page">
            <header className="header">
            <div className="logo">
                    <img src='logo.png'></img>
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
                    <FontAwesomeIcon icon={faUser} className="icon profile-icon" title="Profile"  onClick={handleProfileClick} />
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon logout-icon" title="Logout" onClick={handleLogOut} />
                </div>
            </header>

            <main className="main-content"> 
                 <h1>Календар</h1>
                <div className="calendar-container">
                    <Calendar
                        onChange={handleDateChange}
                        value={date}
                    />
                </div>
                <div className="selected-date">
                    <h2>Избрана Дата:</h2>
                    <p>{date.toDateString()}</p>

                    <div className="event-section">
                        <h3>Додај Настан</h3>
                        <input
                            type="text"
                            value={newEvent}
                            onChange={(e) => setNewEvent(e.target.value)}
                            placeholder="Опишете го настанот..."
                            className="event-input"
                        />
                        <button onClick={handleAddEvent} className="add-event-button">Додај Настан</button>

                        <h3>Настани на {date.toDateString()}:</h3>
                        <ul>
                            {(events[date.toDateString()] || []).map((event, index) => (
                                <li key={index} className="event-item">{event}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="note-section">
                        <h3>Додај Забелешка</h3>
                        <textarea
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            placeholder="Напишете забелешка..."
                            className="note-input"
                        />
                        <button onClick={handleAddNote} className="add-note-button">Додај Забелешка</button>

                        <h3>Забелешки на {date.toDateString()}:</h3>
                        <p>{notes[date.toDateString()] || 'Нема забелешки'}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CalendarPage;
