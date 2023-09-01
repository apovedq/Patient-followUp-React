import React from 'react'

function Error({children}) {
  return (
      <div className="w-full bg-red-400 text-white font-bold text-center rounded-md shadow-md p-5 mt-3">
          {children}
      </div>
  )
}

export default Error