import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layout/client/layout'
// import Home 
const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          dasads
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes