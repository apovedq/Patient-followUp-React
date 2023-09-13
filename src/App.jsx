import { useEffect, useState } from "react"

import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {
  
  //List of patients
  // Initialize patients state with data from local storage or an empty array
  
  const [patients, setPatients] = useState(() => {
    const patientList = JSON.parse(localStorage.getItem('patients')) || [];
    return patientList;
  });

  //Each patient
  const [patient, setPatient] = useState({})
  

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  // Save patient list in Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  //Delete user from patients
  const handleDeletePatient = (id) => {
    const answer = confirm('Are you sure you want to delete this client?')

    if(answer){
      const actualizedPatients = patients.filter(paciente => paciente.id !== id)
      console.log(actualizedPatients)
      setPatients(actualizedPatients)
      console.log("New patient list: ", patients)
    } else {
     alert('The patient has not been deleted')
    }

  }

  return (
    <div className="container mx-auto mt-20 font-sans">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          //Set patients in the form in order to have the data available in the main app
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          handleDeletePatient={handleDeletePatient}
        />
      </div>
    </div>
  )
}

export default App
