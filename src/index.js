import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login"
import Users from "./pages/Users"
import Groups from "./pages/Groups"
import Configs from "./pages/Configs"
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const treeApp = [
  { path: "/", element: <Login/> },
  { path: "/users", element: <Users/> },
  { path: "/groups", element: <Groups/> },
  { path: "/config", element: <Configs/> }
]

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      { treeApp.map(t => <Route { ...t } key={t.path} />) }
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
