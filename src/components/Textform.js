import React, {useState} from "react";

export default function Textform(props) {
  const onClickUpper=()=>{
    //console.log("Uppercase was clicked"+ text);
    let newText= text.toUpperCase();
    setText(newText)
  }
  const OnchangeUpper=(event)=>{
    //console.log("On change");
    setText(event.target.value);
  }

  //to lowercase
  const onClicklower=()=>{
    //console.log("Uppercase was clicked"+ text);
    let lowerText= text.toLowerCase();
    setText(lowerText)
  }
 
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="myBox" className="form-label">Enter text to change it in uppercase or lowercase</label>
        <textarea className="form-control" value={text} onChange={OnchangeUpper} id="myBox" rows="10"></textarea>
      </div>
      <button className="button" onClick={onClickUpper}>Convert to Uppercase</button>
      <button className="button" onClick={onClicklower}>Convert to Lowercase</button>
    </div>
    <div className="container">
      <h3>Text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").length} Minutes reading time.</p>
    </div>
    </>
    
  );
}
