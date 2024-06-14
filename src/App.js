// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Contrast from './pages/Contrast';


function App() {
  return (
    <Router>
      <div>

        {/* 配置路由 */}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/" element={<Home />}>
            <Route index element={<Contrast/>}></Route>
            <Route path="/overview" element={<Overview/>}></Route>
            <Route path="/contrast" element={<Contrast/>}></Route>
          </Route>
        </Routes>
      </div>

    </Router>

  );
}

export default App;
