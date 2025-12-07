import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import Login from '../pages/Login';
import Register from '../pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../app/features/authSlice';
import { useEffect } from 'react';

function Mainroutes() {
  const dispatch = useDispatch();

  // ✅ useSelector at top level
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* If user exists, redirect to Home, else show Login */}
      <Route
        path='/login'
        element={user ? <Navigate to="/" /> : <Login />}
      />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default Mainroutes;
