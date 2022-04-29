import { Route, Routes } from 'react-router-dom'

import Actor from '../pages/actor/Actor'
import Home from '../pages/home/Home'
import NotFound from '../pages/not-found/NotFound'

const AppRouter = () => {
  return (
    <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="actor" element={<Actor />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default AppRouter;