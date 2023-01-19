import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes as Switch,
//   Route
// } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => setAlert(null), 1000)
  }

  const [darkModeStyle, setDarkModeStyle] = useState({
    backgroundColor: "white",
    color: "dark"
  })

  const [mode, setMode] = useState("light")

  const [textMode, setTextMode] = useState("dark")

  const toggleSwitchBlue = () => {
    if (mode === 'light') {
      setMode('dark')
      setTextMode('white')
      document.body.style.backgroundColor = "#1E3F66"
      setDarkModeStyle({
        backgroundColor: "#1E3F66",
        color: "white"
      })
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      setTextMode('dark')
      document.body.style.backgroundColor = "white"
      setDarkModeStyle({
        backgroundColor: "white",
        color: "black"
      })
      showAlert("Dark mode has been disabled", "success")
    }
  }

  const toggleSwitchGreen = () => {
    if (mode === 'light') {
      setMode('dark')
      setTextMode('white')
      document.body.style.backgroundColor = "#1d330d"
      setDarkModeStyle({
        backgroundColor: "#1d330d",
        color: "white"
      })
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      setTextMode('dark')
      document.body.style.backgroundColor = "white"
      setDarkModeStyle({
        backgroundColor: "white",
        color: "black"
      })
      showAlert("Dark mode has been disabled", "success")
    }
  }

  let disabled2 = "disabled"

  return (
    <>
    {/* <Router> */}
     <Navbar title="TextUtils" mode={mode} toggleSwitchBlue={toggleSwitchBlue} toggleSwitchGreen={toggleSwitchGreen} textMode={textMode} disabled={disabled2}/>
     <Alert alert={alert}/>
     <div className="container">
      
     {/* <Switch>
          <Route exact path="/about" element={<About/>}>
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze" darkModeStyle={darkModeStyle} showAlert={showAlert}/>}> */}
          <TextForm heading="Enter text to analyze" darkModeStyle={darkModeStyle} showAlert={showAlert}/>
          {/* </Route>
        </Switch> */}
            
     </div>
     {/* </Router>  */}
    </>
  );
}

export default App;
