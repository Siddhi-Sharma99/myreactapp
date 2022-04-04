
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode, setMode] =useState("light");
  const [alert, setAlert]= useState(null);

  const toggleMode = ()=>{
    if(mode==="light"){
        
      setMode("dark")
      document.body.style.backgroundColor = "#05284c";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled", "success");
    }
     
    }
   const showAlert = (message, type)=>{
     setAlert(
       {
         msg: message,
         type: type
       }
     )
     setTimeout(() => {
       setAlert(null)
     }, 2000);
   }
      
  
  return (
    <> 
      {/* <Router> */}
      <Navbar title="ContentConverter" mode={mode} toggleMode={toggleMode} />
      
      <Alert alert={alert}/>
      <div className='container  my-3'>
        <TextForm heading = "Enter the text below." showAlert={showAlert} mode={mode} />  
      </div>
      {/* <Routes> */}
          {/* <Route path="/About" element={<AboutUs mode={mode}/>}> */}
          {/* <AboutUs mode={mode}/>  */}
           
          {/* </Route> */}
          {/* <Route path="/" element={<TextForm heading = "Enter the text below." showAlert={showAlert} mode={mode} />}> */}
          
            
          {/* </Route> */}
        {/* </Routes> */}
        
        
       
     
      {/* </Router> */}

    </>
  ); 
}

export default App;
