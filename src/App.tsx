import { Route, Routes } from 'react-router-dom';

import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';

import './App.css';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="detail" element={<Detail />} />
            </Routes>
        </div>
    )
}

export default App