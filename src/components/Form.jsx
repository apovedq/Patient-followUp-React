function Form() {
  return (
    //When medium size screem flexbox size would be 1/2, if larger would be 2/5
    <div className="md:w-1/2 lg:w-2/5" >
      <h1 className="font-black text-3xl text-center"> Patients follow up</h1>

      <p className="text-lg text-center"> Add a new patient {" "} 
        <span className="text-indigo-600 font-bold"> and manage them </span> </p>
      
      {/* Patient personal infomation */}

      <form className="bg-white rounded-lg p-10 mt-10">
        
        <h3 className="text-lg font-black text-gray-700"> Patient Information</h3>

        <section className=" flex flex-row">

          <div className="m-5">
            <label htmlFor="name_input"
              className="block font-bold text-indigo-600"> Pet Name </label>
            <input id="name_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="text"
            />
          </div>

          <div className="m-5">
            <label htmlFor="age_input"
              className="block font-bold text-indigo-600"> Pet age</label>
            <input id="age_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="text"
             />
          </div>

        </section>
        
        <section className=" flex flex-row">

          <div className="m-5">
            <label htmlFor="owner_name_input"
              className="block font-bold text-indigo-600">  Owners Name </label>
            <input id="owner_name_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="text"
            />
          </div>

          <div className="m-5">
            <label htmlFor="owner_phone_input"
              className="block font-bold text-indigo-600"> Owners Phone Number </label>
            <input id="owner_phone_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="text"
              placeholder="(+1)"
            />
          </div>

        </section>

        <section className=" flex flex-row">

          <div className="m-5">
            <label htmlFor="owner_id_input"
              className="block font-bold text-indigo-600">  Owners Email </label>
            <input id="owner_id_input"
              className="shadow-md border-2 rounded-md p-3 mt-2"
              type="text"
              placeholder="@email.com"
            />
          </div>

          <div className="m-5">
            <label htmlFor="owner_id_residence_input"
              className="block font-bold text-indigo-600"> Owners Residence </label>
            <select className="px-6 py-3 mt-3 shadow-md border-2 border-indigo-600 rounded-lg" id="">
              <option value="FL"> Florida </option>
              <option value="ATL"> Atlanta </option>
              <option value="NY"> New York</option>
            </select>
          </div>

        </section>

        <h3 className="text-lg font-black text-gray-700 mt-3">Appointment information</h3>


      </form>
    </div>
  )
}

export default Form