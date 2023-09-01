import { useState } from "react"
import Client from "./Client"

function PatientList({ patients }) {
  

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h1 className="font-black text-3xl text-center">Current List</h1>
      <p className="text-lg text-center"> Manage your {" "}
        <span className="text-indigo-600 font-bold"> Patients and Appointments</span></p>
      
      <div className="h-screen  mt-10 md:overflow-y-scroll">

        <h1 className="text-center text-3xl font-bold text-red-500"> {patients.length > 0 ? "" : "No patients registered yet!" }</h1>

        {
           patients ? patients.map((patient, index) => {
            return <Client key={index} petName={patient.petName}
              ownerName={patient.ownerName}
              ownerPhone={patient.ownerPhone}
              ownerMail={patient.ownerEmail}
              date={patient.dateReceived}
              hour={patient.hourReceived}
              symptoms={patient.symptoms}
              id={patient.id}
            />
           }) : console.log("Nothing to show yet")
        }
       
       
      </div>
      
     
    </div>
  )
}

export default PatientList