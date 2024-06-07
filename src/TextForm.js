import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpClick=()=>{
    //console.log("click" + text);
    //setText("clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Upper Case", "success")
}
const handleUpChange=(event)=>{
    setText(event.target.value);
    //console.log("changed" + text)
}
const [text,setText]=useState('Enter text here');
// setText("New text");
// console.log(text);
const handleDelete=()=>{
  setText("");
  props.showalert("Content deleted", "danger")
}
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3" >
  {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label> */}
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleUpChange} style={{backgroundColor: props.mode==='light'?'white':'grey'}}></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert</button>
<button type="button" class="btn btn-secondary mx-4" onClick={handleDelete}>Delete content</button>
    </div>
<div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>Text summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
</div>
    </> 
  )
}
