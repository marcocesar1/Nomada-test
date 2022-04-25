import { Route, Routes } from 'react-router-dom';

import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';

import './App.css';
import './assets/styles/App.scss';
import NotFound from './pages/not-found/NotFound';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="detail" element={<Detail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App