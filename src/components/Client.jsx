

function Client({petName, ownerName, ownerPhone, ownerMail, date, hour, symptoms, id}) {

    const handleDateValidation = () => {
        if (date && hour != undefined || "") {
            return `${date} at ${hour}`;
            console.log("new")
        }
    }
    
  return (
      
      <section className="bg-white mx-10 mb-10 rounded-lg p-5 shadow-lg">
          <div className="bg-indigo-400 font-bold rounded-md p-5 text-white  ml-5 mt-5 w-1/2">
              {id ? `ID: ${id}` : "No id registered!"}
          </div>
          <div className="flex flex-col lg:flex-row m-5">
              <p className="text-indigo-600 font-bold"></p>
              <span className=" text-3xl font-bold" > {petName? petName: "Pet Name" } </span>
          </div>   
          <div className="flex flex-col lg:flex-row m-5">
              <p className="text-indigo-600 font-bold"> Owner Name </p>
              <span className="ml-2"> {ownerName? ownerName: "Owner Name"} </span>
          </div> 
          <div className="flex flex-col lg:flex-row m-5">
              <p className="text-indigo-600 font-bold"> Owner E-mail </p>
              <span className="ml-2"> {ownerMail? ownerMail: "owner@mail.com"} </span>
          </div> 
          <div className="flex flex-col lg:flex-row m-5">
              <p className="text-indigo-600 font-bold"> Owner Phone </p>
              <span className="ml-2"> {ownerPhone? ownerPhone : "123 4567890" }  </span>
          </div> 
          <div className="flex flex-col lg:flex-row m-5">
              <p className="text-indigo-600 font-bold"> Received in</p>
              <span className="ml-2"> {handleDateValidation() ? handleDateValidation():"Date at Hour"} </span>
          </div> 
          <div className="flex flex-col lg:flex-row m-5">
              <p className="text-indigo-600 font-bold"> Observations </p>
              <span className="ml-2"> {symptoms?symptoms:"Sypmtoms"} </span>
          </div>
          <div className="flex flex-col m-5">
              <p className="text-indigo-600 font-bold"> Responsable </p>
              <select className="px-6 py-3 mt-4 shadow-md border-2 border-indigo-600 rounded-lg" id="">
                  <option value="FL"> Dr. Harry Maguire </option>
                  <option value="ATL"> Dr. Chelsea Obstain </option>
                  <option value="NY"> Dr. Mark Defflis</option>
              </select>
          </div> 

          <div className="justify-center flex flex-col items-center sm:flex-row space-around" >
              <button className="bg-yellow-500 font-bold text-white px-5 py-3 rounded-md  mb-3 mx-5 w-1/3 hover:bg-yellow-600 transition-all"> Edit </button>  
              <button className="bg-red-500 font-bold text-white px-5 py-3 rounded-md mb-3 mx-5 w-1/3 hover:bg-red-700 transition-all"> Delete</button>
          </div>
          
      </section>
    
  )
}

export default Client