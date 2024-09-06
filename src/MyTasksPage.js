import React, { useState } from 'react';
import './MyTasksPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MyTasksPage = () => {

    const navigate = useNavigate();
    const handleLogOut = () => {
        
        navigate('/started'); 
    };

    const handleProfileClick = () => {
        navigate('/profile'); 
    };


    const [tasks, setTasks] = useState([
        { id: 1, text: 'Заврши проект', completed: false, priority: 'High', dueDate: '2024-09-07' },
        { id: 2, text: 'Изврши тестирање', completed: true, priority: 'Medium', dueDate: '2024-09-08' },
        { id: 3, text: 'Прати емаил', completed: false, priority: 'Low', dueDate: '2024-09-09' },
        { id: 4, text: 'Подготви извештај', completed: false, priority: 'High', dueDate: '2024-09-10' },
        { id: 5, text: 'Одржи состанок', completed: true, priority: 'Medium', dueDate: '2024-09-11' }
    ]);
    
    const [newTask, setNewTask] = useState('');
    const [newTaskPriority, setNewTaskPriority] = useState('Medium');
    const [newTaskDueDate, setNewTaskDueDate] = useState('');
    const [filter, setFilter] = useState('All');

    const handleAddTask = () => {
        if (newTask.trim() === '' || newTaskDueDate === '') return;
        const newTaskObj = {
            id: tasks.length + 1,
            text: newTask,
            completed: false,
            priority: newTaskPriority,
            dueDate: newTaskDueDate
        };
        setTasks([...tasks, newTaskObj]);
        setNewTask('');
        setNewTaskPriority('Medium');
        setNewTaskDueDate('');
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleEditTask = (id, text) => {
        
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const completedTasksCount = tasks.filter(task => task.completed).length;
    const totalTasksCount = tasks.length;
    const taskCompletionPercentage = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;

    const filteredTasks = filter === 'All'
        ? tasks
        : filter === 'Completed'
        ? tasks.filter(task => task.completed)
        : tasks.filter(task => !task.completed);

    return (
        <div className="my-tasks-page">
            
            <header className="header">
                <div className="logo">
                    <img src='logo.png' alt="logo" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="/#">Почетна</a></li>
                        <li><a href="/my-tasks">Мои обврски</a></li>
                        <li><a href="/calendar">Календар</a></li>
                        <li><a href="/settings">Опции</a></li>
                    </ul>
                </nav>
                <input type="text" placeholder="Пребарај..." className="search-bar" />
                <div className="header-icons">
                    <FontAwesomeIcon icon={faUser} className="icon profile-icon" title="Profile" onClick={handleProfileClick}/>
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon logout-icon" title="Logout" onClick={handleLogOut} />
                </div>
            </header>

        
            <div className="progress-container">
                <span className='napredok'>Напредок: {completedTasksCount}/{totalTasksCount}</span>
                <div className="progress-bar" style={{ width: `${taskCompletionPercentage}%` }}></div>
            </div>

           
            <main className="main-content">
                <h1>Мои Задачи</h1>
                <div className="add-task-container">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Додај нова задача..."
                        className="task-input"
                    />
                    <select
                        value={newTaskPriority}
                        onChange={(e) => setNewTaskPriority(e.target.value)}
                        className="task-priority-select"
                    >
                        <option value="Low">Низок Приоритет</option>
                        <option value="Medium">Среден Приоритет</option>
                        <option value="High">Висок Приоритет</option>
                    </select>
                    <input
                        type="date"
                        value={newTaskDueDate}
                        onChange={(e) => setNewTaskDueDate(e.target.value)}
                        className="task-date-input"
                    />
                    <button onClick={handleAddTask} className="add-task-button">Додај Задача</button>
                </div>

                
                <div className="task-filter">
                    <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>Сите</button>
                    <button onClick={() => setFilter('Completed')} className={filter === 'Completed' ? 'active' : ''}>Завршени</button>
                    <button onClick={() => setFilter('Incomplete')} className={filter === 'Incomplete' ? 'active' : ''}>Незавршени</button>
                </div>

               
                <div className="task-list">
                    <ul>
                        {filteredTasks.map(task => (
                            <li key={task.id} className={task.completed ? 'completed' : ''}>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(task.id)}
                                />
                                <div className="task-text">{task.text}</div>
                                <span className={`priority-${task.priority.toLowerCase()}`}>{task.priority}</span>
                                <div className="due-date">{task.dueDate}</div>
                                <button onClick={() => handleEditTask(task.id, task.text)} className="edit-task-button">Уреди</button>
                                <button onClick={() => handleDeleteTask(task.id)} className="delete-task-button">Избриши</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default MyTasksPage;
