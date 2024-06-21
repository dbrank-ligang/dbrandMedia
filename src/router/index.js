import { createBrowserRouter, Navigate } from 'react-router-dom'
import Main from '../pages/main'
import Home from '../pages/Home'
// import Login from './pages/Login';
import Overview from '../pages/Overview'
import Contrast from '../pages/Contrast'

const routes =[
    {
        path: '/',
        Component: Main,
        children:[
            { //重定向
            path: '/',
            element: <Navigate to="overview" replace />
            },
            {
                path: 'home',
                Component: Home
            },
            {
                path: 'overview',
                Component: Overview
            },
            {
                path: 'contrast',
                Component: Contrast
            }
        ]
    }
]

export default createBrowserRouter(routes)