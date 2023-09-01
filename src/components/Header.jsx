import logo from "../assets/logo.png"

function Header() {

  return (
    <div className="flex flex-col items-center">
      <img src={logo} className="mb-5 object-contain"/>
      <h1 className="font-black text-5xl text-center w-2/3 mx-auto"> Daily <span className="text-indigo-600"> Follow Up </span> </h1>
    </div>
      
  )
}

export default Header