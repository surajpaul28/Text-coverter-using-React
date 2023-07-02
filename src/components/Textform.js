import React, {useState} from "react";

export default function Textform(props) {
  const onClickUpper=()=>{
    //console.log("Uppercase was clicked"+ text);
    let newText= textfirst.toUpperCase();
    setTextfirst(newText)
  }
  const OnchangeUpper=(event)=>{
    //console.log("On change");
    setTextfirst(event.target.value);
  }

  //to lowercase
  const onClicklower=()=>{
    //console.log("Uppercase was clicked"+ text);
    let lowerText= textsecond.toLowerCase();
    setTextsecond(lowerText)
  }
 
  //to lowercase
  const Onchangelower=(event)=>{
    //console.log("On change");
    setTextsecond(event.target.value);
  }
    const [textfirst, setTextfirst] = useState('Enter text here');
    const [textsecond, setTextsecond] = useState('Enter text here');
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="myBox" className="form-label">Enter text to change it in uppercase.</label>
        <textarea className="form-control" value={textfirst} onChange={OnchangeUpper} id="myBox" rows="6"></textarea>
      </div>
      <button className="button" onClick={onClickUpper}>Convert to Uppercase</button>
    <div>
    <div className="mb-3">
        <label for="myBox" className="form-label">Enter text to change it in lowercase.</label>
        <textarea className="form-control" value={textsecond} onChange={Onchangelower} id="myBox" rows="6"></textarea>
      </div>
      <button className="button" onClick={onClicklower}>Convert to Lowercase</button>
    </div>
    </div>
  );
}
