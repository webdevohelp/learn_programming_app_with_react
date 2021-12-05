import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Javascript from './components/pages/Javascript';

function App() {
    return (
        <>
            <h1>Hello</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/javascript" element={<Javascript />} />
            </Routes>
        </>
    );
}

export default App;
