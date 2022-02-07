import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'

// import './App.css';
import Rosenblatt from './components/pages/Rosenblatt';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/rosenblatt' element={<Rosenblatt/>}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;