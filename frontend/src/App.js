import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";

import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import TasksCalendar from "./components/calendar/TasksCalendar";
import ListUsers from './components/users/ListUsers';
import AddUser from "./components/users/AddUser";
import ListTasks from "./components/tasks/ListTasks";
import NoPage from "./components/NoPage";

import './App.css';

const App = () => { 
    return (
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/">
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="calendar" element={<TasksCalendar />} />
              <Route path="users" element={<ListUsers />} />
              <Route path="adduser" element={<AddUser />} />
              <Route path="tasks" element={<ListTasks />} />
              <Route path="*" element={<NoPage />} />
              </Route >
          </Routes>
        </BrowserRouter>
    );
  }

export default App;
