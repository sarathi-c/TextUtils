import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClrClick = ()=>{
        let newText='';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const[text,setText]=useState("");
    
  return (
    <>
    <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#535586':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s/g,'').length} characters</p>
        <p> {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}



