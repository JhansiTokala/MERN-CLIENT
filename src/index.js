import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Navbar from './components/navbar'

import Login from './components/login';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './components/register';
import Home from './components/home';
import TodoList from './components/Todolist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
    <Navbar />
    <Home/>
    <TodoList/>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<h1>Logout</h1>}/>
    </Routes>
    </Router>
  </div>
);