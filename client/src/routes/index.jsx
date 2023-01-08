import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Journal from '../pages/Journal';
import Music from '../pages/Music';
import Chatroom from '../pages/Chatroom';
import Exercise from '../pages/Exercise';

function Index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/music" element={<Music />} />
                <Route path="/chatroom" element={<Chatroom />} />
                <Route path="/exercise" element={<Exercise />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
