import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './Layout'
import {
  Home,
  Careers,
  About,
  Security,
  Signin,
  Signup 
} from './components'

const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='careers' element={<Careers />} />
        <Route path='about' element={<About />} />
        <Route path='security' element={<Security />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
)