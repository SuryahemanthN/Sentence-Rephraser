
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import React,{useState} from 'react';
import Alert from './Alert';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  //let greet="Good Morning"
  const [alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const [mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#0d0833';
      showalert("Dark mode turned on", "success");
    } 
    else {setmode('light');
    document.body.style.backgroundColor='white';
    showalert("Light mode turned on", "success")
    }
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path='/'element={
       <><Navbar title="Surya" mode={mode} togglemode={togglemode}/>
       <Alert alert={alert}/>
       <TextForm heading="Enter text to modify" mode={mode} showalert={showalert} />
        </>
       } /> 
       <Route path='/About'element={
       <><Navbar title="Surya" mode={mode} togglemode={togglemode}/>
       <Alert alert={alert}/>
       <About mode={mode}/>
        </>
       } /> 
      </Routes>
    </BrowserRouter>
      {/* <Navbar title="Surya" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter text to modify" mode={mode} showalert={showalert} /> */}
      {/* <About/> */}
    </>
    
  );
}

export default App;
