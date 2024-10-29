import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard.tsx'; // 'dashboard.tsx' ফাইলের পাথ
import './index.css'; // 'index.css' ফাইলের পাথ

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);
