import { useState } from "react"

import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {
  
  //List of patients
  const [patients, setPatients] = useState([])

  return (
    <div className="container mx-auto mt-20 font-sans">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          //Set patients in the form in order to have the data available in the main app
          patients={patients}
          setPatients={setPatients}
        />
        <PatientList
          patients={patients}
        />
      </div>
    </div>
  )
}

export default App
