// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ make sure the path is correct
import './index.css';     // if you have global styles

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
