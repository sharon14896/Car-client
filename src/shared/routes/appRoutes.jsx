import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '../../components/auth/signUp';
import Home from '../../components/home';
import Layout from '../layout/client/layout';
// import Home 
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes