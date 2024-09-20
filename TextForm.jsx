import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleLoClick = ()=>{
   // console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleClearClick = ()=>{
   // console.log("Uppercase was clicked" + text)
    let newText = ''
    setText(newText)
  }
  const handleOnChange = (event)=>{
    console.log("On Change")
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
       <h1>  {props.heading}</h1>

<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?'grey':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1"onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3">
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      <h1>Your text summary</h1>
    </div>
    </>
  )
}
