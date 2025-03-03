import React from 'react'

function Button({child}) {
    const btnStyle = "text-white font-bold p-3 rounded-4xl bg-violet-c w-40 text-center mt-2 hover:bg-blue-c "
  return (
    <button className='btnStyle'>{child}</button>
  )
}

export default Button