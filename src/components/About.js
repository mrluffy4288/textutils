import React, {useState} from 'react'

export default function About() {

    const [btnText, setBtntext] = useState("Enable Dark Mode")

    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })

    const toggledarkMode = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setBtntext("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtntext("Enable Dark Mode")
        }
    }

  return (
    <div className="container my-3" style={myStyle}>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item my-3">
            <h2 className="accordion-header" id="headingOne" style={myStyle}>
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About US
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <div className="container my-3">
            <button onClick={toggledarkMode} type="button" className="btn btn-primary">{btnText}</button>
        </div>
    </div>
  )
}
