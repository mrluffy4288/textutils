import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Coverted to UpperCase", "success")
    }

    const handleOnClick2 = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Coverted to Lowercase", "success")
    }

    const handleClearText = () => {
      let newText = ""
      setText(newText)
      props.showAlert("Text Cleared", "success")
    }

    const handleCopy = () => {
      let copyText = document.getElementById('myBox')
      copyText.select()
      navigator.clipboard.writeText(copyText.value)
      props.showAlert("Copied to clipboard", "success")
    }

    const handleRemoveExtraSpace = () => {
      let newText = text.split(/[ ]+/g)
      setText(newText.join(' '))
      props.showAlert("Extra spaces removed", "success")
    }

    const handleEmailExtract = () => {
      let re = /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
      let regEmail = text.match(re)
      if (regEmail == null) {
        setText("Email not Found")
        props.showAlert("No email found in the text", "success")
      }
      else {
        let emailPush = []
        regEmail.forEach(email => {
          emailPush.push(email)
        })
        let newText = emailPush.toString()
        setText(newText.replaceAll(",", "\n"))
        props.showAlert("Email has been extracted", "success")
      }
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // text = "sd"; // wrong way
    // setText("sd"); // corect way

  return (
    <>
    <div className="container">
        <h2 style={props.darkModeStyle}>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" style={props.darkModeStyle} value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClick2}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleEmailExtract}>Email Extract</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
    </div>

    <div className="container my-3" style={props.darkModeStyle}>
      <h2>Your text summary</h2>
      <p>{text === ''?0:text.endsWith(' ')?(text.split(' ').length) - 1:(text.split(' ').length)} words and {text.length} characters</p>
      <p>{(0.00333333 * text.split(' ').length).toFixed(2)} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above inputbox to preview it here!"}</p>
    </div>
    </>
  )
}
