import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MyTasksPage from './MyTasksPage';
import CalendarPage from './CalendarPage'; 
import SettingsPage from './SettingsPage'; 
import StartedPage from './StartedPage';
import './App.css'; 
import ProfilePage from './ProfilePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/started" element={<StartedPage />} />
      <Route path="/my-tasks" element={<MyTasksPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
