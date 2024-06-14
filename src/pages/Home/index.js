import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.css';
import Header from '../../components/Header';

// import { BrowserRouter as  Routes, Route } from 'react-router-dom';


function Home() {
    return (
        <div>
            <Header/>
            <div>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive === true ? 'active' : ''} to="overview">概览页面</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive === true ? 'active' : ''} to="contrast">竞品对比页面</NavLink></li>
                </ul>
            </div>
            <div className="homeContent">
                <Outlet />
            </div>



        </div>
    );
}

export default Home;
