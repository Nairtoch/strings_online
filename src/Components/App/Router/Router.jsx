import { Routes, Route } from 'react-router-dom';
import { Home } from '../../Pages/Home';
import { Login } from '../../Pages/Login';

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
    )
}