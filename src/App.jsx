import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ToDoList from "./ToDoList";
import About from "./About";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/todo">To-Do List</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<ToDoList />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div className="welcome-page">
            <h1>Welcome to Your To-Do List</h1>
            <p>Organize your tasks efficiently and stay productive!</p>
            <button className="start-btn"><Link to="/todo">Get Started</Link></button>
        </div>
    );
}

export default App;
