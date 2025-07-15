import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {HashRouter,Routes, Route } from 'react-router-dom';

function App(props) {
  const [btntext, setbtntext] = useState("Enable Dark Mode");
  const [Navmode, setNavmode] = useState("light");
 
  const toggleMode=()=>{
    if (Navmode === 'light') {
      setNavmode('dark');
      setbtntext("Enable Light Mode");
      document.body.style.backgroundColor = "grey";
      document.title = 'MyTextControl-DarkMode'
    }
    else{
      setNavmode('light');
      setbtntext("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.title = 'MyTextControl-LightMode'
    }
}

  return (
    <>
   <HashRouter basename="/">

          <Navbar heading={"MyTextControl"} mode={Navmode} toggleMode={toggleMode} btntext={btntext} />
    <Routes>
        <Route path="/" element={<Home mode={Navmode} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
