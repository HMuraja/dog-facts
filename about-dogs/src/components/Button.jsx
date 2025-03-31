import React from 'react'

function Button({clickFunc = () => {}, text, customStyle='rounded'}) {
  const btnStyle = `font-bold p-1 w-50 cursor-pointer border-2 border-black bg-yellow-c hover:bg-yellow-dark-c active:inset-shadow-sm inset-shadow-black ${customStyle}`;
  return (
    <button className={btnStyle} onClick={clickFunc}>{text}</button>
  )
}

export default Button