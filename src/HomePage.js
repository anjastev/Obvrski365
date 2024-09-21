import React, { useState } from 'react';
import './HomePage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
    
    const navigate = useNavigate();
    
    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.addEventListener('click', function() {
                document.querySelector('.nav ul').classList.toggle('show');
            });
        }

        
        return () => {
            if (hamburger) {
                hamburger.removeEventListener('click', function() {
                    document.querySelector('.nav ul').classList.toggle('show');
                });
            }
        };
    }, []); 

    const handleLogOut = () => {
        
        navigate('/started'); 
    };

    const handleProfileClick = () => {
        navigate('/profile'); 
    };

    const [userName, setUserName] = useState('Твоето име');
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Заврши проект за веб дизајн', completed: false, priority: 'Висок', dueDate: '2024-09-07' },
        { id: 2, text: 'Прегледај нови UX трендови', completed: true, priority: 'Среден', dueDate: '2024-09-08' },
        { id: 3, text: 'Направи истражување за конкурентите', completed: false, priority: 'Низок', dueDate: '2024-09-09' },
        { id: 4, text: 'Ажурирај портфолио на Behance', completed: false, priority: 'Среден', dueDate: '2024-09-10' },
        { id: 5, text: 'Запланирај нови функции за апликацијата', completed: false, priority: 'Висок', dueDate: '2024-09-15' }
    ]);

    const [newTask, setNewTask] = useState('');
    const [newTaskPriority, setNewTaskPriority] = useState('Среден');
    const [newTaskDueDate, setNewTaskDueDate] = useState('');
    const [filter, setFilter] = useState('Сите');

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false, priority: newTaskPriority, dueDate: newTaskDueDate }]);
            setNewTask('');
            setNewTaskPriority('Среден');
            setNewTaskDueDate('');
        }
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'Сите') return true;
        if (filter === 'Завршени') return task.completed;
        if (filter === 'Незавршени') return !task.completed;
    });

    return (
        <div className="home-page">
            <header className="header">
                <div className="logo">
                    <img src='logo.png' alt="Лого"></img>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#">Почетна</a></li>
                        <li><a href="/my-tasks">Мои обврски</a></li>
                        <li><a href="/calendar">Календар</a></li>
                        <li><a href="/settings">Опции</a></li>
                    </ul>
                </nav>
                <input
                    type="text"
                    placeholder="Пребарувај..."
                    className="search-bar"
                />
                <div className="header-icons">
                    <FontAwesomeIcon icon={faUser} className="icon profile-icon" title="Profile" onClick={handleProfileClick}/>
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon logout-icon" title="Logout"  onClick={handleLogOut} />
                </div>
            </header>

            <main className="main-content">
                <section className="welcome-section">
                    <h1>Добредојде, {userName}!</h1>
                    <div className="add-task-container">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Додади нова обврска..."
                            className="task-input"
                        />
                        <select value={newTaskPriority} onChange={(e) => setNewTaskPriority(e.target.value)} className="task-priority-selects">
                            <option value="Низок">Низок Приоритет</option>
                            <option value="Среден">Среден Приоритет</option>
                            <option value="Висок">Висок Приоритет</option>
                        </select>
                        <input
                            type="date"
                            value={newTaskDueDate}
                            onChange={(e) => setNewTaskDueDate(e.target.value)}
                            className="task-date-input"
                        />
                        <button onClick={handleAddTask} className="add-task-button">Додади Нова Обврска</button>
                    </div>

                    <div className="task-filter">
                        <button onClick={() => setFilter('Сите')}>Сите</button>
                        <button onClick={() => setFilter('Завршени')}>Завршени</button>
                        <button onClick={() => setFilter('Незавршени')}>Незавршени</button>
                    </div>

                    <div className="task-preview">
            <h2>Обврски За Денес</h2>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <div className="task-text">{task.text}</div>
                        <div className={`priority-${task.priority.toLowerCase()}`}>{task.priority}</div>
                        <div className="due-date">{task.dueDate}</div>
                    </li>
                ))}
            </ul>
        </div>
                </section>
            </main>

            <footer className="footer">
                <p>© 2024 Обврски365. Сите права задржани.</p>
            </footer>
        </div>
    );
};

export default HomePage;
