import React, {useState} from 'react'




export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success")
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerercase", "success")
  }
  const clearOnClick = ()=>{
    let newText = " ";
    document.getElementById("myBox").style.color = 'black';
    setText(newText)
    props.showAlert("Text cleared", "success")
  }
  const changeColorB = ()=>{

    document.getElementById("myBox").style.color = 'blue';
    
  }
  const changeColorR = ()=>{

    document.getElementById("myBox").style.color = 'red';
    
  }
  const changeColorG = ()=>{

    document.getElementById("myBox").style.color = 'green';
    
  }
  const changeColorBl = ()=>{

    document.getElementById("myBox").style.color = 'black';
    
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)

  }

  const [text, setText] = useState("");

  return (
    <>
    <div className='container' style={{color: props.mode==="light"?"black":"white"}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <label for="myBox" className="form-label"></label>
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"black":"white", color: props.mode==="light"?"black":"white"}} id="myBox" rows="8"></textarea>
        </div>
       <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to uppercase</button>
       <button className='btn btn-primary mx-3' onClick={handleLoClick} >Convert to lowercase</button>
       <button className='btn btn-primary mx-3' onClick={clearOnClick} >Clear content</button>
        
        <button className="btn btn-primary dropdown-toggle mx-3 my-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select color</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li className="black" onMouseOver={changeColorBl}>Black</li>
        <li className="red" onMouseOver={changeColorR} >Red </li>
        <li className="blue" onMouseOver={changeColorB}>Blue</li>
        <li className="green" onMouseOver={changeColorG}>Green</li>
        </ul>
        

       
      </div>
      <div className='container my-3'  style={{color: props.mode==="light"?"black":"white"}} >
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    
      </div>
      
    </>
  )
}
