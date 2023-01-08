import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Music from './Music';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
