import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import Select from './components/select'
import Multi from './components/multi'
import Difficulty from './components/difficulty'
import Qr from './components/qr'
import Ex from './components/exercise'
import { Route, Routes } from "react-router-dom";
import Vid from './components/vis'

function App(): React.ReactElement {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/select" element={<Select/>}/>
        <Route path="/multi" element={<Multi/>}/>
        <Route path="/level" element={<Difficulty/>}/> 
        <Route path="/qr" element={<Qr/>}/>
        <Route path="/ex" element={<Ex/>}/> 
        <Route path="/vis" element={<Vid/>}/>  
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
