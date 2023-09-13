import { useState, useEffect } from "react"
import Error from "./error/Error"


function Form({ patients, setPatients, patient, setPatient }) {
  
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerResidence, setOwnerResidence] = useState("");
  const [ownerNumber, setOwnerNumber] = useState("");
  const [dateReceived, setDateReceived] = useState("");
  const [hourReceived, setHourReceived] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [errorMessage, setErrorMessage] = useState(false)


  //Console logs everytime the patient state changes
  useEffect(() => {
    //Object.keys allows to check if there is anything inside
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName)
      setPetAge(patient.petAge)
      setOwnerName(patient.ownerName)
      setOwnerEmail(patient.ownerEmail)
    // setOwnerNumber(patient.ownerPhone)
      setDateReceived(patient.dateReceived)
      setHourReceived(patient.hourReceived)
      setSymptoms(patient.symptoms)
    } 
  }, [patient])


  const handleEmptyFields = () => {
    setPetName("")
    setPetAge("")
    setOwnerName("")
    setOwnerNumber("")
    setOwnerEmail("")
    setOwnerResidence("")
    setDateReceived("")
    setHourReceived("")
    setSymptoms("")
  }


  const generateId = () => {

    const random = (Math.random()*10).toString(36)

    return random

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //Checks if values are empty
    
    if ([petName,
      petAge,
      ownerName,
      ownerNumber,
      ownerEmail,
      ownerResidence,
      dateReceived,
      hourReceived,
      symptoms].includes("")) {
      console.error("There is some empty fields!")
      setErrorMessage(true)
      return;
    }
    
    //In case it is properly filled
    setErrorMessage(false)

    //Creates the new user using the function
    const newPatient = {
      "petName": petName,
      "petAge": petAge,
      "ownerName": ownerName,
      "ownerEmail": ownerEmail,
      "ownerResidence": ownerResidence,
      "dateReceived": dateReceived,
      "hourReceived": hourReceived,
      "symptoms": symptoms,
  
    }

    //Function to evaluate if is new patient or if it is editing
    if (patient.id) {
      //As the newPatient object comes without id then we assig the initial one from 
      //the "patient" state that has the complete info of the current selected to edit patient
      newPatient.id = patient.id

      //Checks if the currenEditingPatient
      const actualizedPatientList = patients.map(patientState => 
        patientState.id === patient.id ? newPatient : patientState)
      
      setPatients(actualizedPatientList)

      //Empty the state in order to not activate the if
      setPatient({})
    } else {

    //Asigns the new user to my setPatient hook from the main app
    // Gets the items from original array "patients" and add new user
      newPatient.id = generateId()
      setPatients([...patients, newPatient])
    }

    //Empty the hooks of the inputs
      handleEmptyFields()
  }
 
  return (
    //When medium size screem flexbox size would be 1/2, if larger would be 2/5
    <div className="md:w-1/2 lg:w-2/5" >
      <h1 className="font-black text-3xl text-center"> Patients follow up</h1>

      <p className="text-lg text-center"> Add a new patient {" "} 
        <span className="text-indigo-600 font-bold"> and manage them </span> </p>
      
      {/* Patient personal infomation */}

      <form className="bg-white rounded-lg p-10 my-10"
      onSubmit={(e) => e.preventDefault()}>
        
        <h3 className="text-lg font-black text-gray-700"> Patient Information</h3>

        <section className="flex flex-col xl:flex-row">

          <div className="m-5">
            <label htmlFor="name_input"
              className="block font-bold text-indigo-600"> Pet Name </label>
            <input id="name_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
          </div>

          <div className="m-5">
            <label htmlFor="age_input"
              className="block font-bold text-indigo-600"> Pet age</label>
            <input id="age_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="text"
               value={petAge}
              onChange={(e) => setPetAge(e.target.value)}
             />
          </div>

        </section>
        
        <section className="flex flex-col xl:flex-row">

          <div className="m-5">
            <label htmlFor="owner_name_input"
              className="block font-bold text-indigo-600">  Owners Name </label>
            <input id="owner_name_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>

          <div className="m-5">
            <label htmlFor="owner_phone_input"
              className="block font-bold text-indigo-600"> Owners Phone Number </label>
            <input id="owner_phone_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="text"
              placeholder="(+1)" value={ownerNumber}
              onChange={(e) => setOwnerNumber(e.target.value)}
            />
          </div>

        </section>

        <section className="flex flex-col xl:flex-row">

          <div className="m-5">
            <label htmlFor="owner_id_input"
              className="block font-bold text-indigo-600">  Owners Email </label>
            <input id="owner_id_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="email"
              placeholder="@email.com"
              value={ownerEmail}
              onChange={(e) => setOwnerEmail(e.target.value)}
            />
          </div>

          <div className="m-5">
            <label htmlFor="owner_id_residence_input"
              className="block font-bold text-indigo-600"> Owners Residence </label>
            <select className="px-6 py-3 mt-3 shadow-md border-2 border-indigo-600 rounded-lg" value={ownerResidence}
              onChange={(e) => setOwnerResidence(e.target.value)}>
              <option value="FL"> Florida </option>
              <option value="ATL"> Atlanta </option>
              <option value="NY"> New York</option>
            </select>
          </div>

        </section>

        <h3 className="text-lg font-black text-gray-700 mt-3">Appointment information</h3>

        <section className="flex flex-col xl:flex-row">

          <div className="m-5">
            <label htmlFor="appoinment_date_input"
              className="block font-bold text-indigo-600">  Date received </label>
            <input id="appoinment_date_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="date"
              value={dateReceived}
              onChange={(e) => setDateReceived(e.target.value)}
            />
          </div>

          <div className="m-5">
            <label htmlFor="appoinment_hour_input"
              className="block font-bold text-indigo-600">  Hour received </label>
            <input id="appoinment_hour_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="time"
              value={hourReceived}
              onChange={(e) => setHourReceived(e.target.value)}
            />
          </div>

        </section>

        
        
        <label htmlFor="sympthtoms_date_input"
          className="block font-bold text-indigo-600 ml-5">  Symptoms </label>
        <textarea className="ml-5 w-5/6 border-2 border-indigo-600 p-5 mt-5 rounded-lg shadow-lg" placeholder="Describe sypthomn here" value={symptoms} onChange={(e) => setSymptoms(e.target.value)}></textarea>
    
        {/* If first is true then returns after the && */}
        {errorMessage &&  <Error> Seems like there are some empty fields!</Error> }
        
        <button className="bg-indigo-600 w-full p-5 mt-5 rounded-lg shadow-lg text-white font-bold items-center hover:bg-green-500 transition-all"
          type="submit"
          onClick={handleFormSubmit}>
          {/* If patient id exist then Edit patient */}
          {patient.id ? "Edit patient" : "Add patient"}
        </button>
        
      </form>
    </div>
  )
}

export default Form